import React from "react";
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

const data = [
    { month: "Jan", revenue: 4000, expenses: 2400 },
    { month: "Feb", revenue: 3000, expenses: 1398 },
    { month: "Mar", revenue: 5000, expenses: 2400 },
    { month: "Apr", revenue: 4780, expenses: 2908 },
    { month: "May", revenue: 5890, expenses: 3200 },
    { month: "Jun", revenue: 6390, expenses: 2500 },
    { month: "Jul", revenue: 7490, expenses: 2100 },
];

const DashboardCharts = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
            {/* Line Chart */}
            <div className="bg-white/70 backdrop-blur-md border border-blue-100 rounded-2xl p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Revenue vs Expenses (Line Chart)</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="month" tick={{ fill: '#4B5563', fontSize: 12 }} />
                        <YAxis tick={{ fill: '#4B5563', fontSize: 12 }} />
                        <Tooltip contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', borderColor: '#ccc' }} />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} activeDot={{ r: 6 }} />
                        <Line type="monotone" dataKey="expenses" stroke="#f43f5e" strokeWidth={2} activeDot={{ r: 6 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="bg-white/70 backdrop-blur-md border border-blue-100 rounded-2xl p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Revenue vs Expenses (Bar Chart)</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="month" tick={{ fill: '#4B5563', fontSize: 12 }} />
                        <YAxis tick={{ fill: '#4B5563', fontSize: 12 }} />
                        <Tooltip contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', borderColor: '#ccc' }} />
                        <Legend />
                        <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="expenses" fill="#f87171" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default DashboardCharts;
