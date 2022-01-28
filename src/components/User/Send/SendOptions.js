import React, { useState } from 'react';
import UserLayout from '../UserLayout';
import Model from '../../Features/Model';
import { useHistory } from 'react-router-dom';

const SendOptions = () => {
	const history = useHistory();
	const [showModal, setShowModal] = useState(false);

	const handleSendMoney = () => {
		console.log('send money');
		history.push('/send/send-money');
	};
	const handleModel = () => {
		setShowModal(!showModal);
	};
	return (
		<UserLayout>
			<h1 className='text-4xl font-semibold text-center text-gray-700'>
				Send Money
			</h1>
			<div className='space-y-6'>
				<div
					className='flex flex-col items-center p-6 my-4 space-x-6 space-y-6 border rounded-lg shadow cursor-pointer md:flex-row '
					onClick={handleSendMoney}
				>
					<div>
						<img src='../images/walletImg.svg' alt='Wallet' className='w-28' />
					</div>
					<div className='space-y-4 text-center md:text-left'>
						<h1 className='text-2xl font-semibold text-gray-700'>
							Payunx to Payunx
						</h1>
						<p>
							Send to anyone on Skrill. If they have no Skrill account yet,
							we’ll send them a link to register and get the money.
						</p>
						<div className='flex justify-center space-x-4 md:justify-start'>
							<p className='px-3 py-1 text-xs bg-green-100 rounded-2xl'>
								Fee 2.99%
							</p>
							<p className='px-3 py-1 text-xs bg-green-100 rounded-2xl'>
								Instant
							</p>
							<p className='px-3 py-1 text-xs bg-green-100 rounded-2xl'>
								Worldwide
							</p>
						</div>
					</div>
				</div>

				{/* International */}
				<div
					className='flex flex-col items-center p-6 my-4 space-x-6 space-y-6 border rounded-lg shadow md:flex-row '
					onClick={() => handleModel()}
				>
					<div>
						<img src='../images/bankImg.svg' alt='Wallet' className='w-28' />
					</div>
					<div className='space-y-4 text-center md:text-left'>
						<h1 className='text-2xl font-semibold text-gray-700'>
							International money transfer
						</h1>
						<p>
							Send from your bank or card to a bank account abroad. No transfer
							fee and great exchange rates.
						</p>
						<div className='flex justify-center space-x-4 md:justify-start'>
							<p className='px-3 py-1 text-xs bg-green-100 rounded-2xl'>Fee</p>
							<p className='px-3 py-1 text-xs bg-green-100 rounded-2xl'>Fast</p>
							<p className='px-3 py-1 text-xs bg-green-100 rounded-2xl'>
								International
							</p>
						</div>
					</div>
				</div>
				{/* End International  */}

				{/* Request money */}
				<div
					className='flex flex-col items-center p-6 my-4 space-x-6 space-y-6 border rounded-lg shadow md:flex-row '
					onClick={() => handleModel()}
				>
					<div>
						<img
							src='../images/request-money.svg'
							alt='Wallet'
							className='w-28'
						/>
					</div>
					<div className='space-y-4 text-center md:text-left'>
						<h1 className='text-2xl font-semibold text-gray-700'>
							Request money
						</h1>
						<p>
							Request from anyone even if they don’t have Skrill account yet,
							send them a link to pay.
						</p>
						<div className='flex justify-center space-x-4 md:justify-start'>
							<p className='px-3 py-1 text-xs bg-green-100 rounded-2xl'>Fee</p>
							<p className='px-3 py-1 text-xs bg-green-100 rounded-2xl'>Fast</p>
							<p className='px-3 py-1 text-xs bg-green-100 rounded-2xl'>
								Worldwide
							</p>
						</div>
					</div>
				</div>
				{/* End Request money   */}
			</div>
			{/* Model */}
			<Model
				// handleModel={handleModel}
				showModal={showModal}
				setShowModal={setShowModal}
				icon={'images/request-money.svg'}
				title={'Request money'}
				text={'Request money will be coming soon'}
			/>

			{/* End Model */}
		</UserLayout>
	);
};

export default SendOptions;
