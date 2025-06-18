import React, { useEffect, useState } from 'react';
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import {
    MdAccountBalanceWallet,
    MdAddBox,
    MdBarChart,
    MdDashboard,
    MdEventNote,
    MdInventory,
    MdLocalOffer,
    MdLogout,
    MdNotifications,
    MdPayments,
    MdReceipt,
    MdSettings
} from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);

    useEffect(() => {
        setActive(location.pathname);
    }, [location.pathname]);

    const isActive = (path) => active === path;
    const getIconColor = (path) => (isActive(path) ? '#0f62fe' : '#64748b');

    const SidebarItem = ({ to, icon, label }) => (
        <Link to={to} className="my-1 block">
            <div
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all
                ${isActive(to)
                        ? 'bg-blue-100 text-blue-600 font-medium'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
            >
                {React.cloneElement(icon, { size: 20, color: getIconColor(to) })}
                <span className="text-sm">{label}</span>
            </div>
        </Link>
    );

    const SidebarMenu = ({ title, children, bordered }) => (
        <div className={`mt-6 ${bordered ? 'border-t border-gray-200 pt-4' : ''}`}>
            <h3 className="text-[12px] tracking-wider pl-4 text-gray-500 uppercase mb-2">{title}</h3>
            {children}
        </div>
    );

    return (
        <aside
            className="bg-white border-r border-gray-200 text-slate-900 h-screen p-4 sticky top-0 overflow-y-auto shadow-sm"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#f2f2f2 #ffffff' }}
        >

            {/* Navigation */}
            <nav>
                <SidebarItem to="/dashboard" label="Dashboard" icon={<MdDashboard />} />

                <SidebarMenu title="Sales" bordered>
                    <SidebarItem to="/dashboard/invoices" label="Invoices" icon={<MdReceipt />} />
                    <SidebarItem to="/dashboard/estimates" label="Estimates / Quotes" icon={<MdEventNote />} />
                    <SidebarItem to="/dashboard/payments-received" label="Payments Received" icon={<MdPayments />} />
                    <SidebarItem to="/dashboard/customers" label="Customers" icon={<FaRegEnvelopeOpen />} />
                </SidebarMenu>

                <SidebarMenu title="Purchases" bordered>
                    <SidebarItem to="/dashboard/bills" label="Bills" icon={<MdReceipt />} />
                    <SidebarItem to="/dashboard/payments-made" label="Payments Made" icon={<MdPayments />} />
                    <SidebarItem to="/dashboard/vendors" label="Vendors" icon={<MdInventory />} />
                </SidebarMenu>

                <SidebarMenu title="Banking" bordered>
                    <SidebarItem to="/dashboard/bank-accounts" label="Bank Accounts" icon={<MdAccountBalanceWallet />} />
                    <SidebarItem to="/dashboard/reconciliation" label="Reconciliation" icon={<MdBarChart />} />
                </SidebarMenu>

                <SidebarMenu title="GST & Reports" bordered>
                    <SidebarItem to="/dashboard/gst-reports" label="GST Reports" icon={<MdBarChart />} />
                    <SidebarItem to="/dashboard/financial-reports" label="Financial Reports" icon={<MdBarChart />} />
                </SidebarMenu>

                <SidebarMenu title="Items & Products" bordered>
                    <SidebarItem to="/dashboard/add-product" label="Add Item" icon={<MdAddBox />} />
                    <SidebarItem to="/dashboard/products" label="Item List" icon={<MdInventory />} />
                </SidebarMenu>

                <SidebarMenu title="Settings & More" bordered>
                    <SidebarItem to="/dashboard/notifications" label="Notifications" icon={<MdNotifications />} />
                    <SidebarItem to="/dashboard/settings" label="Settings" icon={<MdSettings />} />
                    <SidebarItem to="/dashboard/discounts" label="Discount Codes" icon={<MdLocalOffer />} />
                    <SidebarItem to="/" label="Logout" icon={<MdLogout />} />
                </SidebarMenu>
            </nav>

        </aside>
    );
};

export default Sidebar;
