import React, { Suspense } from 'react';
import Footer from './Footer';

import Header from './Header';
import SideNav from './SideNav';

const UserLayout = ({ children }) => {
	return (
		<>
			<div className='flex w-full h-screen '>
				<div className='grid w-full md:grid-cols-6'>
					{/* Side Nav */}
					<div className='hidden col-span-1 pt-4 bg-bg_gray md:block '>
						<SideNav />
					</div>
					{/* Header & Main */}
					<div className='relative w-full h-full md:col-span-5 grid_container '>
						{/* Header */}
						<div className=''>
							<Header />
						</div>

						{/* Start Main Section  */}
						<div className='w-full p-6 md:px-24 md:py-20'>
							<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
						</div>
						{/* End Main Section */}

						<div className='w-full border-t '>
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserLayout;
