import AuthUserBanner from '../components/AuthUserBanner';
import AuthUserData from '../components/AuthUserData';

const UserDetails = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden flex items-center justify-center">
            {/* Decorative Background Blobs */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-xl" />
                <div className="absolute top-40 right-32 w-24 h-24 bg-indigo-200/20 rounded-full blur-lg" />
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl" />
                <div className="absolute bottom-20 right-20 w-28 h-28 bg-pink-200/20 rounded-full blur-lg" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-[70vh] flex items-center justify-center p-4">
                <div className="w-full max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[600px]">
                            {/* Always show AuthUserData */}
                            <AuthUserData />

                            {/* Only show AuthUserBanner on lg screens and larger */}
                            <div className="hidden lg:block">
                                <AuthUserBanner />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-2 text-center text-sm text-gray-500">
                © 2025, AccountFlow Corporation Pvt. Ltd. All Rights Reserved.
            </div>
        </div>
    );
};

export default UserDetails;