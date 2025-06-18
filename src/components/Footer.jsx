import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="w-full mt-12 border-t border-gray-200/60 pt-4 px-4 text-sm text-gray-600">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">

                {/* Logo + Tagline */}
                <div className="flex-col md:flex-row items-center justify-center sm:justify-start space-x-2 font-semibold text-gray-800 text-sm">
                    <Logo size={7} />
                    <span className="text-gray-500 font-normal hidden xs:inline text-xs sm:text-sm">| Accounting Simplified</span>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-xs sm:text-sm">
                    <a href="#" className="hover:text-blue-600 transition">Support</a>
                    <a href="#" className="hover:text-blue-600 transition">Privacy</a>
                    <a href="#" className="hover:text-blue-600 transition">Terms</a>
                </div>

                {/* Copyright */}
                <div className="text-[10px] sm:text-xs text-gray-400 text-center sm:text-right">
                    © {new Date().getFullYear()} AccountFlow Inc. | v1.3.2
                </div>
            </div>
        </footer>
    );
};

export default Footer;
