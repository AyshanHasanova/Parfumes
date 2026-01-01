

import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../redux/api/userApi'
import toast from 'react-hot-toast'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [login, { isError, error, isLoading }] = useLoginMutation()
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message || "Giriş zamanı xəta baş verdi")
    }
  }, [isError, error])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await login({ email, password }).unwrap()
      
      // 1. Tokeni yaddaşa yazırıq
      localStorage.setItem("token", res.token)
      
      toast.success("Xoş gəldiniz!")

      // 2. MÜHÜM DƏYİŞİKLİK: Mobil cihazlarda Dashboard-un 
      // dərhal görünməsi üçün səhifəni tam yönləndirmə ilə açırıq.
      window.location.assign("/") 
      
    } catch (err) {
      console.log("Xəta baş verdi:", err)
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-full">
        <Link to="/" className="flex items-center mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          <img 
            className="w-10 h-10 mr-2 rounded-full shadow-md" 
            src="https://i.pinimg.com/1200x/e6/2c/51/e62c513ea89fe1a701275a8c6cf58118.jpg" 
            alt="logo" 
          />
          Flame Team
        </Link>

        <div className="w-full bg-white rounded-2xl shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 border border-gray-100">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl dark:text-white text-center">
              Hesabınıza daxil olun
            </h1>
            
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
                  E-poçt ünvanınız
                </label>
                <input 
                  type="email" 
                  name="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  id="email" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 block w-full p-3 outline-none transition-all dark:bg-gray-700 dark:text-white" 
                  placeholder="nümunə@mail.com" 
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
                  Şifrə
                </label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  name="password" 
                  id="password" 
                  placeholder="••••••••" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 block w-full p-3 outline-none transition-all dark:bg-gray-700 dark:text-white" 
                  required
                />
              </div>

              <div className="flex items-center justify-end">
                <Link to="/forgot-password" hidden className="text-sm font-medium text-green-600 hover:underline">
                  Şifrəni unutmusunuz?
                </Link>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-green-600 text-white hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-xl text-sm px-5 py-3.5 text-center transition-all shadow-lg shadow-green-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Giriş edilir...
                  </div>
                ) : "Daxil ol"}
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center pt-2">
                Hələ hesabınız yoxdur?{" "}
                <Link to="/register" className="font-bold text-green-600 hover:underline ml-1">
                  Qeydiyyatdan keçin
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login


