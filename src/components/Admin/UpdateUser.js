import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';

import MetaData from '../layout/MetaData';
import AdminLayout from './AdminLayout';

import { UPDATE_USER_RESET } from '../../constants/userConstants';
import {
	getUserDetails,
	updateUser,
	clearErrors,
} from '../../actions/userAction';
import Loader from '../layout/Loader/Loader';
import { useHistory, useRouteMatch } from 'react-router';

const UpdateUser = () => {
	const match = useRouteMatch();
	const history = useHistory();

	const dispatch = useDispatch();
	const alert = useAlert();

	const { loading, error, user } = useSelector((state) => state.userDetails);

	const {
		loading: updateLoading,
		error: updateError,
		isUpdated,
	} = useSelector((state) => state.profile);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [balance, setBalance] = useState('');
	const [pycBalance, setPycBalance] = useState('');
	const [role, setRole] = useState('');
	const [activeStatus, setActiveStatus] = useState(false);

	const userId = match.params.id;

	useEffect(() => {
		if (user && user._id !== userId) {
			dispatch(getUserDetails(userId));
		} else {
			setName(user.name);
			setEmail(user.email);
			setRole(user.role);
			setActiveStatus(user.active_status);
			setBalance(user.balance);
			setPycBalance(user.pyc_balance);
		}
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}

		if (updateError) {
			alert.error(updateError);
			dispatch(clearErrors());
		}

		if (isUpdated) {
			alert.success('User Updated Successfully');
			history.push('/admin/users');
			dispatch({ type: UPDATE_USER_RESET });
		}
	}, [dispatch, alert, error, history, isUpdated, updateError, user, userId]);

	useEffect(() => {
		dispatch(getUserDetails(userId));
	}, [dispatch, userId]);

	const updateUserSubmitHandler = (e) => {
		e.preventDefault();

		const myForm = new FormData();

		myForm.set('name', name);
		myForm.set('email', email);
		myForm.set('balance', balance);
		myForm.set('pyc_balance', pycBalance);
		myForm.set('role', role);
		myForm.set('active_status', activeStatus);

		// for (let x of myForm.entries()) {
		// 	console.log(x);
		// }

		dispatch(updateUser(userId, myForm));
	};

	// icon for the upload button
	// const icon = (
	// 	<svg
	// 		xmlns='http://www.w3.org/2000/svg'
	// 		className='w-5 h-5 mr-2 text-sm text-blueGray-400'
	// 		viewBox='0 0 20 20'
	// 		fill='currentColor'
	// 	>
	// 		<path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
	// 	</svg>
	// );

	return (
		<AdminLayout>
			<MetaData title='Update User' />
			{loading ? (
				<Loader />
			) : (
				<>
					<div className='w-screen h-screen md:flex'>
						<div className=' md:flex-1'>
							<div className='flex items-center justify-center px-1 mt-10 min-h-auto'>
								<div className='w-full max-w-md p-8 space-y-8 bg-white rounded shadow'>
									<div>
										<h2 className='text-2xl font-extrabold text-center text-gray-700 md:text-3xl'>
											Update User
										</h2>
									</div>
									<form
										className='mt-8 space-y-6'
										onSubmit={updateUserSubmitHandler}
									>
										<input type='hidden' name='remember' defaultValue='true' />
										<div className='-space-y-px rounded-md shadow-sm'>
											<div>
												<label htmlFor='email-address' className='sr-only'>
													Name
												</label>
												<input
													className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
													type='text'
													placeholder='Name'
													required
													value={name}
													onChange={(e) => setName(e.target.value)}
												/>
											</div>
											<div>
												<label htmlFor='email-address' className='sr-only'>
													Email
												</label>
												<input
													className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
													type='email'
													placeholder='Email'
													required
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
											{/* User Balance */}
											<div>
												<label htmlFor='email-address' className='sr-only'>
													Balance
												</label>
												<input
													className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
													type='number'
													required
													value={balance}
													onChange={(e) => setBalance(e.target.value)}
												/>
											</div>

											{/* Pyc Balance */}
											<div>
												<label htmlFor='email-address' className='sr-only'>
													Pyc Balance
												</label>
												<input
													className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
													type='number'
													required
													value={pycBalance}
													onChange={(e) => setPycBalance(e.target.value)}
												/>
											</div>

											<div>
												<label htmlFor='email-address' className='sr-only'>
													Role
												</label>
												<select
													className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
													value={role}
													onChange={(e) => setRole(e.target.value)}
												>
													<option value=''>Choose Role</option>
													<option value='admin'>Admin</option>
													<option value='user'>User</option>
												</select>
											</div>
										</div>
										{/* Active Status */}
										<div className='flex '>
											<div>
												<div className='form-check'>
													<input
														className='float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-500 rounded-full appearance-none form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none'
														type='checkbox'
														name='flexRadioDisabled'
														id='flexRadioDisabled'
														checked={activeStatus}
														onChange={(e) => setActiveStatus(e.target.checked)}
													/>
													<label
														className='inline-block text-gray-800 opacity-50 form-check-label'
														htmlFor='flexRadioDisabled'
													>
														Active
													</label>
												</div>
											</div>
										</div>
										<button
											className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md group hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
											id='createProductBtn'
											type='submit'
											disabled={
												updateLoading
													? true
													: false || role === ''
													? true
													: false
											}
										>
											Update
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</AdminLayout>
	);
};

export default UpdateUser;
