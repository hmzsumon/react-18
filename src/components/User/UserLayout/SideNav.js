import React from 'react';
import { sideMenuItems } from '../../../utils/data';
import { NavLink } from 'react-router-dom';

// Side bar Content

const SideNav = () => {
	return (
		<>
			<div className='flex items-center justify-center '>
				<NavLink to='/'>
					<img src='../pynux_logo.png' alt='logo' className='w-40 ' />
				</NavLink>
			</div>
			{/* Side Navigation Items */}
			<div className='mt-16 '>
				{sideMenuItems.map((item) => {
					const { id, name, icon, path } = item;

					if (id === 2) return null;

					return (
						<NavLink
							to={path}
							activeClassName='text-my_color2 bg-active_gray  border-l-4 border-my_color2'
							className='flex items-center w-full px-4 py-4 space-x-4 font-medium text-gray-700 uppercase transition-all duration-300 ease-in-out cursor-pointer hover:bg-active_gray hover:text-gray-900'
							key={id}
						>
							<i className='text-2xl'>{icon}</i>
							<p className='text-lg'>{name}</p>
						</NavLink>
					);
				})}
			</div>
		</>
	);
};

export default SideNav;
