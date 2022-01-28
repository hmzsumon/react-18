module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 1.5s linear infinite',
				bounce200: 'bounce 1s infinite 200ms',
				bounce400: 'bounce 1s infinite 400ms',
			},
			colors: {
				my_color1: '#1D8795',
				my_color2: '#174650',
				s_color1: '#431f49',
				s_color2: '#811e68',
				r_card_color: '#431f49',
				bg_gray: '#F5F5F5',
				active_gray: '#EBEBEB',
			},
		},
	},
	plugins: [],
};
