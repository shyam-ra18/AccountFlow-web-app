import React, { useEffect, useRef, useState } from 'react';
import { FiSearch, FiChevronDown, FiUser, FiLogOut, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { financialYears } from '../utils/constant';

const Navbar = ({ toggleSidebar }) => {

    const userName = localStorage.getItem('username');
    const financialYear = localStorage.getItem('financialYear');

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState(financialYear || '');
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.clear(); // or just remove token/session
        window.location.href = '/'; // or navigate('/')
    };

    return (
        <div className="bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm sticky top-0 z-40 w-screen">
            <div className="flex items-center justify-between px-6 py-3">

                {/* Left - Logo + Search bar in same row */}
                <div className="flex flex-1 items-center">

                    <button
                        className="md:hidden mr-3 text-gray-600"
                        onClick={toggleSidebar}
                    >
                        <FiMenu className="w-6 h-6" />
                    </button>

                    <Link to="/" className="flex items-center w-[280px] min-w-[250px] max-w-[300px]">
                        <Logo width={10} height={10} />
                    </Link>

                    {/* Search bar - Hidden on mobile */}
                    <div className="hidden md:flex flex-1 max-w-xl mx-4">
                        <div className="relative w-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-blue-200/20 rounded-lg blur-sm"></div>
                            <div className="relative bg-white/70 backdrop-blur-xl border border-blue-100 rounded-lg shadow-sm">
                                <div className="flex items-center px-4 py-2">
                                    <FiSearch className="w-5 h-5 text-blue-600 mr-3" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search invoices, customers, reports..."
                                        className="flex-1 bg-transparent placeholder-gray-500 text-gray-700 focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right - User Info and Financial Year */}
                <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
                    <div className="relative">
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="appearance-none bg-white/70 backdrop-blur-sm border border-blue-100 rounded-lg px-4 py-3 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent cursor-pointer hover:bg-white/80 transition-all duration-200"
                        >
                            {financialYears.map((year) => (
                                <option key={year} value={year}>
                                    FY {year}
                                </option>
                            ))}
                        </select>
                        <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>

                    <div className="relative" ref={dropdownRef}>
                        {/* User Info Button */}
                        <div
                            className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm border border-blue-100 rounded-lg px-2 py-1 hover:bg-white/80 transition-all duration-200 cursor-pointer shadow-sm"
                            onClick={() => setOpen((prev) => !prev)}
                        >
                            <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                <FiUser className="w-4 h-4 text-white" />
                            </div>
                            <div className="text-sm">
                                <div className="font-medium text-gray-700">{userName}</div>
                                <div className="text-xs text-gray-500">Administrator</div>
                            </div>
                            <FiChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                        </div>

                        {/* Dropdown Panel */}
                        {open && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden animate-fade-in-up">
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                                >
                                    <FiLogOut className="mr-2 text-gray-500" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Navbar;
