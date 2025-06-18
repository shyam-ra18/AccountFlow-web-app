import {
    Area,
    CartesianGrid,
    ComposedChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';
import { FiArrowDownCircle, FiArrowUpCircle, FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { cashFlowData } from '../utils/constant';


const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;

        return (
            <div className="bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl p-4 shadow-xl text-sm space-y-1">
                <p className="font-semibold text-gray-900 mb-1">{`${label} 2024`}</p>

                <div className="flex justify-between text-gray-700">
                    <span className="flex items-center space-x-1">
                        <FiTrendingUp className="text-gray-400" />
                        <span>Opening:</span>
                    </span>
                    <span className="font-medium">₹{data.opening.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-green-700">
                    <span className="flex items-center space-x-1">
                        <FiArrowDownCircle className="text-green-500" />
                        <span>Incoming:</span>
                    </span>
                    <span className="font-medium">₹{data.incoming.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-red-700">
                    <span className="flex items-center space-x-1">
                        <FiArrowUpCircle className="text-red-500" />
                        <span>Outgoing:</span>
                    </span>
                    <span className="font-medium">₹{data.outgoing.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-blue-700 border-t border-gray-200 pt-1 mt-1">
                    <span className="flex items-center space-x-1 font-medium">
                        <FiTrendingDown className="text-blue-600" />
                        <span>Closing:</span>
                    </span>
                    <span className="font-semibold">₹{data.closing.toLocaleString()}</span>
                </div>
            </div>
        );
    }
    return null;
};


const CashFlowChart = () => {
    const totalIncoming = 12538.29;
    const totalOutgoing = 12358.12;
    const openingBalance = 42250.11;
    const closingBalance = 15933.67;

    return (
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/50 p-5 shadow-lg">
            <div className="flex justify-between items-start ">
                {/* Left: Title */}
                <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                        <FiTrendingUp className="text-blue-600" />
                        <span>Cash Flow</span>
                    </h3>
                    <p className="text-gray-600 text-xs">Financial year cash flow analysis</p>
                </div>

                {/* Right: Summary */}
                <div className="grid grid-cols-4 gap-3 text-xs min-w-[250px]">
                    {/* Opening Balance */}
                    <div className="flex justify-between items-center gap-2 bg-white/70 backdrop-blur-sm rounded-md px-3 py-2 shadow-sm border border-gray-200 hover:shadow-md transition">
                        <span className="text-gray-600 flex items-center space-x-1">
                            <FiTrendingUp className="text-gray-400" />
                            <span>Opening</span>
                        </span>
                        <span className="font-semibold text-gray-800 bg-gray-100 rounded px-2 py-0.5">
                            ₹{openingBalance.toLocaleString()}
                        </span>
                    </div>

                    {/* Incoming */}
                    <div className="flex justify-between items-center gap-2 bg-green-50/60 rounded-md px-3 py-2 shadow-sm border border-green-100 hover:shadow-md transition">
                        <span className="text-green-700 flex items-center space-x-1">
                            <FiArrowDownCircle className="text-green-500" />
                            <span>Incoming</span>
                        </span>
                        <span className="font-semibold text-green-800 bg-green-100 rounded px-2 py-0.5">
                            ₹{totalIncoming.toLocaleString()}
                        </span>
                    </div>

                    {/* Outgoing */}
                    <div className="flex justify-between items-center gap-2 bg-red-50/60 rounded-md px-3 py-2 shadow-sm border border-red-100 hover:shadow-md transition">
                        <span className="text-red-700 flex items-center space-x-1">
                            <FiArrowUpCircle className="text-red-500" />
                            <span>Outgoing</span>
                        </span>
                        <span className="font-semibold text-red-800 bg-red-100 rounded px-2 py-0.5">
                            ₹{totalOutgoing.toLocaleString()}
                        </span>
                    </div>

                    {/* Closing Balance */}
                    <div className="flex justify-between items-center gap-2 bg-blue-50/60 rounded-md px-3 py-2 shadow-md border border-blue-100">
                        <span className="text-blue-800 font-medium flex items-center space-x-1">
                            <FiTrendingDown className="text-blue-600" />
                            <span>Closing</span>
                        </span>
                        <span className="font-bold text-blue-900 bg-blue-100 rounded px-2 py-0.5">
                            ₹{closingBalance.toLocaleString()}
                        </span>
                    </div>
                </div>

            </div>

            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={cashFlowData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                        <defs>
                            {/* Closing Gradient (Blue) */}
                            <linearGradient id="gradientClosing" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                            </linearGradient>

                            {/* Incoming Gradient (Green) */}
                            <linearGradient id="gradientIncoming" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#16A34A" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#16A34A" stopOpacity={0} />
                            </linearGradient>

                            {/* Outgoing Gradient (Red) */}
                            <linearGradient id="gradientOutgoing" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#DC2626" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#DC2626" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#E5E7EB"
                            strokeOpacity={0.3}
                        />

                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#6B7280' }}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#6B7280' }}
                            tickFormatter={(value) => `₹${(value / 1000)}k`}
                        />

                        <Tooltip content={<CustomTooltip />} />

                        {/* Area: Incoming */}
                        <Area
                            type="monotone"
                            dataKey="incoming"
                            stroke="none"
                            fill="url(#gradientIncoming)"
                            animationDuration={1500}
                        />

                        {/* Area: Outgoing */}
                        <Area
                            type="monotone"
                            dataKey="outgoing"
                            stroke="none"
                            fill="url(#gradientOutgoing)"
                            animationDuration={1500}
                        />

                        {/* Area: Closing */}
                        <Area
                            type="monotone"
                            dataKey="closing"
                            stroke="none"
                            fill="url(#gradientClosing)"
                            animationDuration={1500}
                        />

                        {/* Line: Incoming */}
                        <Line
                            type="monotone"
                            dataKey="incoming"
                            stroke="#16A34A"
                            strokeWidth={2}
                            dot={{ r: 3, fill: '#16A34A' }}
                            activeDot={{ r: 5, fill: '#fff', stroke: '#16A34A', strokeWidth: 2 }}
                            animationDuration={1500}
                        />

                        {/* Line: Outgoing */}
                        <Line
                            type="monotone"
                            dataKey="outgoing"
                            stroke="#DC2626"
                            strokeWidth={2}
                            dot={{ r: 3, fill: '#DC2626' }}
                            activeDot={{ r: 5, fill: '#fff', stroke: '#DC2626', strokeWidth: 2 }}
                            animationDuration={1500}
                            animationBegin={100}
                        />

                        {/* Line: Closing Balance */}
                        <Line
                            type="monotone"
                            dataKey="closing"
                            stroke="#3B82F6"
                            strokeWidth={3}
                            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2, fill: '#fff' }}
                            animationDuration={1500}
                            animationBegin={200}
                        />
                    </ComposedChart>
                </ResponsiveContainer>

            </div>
        </div>

    );
};

export default CashFlowChart;