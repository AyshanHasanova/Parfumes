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
      console.log("Xəta:", err)
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-full">
        <Link to="/" className="flex items-center mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          <img className="w-10 h-10 mr-2 rounded-full shadow-md" src="https://i.pinimg.com/1200x/e6/2c/51/e62c513ea89fe1a701275a8c6cf58118.jpg" alt="logo" />
          Flame Team
        </Link>
        <div className="w-full bg-white rounded-2xl shadow-xl dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center dark:text-white">Daxil ol</h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 rounded-xl border" placeholder="E-poçt" required />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 rounded-xl border" placeholder="Şifrə" required />
              <button type="submit" disabled={isLoading} className="w-full bg-green-600 text-white p-3 rounded-xl font-bold transition duration-200 hover:bg-green-700">
                {isLoading ? "Giriş edilir..." : "Daxil ol"}
              </button>
            </form>

            {/* İSTƏDİYİN HİSSƏ BURA İDİ */}
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
              Hesabınız yoxdur?{" "}
              <Link to="/register" className="font-medium text-green-600 hover:underline dark:text-green-500">
                Qeydiyyatdan keçin
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Login









