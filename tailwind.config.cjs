const colors = require('tailwindcss/colors');

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		aspectRatio: {
			auto: 'auto',
			square: '1 / 1',
			video: '16 / 9',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13',
			14: '14',
			15: '15',
			16: '16'
		},
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
				},
				coffee: '#3D2F12',
				oldGrey: '#404040'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				'fade-in': {
					from: {
						opacity: 0
					},
					to: {
						opacity: 1
					}
				},
				marquee: {
					'100%': {
						transform: 'translateY(-50%)'
					}
				},
				'spin-reverse': {
					to: {
						transform: 'rotate(-360deg)'
					}
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s linear forwards',
				marquee: 'marquee var(--marquee-duration) linear infinite',
				'spin-slow': 'spin 4s linear infinite',
				'spin-slower': 'spin 6s linear infinite',
				'spin-reverse': 'spin-reverse 1s linear infinite',
				'spin-reverse-slow': 'spin-reverse 4s linear infinite',
				'spin-reverse-slower': 'spin-reverse 6s linear infinite'
			},
			transitionTimingFunction: {
				'expo-in': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
				'quint-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
				'quint-in': 'cubic-bezier(0.64, 0, 0.78, 0)'
			}
		}
	},

	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
};

module.exports = config;
