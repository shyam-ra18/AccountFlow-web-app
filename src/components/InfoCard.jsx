import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

const InfoCard = ({
    title,
    value,
    subtitle,
    icon: Icon,
    trend,
}) => {
    return (
        <div className="group relative overflow-hidden rounded-xl min-w-[180px] max-w-[220px] bg-gradient-to-br from-blue-400 to-indigo-500 shadow-sm transition-transform ease-in-out duration-450 hover:scale-[1.02]">

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>

            {/* Content */}
            <div className="relative z-10 p-4 text-white">
                <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-white/20 rounded-lg border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                        <Icon className="w-5 h-5 text-white group-hover:rotate-6 transition-transform duration-300" />
                    </div>

                    {trend && (
                        <div className={`flex items-center space-x-1 text-xs font-medium px-2 py-1 rounded-md backdrop-blur-sm ${trend.isPositive
                            ? 'bg-green-300/20 text-green-200 border border-green-300/30'
                            : 'bg-red-300/20 text-red-200 border border-red-300/30'
                            } transition-all duration-300`}>
                            <span>{trend.isPositive ? <FiTrendingUp /> : <FiTrendingDown />}</span>
                            <span>{trend.value}</span>
                        </div>
                    )}

                </div>

                <div className="space-y-1">
                    <h3 className="text-xs font-medium text-white uppercase tracking-wide">
                        {title}
                    </h3>
                    <div className="text-xl font-bold leading-snug text-white">
                        {value}
                    </div>
                    {subtitle && (
                        <p className="text-xs text-white">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {/* Hover Effect Border */}
            {/* <div className="absolute inset-0 border border-white/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
        </div>
    );
};

export default InfoCard;
