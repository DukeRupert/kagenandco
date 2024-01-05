import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { preprocessMeltUI } from '@melt-ui/pp';
import sequence from 'svelte-sequential-preprocessor';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sequence([
		preprocess({
			postcss: true
		}),
		preprocessMeltUI()
	]),

	kit: {
		adapter: adapter({
			version: 3,
			images: {
				sizes: [640, 828, 1200, 1920, 3840],
				formats: ['image/avif', 'image/webp'],
				minimumCacheTTL: 300
			}
		}),
		prerender: {
			handleHttpError: 'warn'
		},
		csrf: {
			checkOrigin: false
		}
	}
};

export default config;
