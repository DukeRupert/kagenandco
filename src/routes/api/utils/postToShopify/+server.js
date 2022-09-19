import { dev } from '$app/environment';
import { json } from '@sveltejs/kit';

const SHOPIFY_API_ENDPOINT = dev
	? import.meta.env.VITE_SHOPIFY_API_ENDPOINT
	: process.env.SHOPIFY_API_ENDPOINT;
const SHOPIFY_STOREFRONT_API_TOKEN = dev
	? import.meta.env.VITE_SHOPIFY_STOREFRONT_API_TOKEN
	: process.env.SHOPIFY_STOREFRONT_API_TOKEN;

export async function postToShopify({ query, variables }) {
	try {
		const response = await fetch(SHOPIFY_API_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_API_TOKEN
			},
			body: JSON.stringify({ query, variables })
		});
		if (response.ok) {
			const data = await response.json();
			return json(data);
		}
		if (response.errors) {
			console.log({ errors: response.errors });
		} else if (!response || !response.data) {
			console.log({ result: response });
			return 'No results found.';
		}
		return response.data;
	} catch (error) {
		console.log(error);
	}
	return new Response(undefined, { status: 404 });
}
