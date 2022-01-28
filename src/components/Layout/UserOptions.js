import React, { Fragment, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { logout } from '../../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Loader from '../Features/Loader';
import { FaUser } from 'react-icons/fa';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const UserOptions = () => {
	const { user, loading, isAuthenticated } = useSelector((state) => state.user);

	const dispatch = useDispatch();
	const alert = useAlert();
	const history = useHistory();

	function logoutUser() {
		dispatch(logout());
		alert.success('Logout Successfully');
		history.push('/');
	}

	useEffect(() => {
		if (isAuthenticated === false) {
			history.push('/login');
		}
	}, [history, isAuthenticated]);
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					{/* Profile dropdown */}
					<Menu as='div' className='relative z-10 ml-3'>
						<div className='flex space-x-2'>
							<Menu.Button className='flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
								<span className='sr-only'>Open user menu</span>
								<FaUser className='p-1 text-2xl rounded-full cursor-pointer text-my_color2 ring-2 ring-my_color1' />
							</Menu.Button>
							<h1 className='hidden md:block'>{user.name}</h1>
						</div>
						<Transition
							as={Fragment}
							enter='transition ease-out duration-100'
							enterFrom='transform opacity-0 scale-95'
							enterTo='transform opacity-100 scale-100'
							leave='transition ease-in duration-75'
							leaveFrom='transform opacity-100 scale-100'
							leaveTo='transform opacity-0 scale-95'
						>
							<Menu.Items className='absolute right-0 px-4 py-2 mt-4 origin-top-right bg-white rounded-md shadow-lg w-60 ring-1 ring-black ring-opacity-5 focus:outline-none'>
								<Menu.Item>
									<p className='block px-4 text-lg font-medium text-gray-800'>
										{user.name}
									</p>
								</Menu.Item>
								<div className='py-2'>
									<Menu.Item>
										<p className='block px-4 text-sm text-gray-700'>
											{user.email}
										</p>
									</Menu.Item>
									{/* <Menu.Item>
										<p className='px-4 py-2 text-sm text-gray-700'>
											A/C Number: {user.customer_id}
										</p>
									</Menu.Item> */}
								</div>
								<Menu.Item>
									{({ active }) => (
										<Link
											to='/account'
											className={classNames(
												active ? 'bg-gray-100' : '',
												'border bkorder-my_color2 border-my_color2 text-my_color2 px-4 py-2 text-sm font-medium  hover:bg-my_color2 hover:text-white ml-4 cursor-pointer rounded-md focus:outline-none '
											)}
										>
											Go to profile details
										</Link>
									)}
								</Menu.Item>
								{user.role === 'admin' ? (
									<Menu.Item>
										{({ active }) => (
											<Link
												to='/admin/dashboard'
												className={classNames(
													active ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700'
												)}
											>
												Dashboard
											</Link>
										)}
									</Menu.Item>
								) : null}

								<Menu.Item>
									{({ active }) => (
										<div
											className={classNames(
												active ? 'bg-gray-100' : '',
												'block px-4 py-2 mt-6 text-sm text-gray-700 cursor-pointer'
											)}
											onClick={() => logoutUser()}
										>
											Sign out
										</div>
									)}
								</Menu.Item>
							</Menu.Items>
						</Transition>
					</Menu>
				</>
			)}
		</>
	);
};

export default UserOptions;
