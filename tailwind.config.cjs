const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
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
				}
			}
		}
	},

	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography')
	]
};

module.exports = config;
