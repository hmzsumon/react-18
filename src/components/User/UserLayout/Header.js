import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import UserOptions from '../../Layout/UserOptions';
import { logout } from '../../../redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { sideMenuItems } from '../../../utils/data';
import { useAlert } from 'react-alert';

const Header = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const alert = useAlert();

	const [isOpen, setIsOpen] = useState(false);

	function logoutUser() {
		dispatch(logout());
		alert.success('Logout Successfully');
		history.push('/');
	}

	return (
		<>
			<div className='flex items-center justify-between w-full h-16 bg-white shadow md:justify-end md:bg-transparent'>
				<div className='md:hidden'>
					<div className='flex items-center justify-center h-full pl-4 space-x-4 '>
						<MdOutlineMenuOpen
							className={`text-3xl rounded-full cursor-pointer md:hidden hover:ring-2 my-transition mobile-menubar ${
								isOpen ? 'mobile-menubar-active' : ''
							}`}
							onClick={() => setIsOpen(!isOpen)}
						/>
						<NavLink to='/'>
							<img src='./pynux_logo.png' alt='logo' className='w-40 ' />
						</NavLink>
					</div>
				</div>
				<div className='flex items-center justify-end p-4 space-x-4 '>
					<div>
						<UserOptions />
					</div>

					<div>
						<button
							className='hidden py-2 text-xl font-medium transition-all duration-300 ease-in-out border-2 rounded cursor-pointer md:block hover:text-white border-my_color2 px-9 hover:bg-my_color2 '
							onClick={() => logoutUser()}
						>
							Logout
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`absolute inset-y-0 left-0 bg-gray-100 top-16 md:hidden my-transition ${
					isOpen ? 'active-mobile-menu' : 'mobile-menu'
				}`}
			>
				{sideMenuItems.map((item) => {
					const { id, name, icon, path } = item;
					return (
						<NavLink
							to={path}
							activeClassName='text-my_color2 bg-active_gray  border-l-4 border-my_color2'
							className='flex items-center w-full px-4 py-4 space-x-4 font-medium text-gray-700 uppercase transition-all duration-300 ease-in-out cursor-pointer hover:bg-active_gray hover:text-gray-900'
							key={id}
							onClick={() => setIsOpen(!isOpen)}
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

export default Header;
