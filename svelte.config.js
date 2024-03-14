import adapter from '@sveltejs/adapter-vercel';
import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	
	preprocess: sequence([vitePreprocess({postcss: true}), preprocessMeltUI()]),

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
