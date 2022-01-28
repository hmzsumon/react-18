import { FaExchangeAlt, FaQuestion, FaUsers } from 'react-icons/fa';
import {
	MdOutlineDashboard,
	MdSend,
	MdOutlineDescription,
} from 'react-icons/md';
import {
	AiOutlineDownload,
	AiOutlineUpload,
	AiFillSetting,
} from 'react-icons/ai';
import { BsHeadset } from 'react-icons/bs';
import { GiWallet } from 'react-icons/gi';

export const sideMenuItems = [
	{
		id: 1,
		name: 'Dashboard',
		icon: <MdOutlineDashboard />,
		path: '/user/dashboard',
	},
	{
		id: 2,
		name: 'deposit',
		icon: <AiOutlineDownload />,
		path: '/deposit',
	},
	{
		id: 3,
		name: 'Withdraw',
		icon: <AiOutlineUpload />,
		path: '/withdraw',
	},
	{
		id: 4,
		name: 'Send',
		icon: <MdSend />,
		path: '/send/options',
	},
	{
		id: 5,
		name: 'Wallet',
		icon: <GiWallet />,
		path: '/wallet',
	},
	{
		id: 6,
		name: 'Exchange',
		icon: <FaExchangeAlt />,
		path: '/exchange',
	},
	{
		id: 7,
		name: 'Transactions',
		icon: <MdOutlineDescription />,
		path: '/transactions',
	},
	{
		id: 8,
		name: 'Settings',
		icon: <AiFillSetting />,
		path: '/settings',
	},
	{
		id: 9,
		name: 'Support',
		icon: <BsHeadset />,
		path: '/support',
	},
	{
		id: 10,
		name: 'FAQ',
		icon: <FaQuestion />,
		path: '/faq',
	},
];

export const adminMenuItems = [
	{
		id: 1,
		text: 'Dashboard',
		icon: <MdOutlineDashboard />,
		path: '/admin/dashboard',
	},
	{
		id: 2,
		text: 'Users',
		icon: <FaUsers />,
		path: '/admin/users',
	},
];
