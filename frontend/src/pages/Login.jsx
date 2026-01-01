// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useLoginMutation } from '../redux/api/userApi';
// import toast from 'react-hot-toast';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [login, { isError, error, isLoading }] = useLoginMutation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isError) {
//       toast.error(error?.data?.message || "Giriş zamanı xəta baş verdi");
//     }
//   }, [isError, error]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await login({ email, password }).unwrap();
      
//       // Tokeni hər iki ehtimalda (res.token və ya res.data.token) yoxlayırıq
//       const token = res?.token || res?.data?.token;
      
//       if (token) {
//         localStorage.setItem("token", token);
//         toast.success("Xoş gəldiniz!");
        
//         // Navbar-dakı useEffect-in (refetch) işə düşməsi üçün ən sağlam yol
//         setTimeout(() => {
//           window.location.assign("/"); 
//         }, 1000);
//       } else {
//         toast.error("Giriş uğurludur, lakin token alınmadı.");
//       }
//     } catch (err) {
//       console.error("Login xətası:", err);
//     }
//   };

//   return (
//     <section className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
//         <div className="p-8 space-y-6">
//           <div className="text-center">
//             <Link to="/" className="inline-block mb-4">
//               <img 
//                 src="https://i.pinimg.com/1200x/e6/2c/51/e62c513ea89fe1a701275a8c6cf58118.jpg" 
//                 className="w-16 h-16 rounded-full mx-auto border-2 border-green-500 p-1" 
//                 alt="logo" 
//               />
//             </Link>
//             <h1 className="text-2xl font-bold text-gray-800">Daxil ol</h1>
//             <p className="text-gray-500 text-sm mt-1">Flame Team platformasına xoş gəldiniz</p>
//           </div>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">E-poçt</label>
//               <input 
//                 type="email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" 
//                 placeholder="nümunə@mail.com" 
//                 required 
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Şifrə</label>
//               <input 
//                 type="password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition" 
//                 placeholder="••••••••" 
//                 required 
//               />
//             </div>
            
//             <button 
//               type="submit" 
//               disabled={isLoading} 
//               className="w-full bg-green-600 hover:bg-green-700 text-white p-3.5 rounded-xl font-bold transition shadow-lg shadow-green-100 active:scale-95 disabled:opacity-70"
//             >
//               {isLoading ? "Giriş edilir..." : "Daxil ol"}
//             </button>
//           </form>

//           <div className="text-center space-y-2">
//             <p className="text-sm text-gray-600">
//               Hesabınız yoxdur?{" "}
//               <Link to="/register" className="text-green-600 font-bold hover:underline">
//                 Qeydiyyatdan keçin
//               </Link>
//             </p>
//             <Link to="/password/forget" className="text-xs text-gray-400 hover:text-green-600">
//               Şifrəni unutmusunuz?
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLoginMutation } from '../redux/api/userApi'
import toast from 'react-hot-toast'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [login, { isError, error, isLoading }] = useLoginMutation()

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message || "Giriş zamanı xəta baş verdi")
    }
  }, [isError, error])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await login({ email, password }).unwrap()
      const token = res?.token || res?.data?.token;
      if (token) {
        localStorage.setItem("token", token);
        toast.success("Xoş gəldiniz!");
        setTimeout(() => {
          window.location.assign("/"); 
        }, 1000);
      }
    } catch (err) {
      console.log("Login xətası:", err)
    }
  }

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
        <Link to="/" className="inline-block mb-6">
          <img className="w-16 h-16 rounded-full border-2 border-green-500 p-0.5" src="https://i.pinimg.com/1200x/e6/2c/51/e62c513ea89fe1a701275a8c6cf58118.jpg" alt="logo" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Daxil ol</h1>
        <form className="space-y-4 text-left" onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3.5 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-500" placeholder="E-poçt" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3.5 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-500" placeholder="Şifrə" required />
          <button type="submit" disabled={isLoading} className="w-full bg-green-600 text-white p-3.5 rounded-xl font-bold hover:bg-green-700 transition">
            {isLoading ? "Giriş edilir..." : "Daxil ol"}
          </button>
        </form>
        <div className="mt-6 flex flex-col space-y-2 text-sm">
          <p className="text-gray-500">
            Hesabınız yoxdur? <Link to="/register" className="text-green-600 font-bold hover:underline">Qeydiyyatdan keçin</Link>
          </p>
          <Link to="/password/forget" className="text-gray-400 hover:text-green-600">Şifrəni unutmusunuz?</Link>
        </div>
      </div>
    </section>
  )
}
export default Login









