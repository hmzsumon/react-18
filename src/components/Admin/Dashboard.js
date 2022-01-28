import React, { useEffect } from 'react';
import MetaData from '../Layout/MetaData';
import { useDispatch, useSelector } from 'react-redux';

import { getAllUsers } from '../../redux/actions/userActions';
import AdminLayout from './AdminLayout';
import { NavLink } from 'react-router-dom';

const AdminDashboard = () => {
	const dispatch = useDispatch();
	// const { user } = useSelector((state) => state.allUsers);

	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch]);

	return (
		<AdminLayout>
			<MetaData title={'Admin Dashboard'} />
			<div className='p-6'>
				<NavLink to='/admin/users'>
					<div className='flex items-center justify-center w-full p-10 text-xl font-medium text-gray-600 bg-white border rounded-lg shadow cursor-pointer hover:border-gray-500 md:w-60'>
						<span>Users:</span> 08
					</div>
				</NavLink>
			</div>
		</AdminLayout>
	);
};

export default AdminDashboard;
