import { FaArrowRight, FaChartLine, FaLock, FaHandsHelping } from 'react-icons/fa';

const AuthUserBanner = () => (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 lg:p-12 flex flex-col justify-center text-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

        <div className="relative z-10 text-center space-y-6">
            {/* Illustration */}
            <div className="mb-8 flex justify-center">
                <div className="relative w-48 h-32 bg-white/20 rounded-lg border border-white/30 backdrop-blur-sm p-4">
                    <div className="w-full h-full bg-white/10 border border-white/20 flex items-center justify-center rounded">
                        <div className="space-y-2">
                            <div className="w-16 h-2 bg-white/40 rounded"></div>
                            <div className="w-12 h-2 bg-white/30 rounded"></div>
                            <div className="w-20 h-2 bg-white/30 rounded"></div>
                        </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                        <FaChartLine className="text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                        <FaLock className="text-white" />
                    </div>
                    <div className="absolute top-1/2 -right-8 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                        <FaHandsHelping className="text-white" />
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-bold">Smart Accounting, Simplified</h2>
            <p className="text-blue-100 text-lg">
                Manage invoices, track payments, and automate GST returns — all from one secure, intuitive platform built for modern businesses.
            </p>
            <button className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105">
                <span>Explore Features</span>
                <FaArrowRight />
            </button>
        </div>
    </div>
);

export default AuthUserBanner;
