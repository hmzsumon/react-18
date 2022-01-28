import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Features/Loader';
import UserLayout from './UserLayout';

const Wallet = ({ history }) => {
	const { user, loading, isAuthenticated } = useSelector((state) => state.user);

	useEffect(() => {
		if (isAuthenticated === false) {
			history.push('/login');
		}
	}, [history, isAuthenticated]);
	return (
		<UserLayout>
			{loading ? (
				<Loader />
			) : (
				<Suspense fallback={<div>Loading...</div>}>
					<div className='flex items-center justify-center h-full '>
						<div className='py-4 text-center bg-gray-200 rounded-lg shadow-md'>
							<div className=''>
								<img
									src='./images/qrcode1.png'
									alt=''
									className='mx-auto md:w-6/12'
								/>
							</div>
							<div className='px-12 py-2 mx-auto space-y-2 text-left md:px-4 md:w-5/12'>
								<h3 className='text-xl font-medium text-gray-800'>
									Name: {user.name}
								</h3>
								<h3 className='font-medium text-gray-800'>
									Wallet Number: {user.customer_id}
								</h3>
							</div>
						</div>
					</div>
				</Suspense>
			)}
		</UserLayout>
	);
};

export default Wallet;
