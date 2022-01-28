import React from 'react';
import AdminFooter from './AdminFooter';
import AdminHeder from './AdminHeder';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children }) => {
	return (
		<div className='grid md:grid-cols-6'>
			<div className='hidden h-screen col-span-1 bg-bg_gray md:block'>
				<AdminSidebar />
			</div>
			<div className='col-span-5 grid_container'>
				<div>
					<AdminHeder />
				</div>
				<div className='mt-2 '>{children}</div>
				<div>
					<AdminFooter />
				</div>
			</div>
		</div>
	);
};

export default AdminLayout;
