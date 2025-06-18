import { FaApple, FaFacebookF, FaGithub, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiAlertCircle, FiClock, FiFileText, FiTrendingUp } from "react-icons/fi";
import { HiOutlineClipboardCheck, HiOutlineCurrencyRupee, HiOutlineDocumentText, HiOutlineUserAdd } from "react-icons/hi";
import { LuIndianRupee } from "react-icons/lu";

export const financialYears = [
    '2024-25',
    '2023-24',
    '2022-23',
    '2021-22'
];

export const socialProviders = [
    { name: 'Google', icon: FaGoogle, color: 'hover:bg-red-50 hover:border-red-200' },
    { name: 'Facebook', icon: FaFacebookF, color: 'hover:bg-blue-50 hover:border-blue-200' },
    { name: 'LinkedIn', icon: FaLinkedinIn, color: 'hover:bg-blue-50 hover:border-blue-200' },
    { name: 'Twitter', icon: FaTwitter, color: 'hover:bg-sky-50 hover:border-sky-200' },
    { name: 'GitHub', icon: FaGithub, color: 'hover:bg-gray-50 hover:border-gray-200' },
    { name: 'Apple', icon: FaApple, color: 'hover:bg-gray-50 hover:border-gray-200' },
];

export const cardData = [
    {
        title: "Total Revenue",
        value: "₹12,45,680",
        subtitle: "This month",
        icon: LuIndianRupee,
        trend: { value: "+12.5%", isPositive: true },
    },
    {
        title: "Pending Invoices",
        value: "23",
        subtitle: "Worth ₹3,45,200",
        icon: FiFileText,
        trend: { value: "-8.2%", isPositive: false },
    },
    {
        title: "GST Returns Due",
        value: "2",
        subtitle: "Next due: 20th Jan",
        icon: FiClock,
    },
    {
        title: "Monthly Growth",
        value: "18.7%",
        subtitle: "Compared to last month",
        icon: FiTrendingUp,
        trend: { value: "+5.3%", isPositive: true },
    },
    {
        title: "Outstanding Amount",
        value: "₹8,92,340",
        subtitle: "From 45 customers",
        icon: FiAlertCircle,
        trend: { value: "+2.1%", isPositive: true },
    }
];

export const cashFlowData = [
    { month: 'Apr', opening: 0, incoming: 1280000, outgoing: 980000, closing: 300000 },
    { month: 'May', opening: 300000, incoming: 1150000, outgoing: 970000, closing: 480000 },
    { month: 'Jun', opening: 480000, incoming: 1320000, outgoing: 1080000, closing: 720000 },
    { month: 'Jul', opening: 720000, incoming: 1400000, outgoing: 1120000, closing: 1000000 },
    { month: 'Aug', opening: 1000000, incoming: 1250000, outgoing: 1070000, closing: 1180000 },
    { month: 'Sep', opening: 1180000, incoming: 1200000, outgoing: 950000, closing: 1430000 },
    { month: 'Oct', opening: 1430000, incoming: 1380000, outgoing: 1140000, closing: 1670000 },
    { month: 'Nov', opening: 1670000, incoming: 1450000, outgoing: 1180000, closing: 1940000 },
    { month: 'Dec', opening: 1940000, incoming: 1500000, outgoing: 1230000, closing: 2210000 },
    { month: 'Jan', opening: 2210000, incoming: 1580000, outgoing: 1290000, closing: 2500000 },
    { month: 'Feb', opening: 2500000, incoming: 1420000, outgoing: 1160000, closing: 2760000 },
    { month: 'Mar', opening: 2760000, incoming: 1600000, outgoing: 1220000, closing: 3140000 },
];

export const recentActivities = [
    {
        action: "Invoice #INV-001 created",
        time: "2 hours ago",
        type: "invoice",
        icon: HiOutlineDocumentText,
        color: "from-blue-500 to-blue-400",
    },
    {
        action: "Payment received from ABC Corp",
        time: "4 hours ago",
        type: "payment",
        icon: HiOutlineCurrencyRupee,
        color: "from-green-500 to-green-400",
    },
    {
        action: "GST return filed for December",
        time: "1 day ago",
        type: "gst",
        icon: HiOutlineClipboardCheck,
        color: "from-purple-500 to-purple-400",
    },
    {
        action: "New customer added: XYZ Ltd",
        time: "2 days ago",
        type: "customer",
        icon: HiOutlineUserAdd,
        color: "from-orange-500 to-yellow-400",
    },
];