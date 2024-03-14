import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'firefly-software',
				project: 'kagenandco',
				authToken: process.env.SENTRY_AUTH_TOKEN
			}
		}),
		enhancedImages(),
		sveltekit()
	]
});
