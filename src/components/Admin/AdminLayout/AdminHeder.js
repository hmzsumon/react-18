import React, { useState } from 'react';

import UserOptions from '../../Layout/UserOptions';
import { Link, NavLink } from 'react-router-dom';
import { adminMenuItems } from '../../../utils/data.js';
import { MdOutlineMenuOpen } from 'react-icons/md';

export default function AdminHeder({ title, icon }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<nav className='items-center hidden px-10 py-6 bg-white shadow md:flex md:justify-between'>
				<ul className='flex items-center'>
					<li
						className={`items-center uppercase font-medium cursor-pointer ${
							window.location.pathname === '/admin/dashboard'
								? 'text-pink-500 hover:text-pink-600'
								: 'text-gray-700'
						}`}
					>
						<Link to='/admin/dashboard'>Dashboard</Link>
					</li>
					{title ? (
						<li className='items-center ml-5'>
							<Link
								className='flex items-center py-3 text-xs font-bold text-pink-500 uppercase hover:text-pink-600'
								to='/admin/products'
							>
								{icon}
								{title}
							</Link>
						</li>
					) : null}
				</ul>

				<div>
					<UserOptions />
				</div>
			</nav>
			<div className='md:hidden'>
				<div className='flex items-center justify-between h-16 pl-4 space-x-4 shadow '>
					<div className='flex space-x-4 '>
						<MdOutlineMenuOpen
							className={`text-3xl rounded-full cursor-pointer md:hidden hover:ring-2 my-transition mobile-menubar ${
								isOpen ? 'mobile-menubar-active' : ''
							}`}
							onClick={() => setIsOpen(!isOpen)}
						/>
						<NavLink to='/'>
							<img
								src='https://i.ibb.co/j8YSbrB/pynux-logo.png'
								alt='Paynux'
								className='w-40 '
							/>
						</NavLink>
					</div>
					<div className='pr-10'>
						<UserOptions />
					</div>
				</div>
			</div>
			{/* Mobile Menu */}
			<div
				className={`absolute w-6/12 inset-y-0 left-0 bg-gray-200 top-16 md:hidden my-transition ${
					isOpen ? 'active-mobile-menu' : 'mobile-menu'
				}`}
			>
				{adminMenuItems.map((item) => {
					const { id, text, icon, path } = item;
					return (
						<NavLink
							to={path}
							activeClassName='text-my_color2 bg-active_gray  border-l-4 border-my_color2'
							className='flex items-center w-full px-4 py-4 space-x-4 font-medium text-gray-700 uppercase transition-all duration-300 ease-in-out cursor-pointer hover:bg-active_gray hover:text-gray-900'
							key={id}
							onClick={() => setIsOpen(!isOpen)}
						>
							<i className='text-2xl'>{icon}</i>
							<p className='text-lg'>{text}</p>
						</NavLink>
					);
				})}
			</div>
		</>
	);
}
