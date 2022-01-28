import React from 'react';

import UserOptions from '../Header/UserOptions.js';
import { Link } from 'react-router-dom';

export default function NavbarAdmin({ title, icon }) {
	return (
		<>
			<nav className='items-center hidden px-10 py-5 bg-white shadow md:flex md:justify-between'>
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
		</>
	);
}
