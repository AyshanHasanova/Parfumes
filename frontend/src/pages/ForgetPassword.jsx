import React, { useState, useEffect } from 'react';
import { useForgotPasswordMutation } from '../redux/api/userApi'; // Path'i özünüzə görə dəyişdirin
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    // useNavigate hook'u ilə naviqasiya etmək üçün
    const navigate = useNavigate();

    // E-poçt inputunu idarə etmək üçün state
    const [email, setEmail] = useState('');

    // RTK Query hook'unu istifadə edirik
    const [forgotPassword, { isLoading, isSuccess, isError, error }] = useForgotPasswordMutation();

    // Formu submit etdikdə işə düşəcək funksiya
    const handleSubmit = (e) => {
        e.preventDefault();
        // Mutation'u çağıraraq back-end'ə POST tələbi göndəririk
        forgotPassword({ email });
    };

    // isSuccess və isError vəziyyətlərini idarə etmək üçün useEffect
    useEffect(() => {
        if (isSuccess) {
            // Uğurlu olduqda istifadəçini başqa səhifəyə yönləndirir
            navigate('/login?message=check_email');
        }
        if (isError) {
            // Xəta olduqda console'a yazdırırıq
            console.error(error);
        }
    }, [isSuccess, isError, error, navigate]);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://i.pinimg.com/1200x/e6/2c/51/e62c513ea89fe1a701275a8c6cf58118.jpg" alt="logo" />
                    Glowing
                </a>
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Şifrəni Sıfırlamaq
                    </h2>
                    <p className="font-light text-gray-500 dark:text-gray-400">
                        Zəhmət olmasa, hesabınızla əlaqəli e-poçt ünvanını daxil edin.
                    </p>

                    {/* Uğur mesajını göstərmək üçün şərti render */}
                    {isSuccess && (
                        <div className="mt-4 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                            Şifrə sıfırlama linki e-poçtunuza göndərildi. Zəhmət olmasa, yoxlayın.
                        </div>
                    )}
                    
                    {/* Xəta mesajını göstərmək üçün şərti render */}
                    {isError && (
                        <div className="mt-4 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                            {error?.data?.message || 'Bir xəta baş verdi. Zəhmət olmasa, yenidən cəhd edin.'}
                        </div>
                    )}

                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-poçtunuz</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                required=""
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center bg-green-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-50"
                        >
                            {isLoading ? 'Göndərilir...' : 'Göndər'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgetPassword;

