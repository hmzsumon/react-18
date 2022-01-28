import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MetaData from '../layout/MetaData.js';
import Loader from '../layout/Loader/Loader';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Header/Navbar';
const Profile = ({ history }) => {
	const { user, loading, isAuthenticated } = useSelector((state) => state.user);

	useEffect(() => {
		if (isAuthenticated === false) {
			history.push('/login');
		}
	}, [history, isAuthenticated]);
	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<MetaData title={`${user.name}'s Profile`} />
					<Navbar />
					<div className='flex flex-col items-center h-screen p-2 md:flex-row md:justify-evenly'>
						<div className='flex flex-col h-full md:justify-evenly'>
							<h1 className='my-8 font-medium text-center md:text-2xl'>
								{user.name}'s Profile
							</h1>
							<img
								src={user.avatar.url}
								alt={user.name}
								className='md:w-full'
							/>
							<Link
								to='/me/update'
								className='block w-full py-2 my-10 font-medium text-center text-white bg-green-500 rounded  hover:bg-green-700'
							>
								Edit Profile
							</Link>
						</div>
						<div className='flex flex-col h-full md:justify-evenly'>
							<div className='flex justify-between md:flex-col '>
								<h4 className='mr-1 font-medium md:text-2xl'>Full Name</h4>
								<p className='font-light md:text-2xl'>{user.name}</p>
							</div>
							<div className='flex justify-between md:flex-col '>
								<h4 className='mr-2 font-medium md:text-2xl'>Email</h4>
								<p className='font-light md:text-2xl'>{user.email}</p>
							</div>
							<div className='flex justify-between md:flex-col '>
								<h4 className='mr-2 font-medium md:text-2xl'>Joined On</h4>
								<p className='font-light md:text-2xl'>
									{String(user.createdAt).substr(0, 10)}
								</p>
							</div>

							<div className='flex flex-col items-center justify-center mt-5'>
								<Link
									to='/orders'
									className='w-full max-w-md py-1 mb-3 font-medium text-center text-white bg-gray-700'
								>
									My Orders
								</Link>
								<Link
									to='/password/update'
									className='w-full max-w-md py-1 font-medium text-center text-white bg-gray-700'
								>
									Change Password
								</Link>
							</div>
						</div>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default Profile;
