import { json } from '@sveltejs/kit';
import {
	PUBLIC_SHOPIFY_API_ENDPOINT,
	PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN
} from '$env/static/public';

export async function postToShopify({ query, variables }) {
	try {
		const response = await fetch(PUBLIC_SHOPIFY_API_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token': PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN
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
