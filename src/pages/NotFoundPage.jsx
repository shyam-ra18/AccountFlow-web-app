import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 relative overflow-hidden">

            {/* Radial glow */}
            <div className="absolute w-[600px] h-[600px] bg-purple-400/20 blur-[120px] rounded-full -top-1/2 -left-1/3"></div>
            <div className="absolute w-[500px] h-[500px] bg-blue-400/20 blur-[100px] rounded-full -bottom-1/3 -right-1/4"></div>

            {/* Card */}
            <div className="z-10 bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl px-8 py-10 max-w-lg w-full text-center space-y-6">

                <div className="text-7xl font-extrabold text-blue-600 animate-pulse">404</div>

                <h1 className="text-2xl font-bold text-gray-800">Page Not Found</h1>
                <p className="text-gray-600">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                </p>

                <Link
                    to="/dashboard"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white font-medium px-5 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-200"
                >
                    <HiArrowLeft className="text-xl" />
                    <span>Go to Dashboard</span>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
