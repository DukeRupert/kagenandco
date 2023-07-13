import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from '@zerodevx/svelte-img/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
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
