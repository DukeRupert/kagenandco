const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite'
			},
			colors: {
				maxWidth: {
					'8xl': '92rem'
				},
				height: {
					0: '0',

					'screen-quarter': '25vh',

					'screen-1/2': '50vh',

					'screen-3/4': '75vh'
				},
				custard: {
					50: '#fffcf6',
					100: '#fff9ed',
					200: '#fef0d2',
					300: '#fee7b7',
					400: '#fdd482',
					500: '#fcc24c',
					600: '#e3af44',
					700: '#bd9239',
					800: '#97742e',
					900: '#7b5f25'
				},
				coffee: '#3D2F12',
				oldGrey: '#404040'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			}
		}
	},

	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography')
	]
};

module.exports = config;
