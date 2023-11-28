import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from '@zerodevx/svelte-img/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		enhancedImages(),
		sveltekit(),
		imagetools({
			// By default, directives are `?width=480;1024;1920&format=avif;webp;jpg`
			defaultDirectives: () =>
				new URLSearchParams('?width=240;360;480;1024;1920&format=avif;webp;jpg')
		})
	],
	define: {
		'process.env': process.env
	}
};

export default config;
