const Logo = ({ size = 9 }) => (
    <div className="flex items-center space-x-2">
        <div className={`w-${size} h-${size} bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center cursor-pointer`}>
            <div className={`w-${size - 4} h-${size - 4} bg-white rounded-sm`} />
        </div>
        <span className="text-xl font-bold text-gray-900 cursor-pointer">AccountFlow</span>
    </div>
);

export default Logo;
