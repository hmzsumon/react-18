import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserLayout from './UserLayout';
import Loader from '../Features/Loader';
import { CgArrowsExchangeV } from 'react-icons/cg';
import { loadUser } from '../../redux/actions/userActions';

const UserDashboard = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { user, loading, isAuthenticated } = useSelector((state) => state.user);

	useEffect(() => {
		if (isAuthenticated === false) {
			history.push('/login');
		}

		// dispatch(loadUser());
	}, [history, isAuthenticated, dispatch]);

	console.log(user);
	return (
		<UserLayout>
			{loading ? (
				<Loader />
			) : (
				<div className=''>
					{/* Dashboard Container */}
					<div className='space-y-2'>
						<h1 className='mb-10 text-2xl font-semibold text-gray-700'>
							Balance
						</h1>
						<div className='py-6 border rounded-lg shadow border-my_color2 md:w-2/5'>
							<Suspense fallback={<Loader />}>
								<div className='flex items-center justify-around'>
									<h1 className='text-2xl'>USD</h1>
									<h2 className='text-xl'>{user.balance}.00$</h2>
								</div>
							</Suspense>
							{/* <div className='flex justify-center mt-10 space-x-4 font-semibold '>
								<h1 className='text-2xl'>PYC</h1>
								<h2 className='text-xl'>${user.pyc_balance}</h2>
							</div> */}
						</div>
						<div className='flex items-center justify-center py-2 md:w-2/5'>
							<CgArrowsExchangeV className='text-3xl' />
						</div>
						<div className='py-6 border rounded-lg shadow border-my_color2 md:w-2/5'>
							<div className='flex items-center justify-around'>
								<h1 className='text-2xl'>Payunx Token</h1>
								<h2 className='text-xl'>{user.pyc_balance}.00000000PXT</h2>
							</div>
							{/* <div className='flex justify-center mt-10 space-x-4 font-semibold '>
								<h1 className='text-2xl'>PYC</h1>
								<h2 className='text-xl'>${user.pyc_balance}</h2>
							</div> */}
						</div>
					</div>
				</div>
			)}
		</UserLayout>
	);
};

export default UserDashboard;
