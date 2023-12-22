import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "firefly-software",
            project: "javascript-sveltekit"
        }
    }), enhancedImages(), sveltekit()],

    define: {
		'process.env': process.env
	}
};

export default config;