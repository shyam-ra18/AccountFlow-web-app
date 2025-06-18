// Dashboard.jsx
import { useEffect, useState } from 'react';
import CashFlowChart from '../components/CashFlowChart';
import Footer from '../components/Footer';
import InfoCard from '../components/InfoCard';
import Navbar from '../components/Navbar';
import RevenueDistributionChart from '../components/RevenueDistributionChart';
import Sidebar from '../components/Sidebar';
import { cardData, recentActivities } from '../utils/constant';
import { WiDaySunny, WiSunset, WiNightClear } from 'react-icons/wi';
import MobileTopBar from '../components/MobileTopBar';

const Dashboard = () => {
    const [greeting, setGreeting] = useState('');
    const [GreetingIcon, setGreetingIcon] = useState(() => WiDaySunny);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) {
            setGreeting('Good Morning');
            setGreetingIcon(() => WiDaySunny);
        } else if (hour < 18) {
            setGreeting('Good Afternoon');
            setGreetingIcon(() => WiSunset);
        } else {
            setGreeting('Good Evening');
            setGreetingIcon(() => WiNightClear);
        }
    }, []);

    return (
        <div className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 flex flex-col min-h-screen">
            {/* Navbar */}
            <div className="sticky top-0 z-50">
                <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            </div>

            {/* Mobile Top Bar - Search, Year, User */}
            <MobileTopBar />

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Main layout: Sidebar + Content */}
            <div className="flex flex-col md:flex-row flex-1">
                {/* Sidebar - Hidden on mobile by default */}
                <aside className={`fixed md:relative z-40 md:z-auto inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out w-[280px] max-w-[300px] border-r border-gray-200 bg-white/60 backdrop-blur-md h-full md:sticky top-16`}>
                    <Sidebar closeSidebar={() => setSidebarOpen(false)} />
                </aside>

                {/* Main content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    {/* Greeting Message */}
                    <div className="mb-6 flex items-center space-x-1 text-xl font-semibold text-gray-800">
                        <GreetingIcon size={36} className="text-yellow-500" />
                        <span className='text-sm md:text-xl'>{greeting}, welcome back!</span>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4">
                        {cardData.map((card, index) => (
                            <InfoCard
                                key={index}
                                title={card.title}
                                value={card.value}
                                subtitle={card.subtitle}
                                icon={card.icon}
                                trend={card.trend}
                            />
                        ))}
                    </div>

                    {/* Cash Flow */}
                    <div className="mt-8">
                        <CashFlowChart />
                    </div>

                    {/* Revenue + Activity */}
                    <div className="mt-8 flex flex-col lg:flex-row gap-6">
                        {/* Revenue - Takes full width on mobile, half on desktop */}
                        <div className="w-full lg:w-1/2">
                            <RevenueDistributionChart />
                        </div>

                        {/* Activity - Takes full width on mobile, half on desktop */}
                        <div className="w-full lg:w-1/2 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/50 p-4 md:p-6 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                            <div className="space-y-3 md:space-y-4">
                                {recentActivities.map((activity, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3 md:space-x-4 p-2 md:p-3 rounded-lg md:rounded-xl bg-white/50 backdrop-blur-lg border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200"
                                    >
                                        {/* Icon - Slightly smaller on mobile */}
                                        <div className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gradient-to-br ${activity.color} text-white shadow-md`}>
                                            <activity.icon className="text-base md:text-lg" />
                                        </div>
                                        <div className="flex-1 min-w-0"> {/* Added min-w-0 to prevent text overflow */}
                                            <p className="text-sm font-medium text-gray-900 truncate">{activity.action}</p>
                                            <p className="text-xs text-gray-500">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;