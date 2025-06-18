import Logo from './Logo'

const Footer = () => {
    return (
        <footer className="w-full mt-12 border-t border-gray-200/60 pt-4 text-center md:text-left">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-600">
                <div className="flex items-center space-x-2 font-semibold text-gray-800">
                    <Logo size={9} />
                    <span className="text-gray-500 font-normal hidden sm:inline">| Accounting Simplified</span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start space-x-4">
                    <a href="#" className="hover:text-blue-600 transition">Support</a>
                    <a href="#" className="hover:text-blue-600 transition">Privacy</a>
                    <a href="#" className="hover:text-blue-600 transition">Terms</a>
                </div>
                <div className="text-xs text-gray-400">
                    © {new Date().getFullYear()} AccountFlow Inc. | v1.3.2
                </div>
            </div>
        </footer>
    )
}

export default Footer