import { useState } from 'react';
import { FaArrowRight, FaCalendarAlt, FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { financialYears } from '../utils/constant';
import Logo from './Logo';


const AuthUserData = () => {
    const [username, setUsername] = useState('');
    const [year, setYear] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username.trim() || !year) {
            setError('Please fill out all fields.');
            return;
        }

        setIsLoading(true);
        localStorage.setItem('username', username);
        localStorage.setItem('financialYear', year);

        setTimeout(() => {
            setIsLoading(false);
            navigate('/dashboard');
        }, 1500);
    };

    return (
        <div className="p-8 lg:p-12 flex flex-col justify-center">
            <Logo size={10} />

            <div className="my-5">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome</h1>
                <p className="text-gray-600">Set up your profile to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Username */}
                <div className="relative">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your name"
                        className={`w-full px-4 py-4 border border-gray-200  rounded-xl bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200`}
                    />
                    <FaUserAlt className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-base" />
                </div>

                {/* Financial Year */}
                <div className="relative">
                    <select
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className={`w-full px-4 py-4 border border-gray-200  rounded-xl bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200`}
                    >
                        <option value="">Select Financial Year</option>
                        {financialYears.map((fy, idx) => (
                            <option key={idx} value={fy}>
                                {fy}
                            </option>
                        ))}
                    </select>
                    <FaCalendarAlt className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-base" />
                </div>

                {error && <p className="text-xs text-red-500">{error}</p>}

                {/* Button */}
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
                            <span>Processing...</span>
                        </>
                    ) : (
                        <>
                            <span>Continue</span>
                            <FaArrowRight />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default AuthUserData;
