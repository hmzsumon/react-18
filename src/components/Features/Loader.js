import React from 'react';

const Loader = () => {
	return (
		<div>
			<div className='flex items-center justify-center h-screen '>
				<div className='border-t-4 border-b-4 border-green-900 rounded-full w-36 h-36 animate-spin'></div>
			</div>
		</div>
	);
};

export default Loader;
