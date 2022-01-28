import React from 'react';

const Footer = () => {
	return (
		<div>
			<footer className='mt-10 text-center'>
				<div className=''>
					<hr className='mb-4 border-b-1 border-blueGray-200' />
					<div className='flex flex-wrap items-center justify-center md:justify-between'>
						<div className='w-full '>
							<div className='py-1 text-sm font-semibold text-blueGray-500'>
								Copyright &copy; {new Date().getFullYear()}{' '}
								<a
									href='https://www.creative-tim.com'
									className='text-sm font-semibold text-blueGray-500 hover:text-blueGray-700 '
								>
									Paynex
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
