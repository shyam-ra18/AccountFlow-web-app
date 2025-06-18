import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend
} from 'recharts';
import { HiOutlineCash, HiOutlineCube, HiOutlineDotsCircleHorizontal } from 'react-icons/hi';

const revenueData = [
    { name: 'Services', value: 6500000, percentage: 58.3, icon: <HiOutlineCash /> },
    { name: 'Products', value: 3800000, percentage: 34.1, icon: <HiOutlineCube /> },
    { name: 'Other Income', value: 853838, percentage: 7.6, icon: <HiOutlineDotsCircleHorizontal /> }
];

const COLORS = ['#3B82F6', '#6366F1', '#8B5CF6'];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-md text-sm">
                <p className="font-semibold text-gray-800">{data.name}</p>
                <p className="text-gray-600">Revenue: ₹{data.value.toLocaleString()}</p>
                <p className="text-gray-600">Share: {data.percentage}%</p>
            </div>
        );
    }
    return null;
};

const RevenueDistributionChart = () => {
    const totalRevenue = revenueData.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-md">
            {/* Header */}
            <div className="mb-4 sm:mb-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Revenue Distribution</h3>
                <p className="text-xs sm:text-sm text-gray-600">Revenue sources breakdown</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Donut Chart - Responsive sizing */}
                <div className="w-full lg:w-1/2 h-56 sm:h-64 md:h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <defs>
                                {COLORS.map((color, index) => (
                                    <linearGradient key={index} id={`grad-${index}`} x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor={color} stopOpacity={1} />
                                        <stop offset="100%" stopColor={color} stopOpacity={0.7} />
                                    </linearGradient>
                                ))}
                            </defs>
                            <Pie
                                data={revenueData}
                                cx="50%"
                                cy="50%"
                                innerRadius={window.innerWidth < 640 ? 40 : 60}
                                outerRadius={window.innerWidth < 640 ? 70 : 100}
                                paddingAngle={2}
                                dataKey="value"
                                label={({ percentage }) => `${percentage}%`}
                                labelLine={false}
                                animationDuration={1500}
                            >
                                {revenueData.map((_, index) => (
                                    <Cell
                                        key={index}
                                        fill={`url(#grad-${index})`}
                                        stroke="white"
                                        strokeWidth={window.innerWidth < 640 ? 1 : 2}
                                    />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                            {/* Show legend only on mobile */}
                            {window.innerWidth < 640 && (
                                <Legend
                                    layout="horizontal"
                                    verticalAlign="bottom"
                                    align="center"
                                    wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                                />
                            )}
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Revenue Details - Responsive layout */}
                <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4">
                    <div className="text-center lg:text-left">
                        <div className="text-xl sm:text-2xl font-bold text-gray-900">
                            ₹{totalRevenue.toLocaleString()}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500">Total Revenue</p>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                        {revenueData.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl text-white shadow-sm backdrop-blur-md cursor-pointer transition-all duration-200 hover:scale-[1.01]"
                                style={{
                                    background: `linear-gradient(135deg, ${COLORS[index]} 0%, ${COLORS[index]}cc 100%)`
                                }}
                            >
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    {/* Responsive icon container */}
                                    <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-inner">
                                        {React.cloneElement(item.icon, {
                                            className: 'text-white text-sm sm:text-lg'
                                        })}
                                    </div>
                                    <span className="text-xs sm:text-sm font-medium">{item.name}</span>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs sm:text-sm font-semibold">
                                        ₹{item.value.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                    </div>
                                    <div className="text-[10px] sm:text-xs opacity-90">{item.percentage}%</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RevenueDistributionChart;