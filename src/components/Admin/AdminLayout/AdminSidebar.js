import React from 'react';
import { NavLink } from 'react-router-dom';
import { adminMenuItems } from '../../../utils/data';

const AdminSidebar = () => {
	return (
		<div>
			<div className='flex items-center justify-center py-5 shadow '>
				<NavLink to='/'>
					<img
						src='https://i.ibb.co/j8YSbrB/pynux-logo.png'
						alt='Paynux'
						className='w-40 '
					/>
				</NavLink>
			</div>
			<div className='mt-4 space-y-3'>
				{adminMenuItems.map((item, index) => {
					const { id, text, icon, path } = item;
					return (
						<NavLink
							to={path}
							key={id}
							activeClassName='text-my_color2 bg-active_gray  border-l-4 border-my_color2'
							className='flex items-center w-full px-4 py-4 space-x-4 font-medium text-gray-700 uppercase transition-all duration-300 ease-in-out cursor-pointer hover:bg-active_gray hover:text-gray-900'
						>
							<i>{icon}</i>
							<p>{text}</p>
						</NavLink>
					);
				})}
			</div>
		</div>
	);
};

export default AdminSidebar;
