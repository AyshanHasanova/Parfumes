// import React, { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useRegisterMutation } from '../redux/api/userApi'
// import toast from 'react-hot-toast'

// const Register = () => {
//   const navigate = useNavigate()
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')

//   const [register, { isLoading, error, isError }] = useRegisterMutation()

//   useEffect(() => {
//     if (isError && error?.data?.message) {
//       toast.error(error.data.message)
//     }
//   }, [isError, error])

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (password !== confirmPassword) {
//       toast.error('Şifrələr uyğun deyil!')
//       return
//     }

//     try {
//       const res = await register({ name, email, password }).unwrap()
//       toast.success('Uğurla qeydiyyatdan keçdiniz!')
//       navigate('/')
//     } catch (err) {
//       console.error('Register error:', err)
//     }
//   }

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <Link
//           to="/"
//           className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
//         >
//           <img
//             className="w-8 h-8 mr-2"
//             src="https://i.pinimg.com/1200x/e6/2c/51/e62c513ea89fe1a701275a8c6cf58118.jpg"
//             alt="logo"
//           />
//           Glowing
//         </Link>
//         <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//               Create an account
//             </h1>
//             <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                   Your name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//                   placeholder="Adınız"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//                   placeholder="name@company.com"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="confirm-password"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Confirm password
//                 </label>
//                 <input
//                   type="password"
//                   name="confirm-password"
//                   id="confirm-password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   placeholder="••••••••"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
//                   required
//                 />
//               </div>

//               <div className="flex items-start">
//                 <div className="flex items-center h-5">
//                   <input
//                     id="terms"
//                     type="checkbox"
//                     className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
//                     required
//                   />
//                 </div>
//                 <div className="ml-3 text-sm">
//                   <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
//                     I accept the{' '}
//                     <a className="font-medium text-green-600 hover:underline dark:text-green-500" href="#">
//                       Terms and Conditions
//                     </a>
//                   </label>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
//               >
//                 {isLoading ? 'Yaradılır...' : 'Create an account'}
//               </button>

//               <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                 Already have an account?{' '}
//                 <Link to="/login" className="font-medium text-green-600 hover:underline dark:text-blue-500">
//                   Login here
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Register

// import React, { useState, useEffect } from 'react'
// import { Link, useNavigate, useSearchParams } from 'react-router-dom' // useSearchParams əlavə olundu
// import { useRegisterMutation } from '../redux/api/userApi'
// import toast from 'react-hot-toast'

// const Register = () => {
//   const navigate = useNavigate()
//   const [searchParams] = useSearchParams() // URL-dəki parametrləri götürürük

//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const [referralCode, setReferralCode] = useState('') // YENİ STATE

//   const [register, { isLoading, error, isError }] = useRegisterMutation()

//   useEffect(() => {
//     // URL-dən 'ref' kodunu oxuyuruq (məsələn: sayt.com/register?ref=XYZ123)
//     const ref = searchParams.get('ref')
//     if (ref) {
//       setReferralCode(ref)
//     }

//     if (isError && error?.data?.message) {
//       toast.error(error.data.message)
//     }
//   }, [isError, error, searchParams])

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (password !== confirmPassword) {
//       toast.error('Şifrələr uyğun deyil!')
//       return
//     }

//     try {
//       // YENİ: referralCode artıq register sorğusuna göndərilir
//       const res = await register({ name, email, password, referralCode }).unwrap()
//       toast.success('Uğurla qeydiyyatdan keçdiniz!')
//       navigate('/')
//     } catch (err) {
//       console.error('Register error:', err)
//     }
//   }

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//           <img className="w-8 h-8 mr-2" src="https://i.pinimg.com/1200x/e6/2c/51/e62c513ea89fe1a701275a8c6cf58118.jpg" alt="logo" />
//           Glowing
//         </Link>
//         <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create an account</h1>
//             <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
//                 <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white" placeholder="Adınız" required />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                 <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white" placeholder="name@company.com" required />
//               </div>

//               <div>
//                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                 <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white" required />
//               </div>

//               <div>
//                 <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
//                 <input type="password" name="confirm-password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white" required />
//               </div>

//               {/* YENİ: REFERAL KOD INPUTU */}
//               <div>
//                 <label htmlFor="referralCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Referal Kod (Məcburi deyil)</label>
//                 <input
//                   type="text"
//                   name="referralCode"
//                   id="referralCode"
//                   value={referralCode}
//                   onChange={(e) => setReferralCode(e.target.value)}
//                   placeholder="Məs: AX39ZS"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:text-white"
//                 />
//               </div>

//               <div className="flex items-start">
//                 <div className="flex items-center h-5">
//                   <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700" required />
//                 </div>
//                 <div className="ml-3 text-sm">
//                   <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-green-600 hover:underline" href="#">Terms and Conditions</a></label>
//                 </div>
//               </div>

//               <button type="submit" className="w-full text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
//                 {isLoading ? 'Yaradılır...' : 'Create an account'}
//               </button>

//               <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                 Already have an account? <Link to="/login" className="font-medium text-green-600 hover:underline">Login here</Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Register


import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useRegisterMutation } from '../redux/api/userApi'
import toast from 'react-hot-toast'

const Register = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [referralCode, setReferralCode] = useState('')

  const [register, { isLoading, error, isError }] = useRegisterMutation()

  useEffect(() => {
    const ref = searchParams.get('ref')
    if (ref) {
      setReferralCode(ref)
    }

    if (isError && error?.data?.message) {
      toast.error(error.data.message)
    }
  }, [isError, error, searchParams])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error('Şifrələr uyğun deyil!')
      return
    }

    try {
      await register({ name, email, password, referralCode }).unwrap()
      toast.success('Hesabınız uğurla yaradıldı!')
      navigate('/')
    } catch (err) {
      console.error('Qeydiyyat xətası:', err)
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center py-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-full">
        {/* LOGO */}
        <Link to="/" className="flex items-center mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          <img 
            className="w-10 h-10 mr-2 rounded-full shadow-sm" 
            src="https://i.pinimg.com/1200x/e6/2c/51/e62c513ea89fe1a701275a8c6cf58118.jpg" 
            alt="logo" 
          />
          Flame Team
        </Link>

        <div className="w-full bg-white rounded-2xl shadow-xl dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Yeni hesab yaradın
            </h1>
            
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {/* AD VƏ SOYAD */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adınız və Soyadınız</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-xl focus:ring-green-500 focus:border-green-500 block w-full p-3 outline-none transition-all dark:bg-gray-700 dark:text-white" 
                  placeholder="Məs: Əli Məmmədov" 
                  required 
                />
              </div>

              {/* EMAIL */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-poçt ünvanınız</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-xl focus:ring-green-500 focus:border-green-500 block w-full p-3 outline-none transition-all dark:bg-gray-700 dark:text-white" 
                  placeholder="nümunə@mail.com" 
                  required 
                />
              </div>

              {/* ŞİFRƏ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Şifrə</label>
                  <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="••••••••" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-xl focus:ring-green-500 focus:border-green-500 block w-full p-3 outline-none transition-all dark:bg-gray-700 dark:text-white" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Təkrar şifrə</label>
                  <input 
                    type="password" 
                    name="confirm-password" 
                    id="confirm-password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    placeholder="••••••••" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-xl focus:ring-green-500 focus:border-green-500 block w-full p-3 outline-none transition-all dark:bg-gray-700 dark:text-white" 
                    required 
                  />
                </div>
              </div>

              {/* REFERAL KOD */}
              <div>
                <label htmlFor="referralCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Referal Kod (İstəyə bağlı)</label>
                <input
                  type="text"
                  name="referralCode"
                  id="referralCode"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  placeholder="Məs: AX39ZS"
                  className="bg-gray-50 border border-gray-200 text-gray-900 rounded-xl block w-full p-3 outline-none focus:ring-2 focus:ring-green-500/20"
                />
              </div>

              {/* ŞƏRTLƏRİ QƏBUL ET */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300" required />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                    <a className="font-medium text-green-600 hover:underline" href="#">İstifadə şərtləri</a> ilə razıyam
                  </label>
                </div>
              </div>

              {/* QEYDİYYAT DÜYMƏSİ */}
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full text-white bg-green-600 hover:bg-green-700 font-bold rounded-xl text-sm px-5 py-3 text-center transition-all shadow-lg shadow-green-100 disabled:opacity-50"
              >
                {isLoading ? 'Hesab yaradılır...' : 'Qeydiyyatı tamamla'}
              </button>

              {/* GİRİŞ LİNKİ */}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                Artıq hesabınız var? <Link to="/login" className="font-bold text-green-600 hover:underline">Daxil olun</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register