import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { HiMail, HiLockClosed } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import SocialLogin from './SocialLogin';

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const isValidEmail = (val) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!isValidEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        setIsLoading(true);

        // Simulate login and redirect
        setTimeout(() => {
            setIsLoading(false);
            navigate('/user-detail');
        }, 1000);
    };

    return (
        <div className="p-8 flex flex-col justify-center">
            <Logo />

            <div className="my-5">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign in</h1>
                <p className="text-gray-600">to access AccountFlow</p>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="relative">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-4 py-4 border ${error ? 'border-red-500' : 'border-gray-200'
                            } rounded-xl bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200`}
                        placeholder="Email address"
                        required
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <HiMail />
                    </div>
                </div>

                {/* Password */}
                <div className="relative my-2">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full px-4 py-4 border ${error ? 'border-red-500' : 'border-gray-200'
                            } rounded-xl bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200`}
                        placeholder="Password"
                        required
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <HiLockClosed />
                    </div>
                </div>

                {/* Error */}
                {error && <p className="text-sm text-red-500 my-2">{error}</p>}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:bg-gray-300"
                >
                    {isLoading ? (
                        <>
                            <svg
                                className="animate-spin h-6 w-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            <span>Signing in...</span>
                        </>
                    ) : (
                        <>
                            <span>Next</span>
                            <FaArrowRight />
                        </>
                    )}
                </button>
            </form>

            <div className="mt-5 text-center">
                <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
            </div>

            <div className="my-4 relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">or continue with</span>
                </div>
            </div>

            <SocialLogin />

            <div className="text-center">
                <span className="text-gray-600">Don't have an AccountFlow account? </span>
                <a href="#" className="text-blue-600 hover:underline font-semibold">Sign up now</a>
            </div>
        </div>
    );
};

export default AuthForm;
