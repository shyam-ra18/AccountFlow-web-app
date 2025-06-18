import React, { useEffect, useRef, useState } from 'react';
import { FiSearch, FiChevronDown, FiUser, FiLogOut } from 'react-icons/fi';
import { financialYears } from '../utils/constant';

const MobileTopBar = () => {
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
        localStorage.clear();
        window.location.href = '/';
    };

    return (
        <div className="md:hidden bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm sticky top-16 z-30">
            <div className="p-3 flex-col items-center justify-between gap-4">
                {/* Search Bar */}
                <div className="flex-1">
                    <div className="relative bg-white/70 backdrop-blur-xl border border-blue-100 rounded-lg shadow-sm">
                        <div className="flex items-center px-3 py-2">
                            <FiSearch className="w-4 h-4 text-blue-600 mr-2" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                className="flex-1 bg-transparent placeholder-gray-500 text-gray-700 focus:outline-none text-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between mt-2 gap-4'>
                    {/* Financial Year Dropdown */}
                    <div className="relative w-1/2">
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="w-full appearance-none bg-white/70 backdrop-blur-sm border border-blue-100 rounded-lg px-3 py-3 pr-6 text-xs font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent cursor-pointer hover:bg-white/80 transition-all duration-200"
                        >
                            {financialYears.map((year) => (
                                <option key={year} value={year}>
                                    FY {year}
                                </option>
                            ))}
                        </select>
                        <FiChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" />
                    </div>

                    {/* User Profile */}
                    <div className="relative w-1/2" ref={dropdownRef}>
                        <div
                            className="flex justify-center gap-3 items-center bg-white/70 backdrop-blur-sm border border-blue-100 rounded-lg p-1 hover:bg-white/80 transition-all duration-200 cursor-pointer shadow-sm w-full"
                            onClick={() => setOpen((prev) => !prev)}
                        >
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                <FiUser className="w-3 h-3 text-white" />
                            </div>
                            <div className="text-sm">
                                <div className="font-medium text-gray-700">{userName}</div>
                                <div className="text-xs text-gray-500">Administrator</div>
                            </div>
                            <FiChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
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
        </div>
    );
};

export default MobileTopBar;