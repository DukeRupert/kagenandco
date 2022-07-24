// src/routes/api/add-to-cart
import { addItemToCart } from '$lib/shopify';

export async function post({ request }) {
	// Add a single purchase item
	const body = await request.json();
	let { cartId, itemId, quantity } = body;
	const shopifyResponse = await addItemToCart({
		cartId,
		itemId,
		quantity
	});
	return {
		statusCode: 200,
		body: JSON.stringify(shopifyResponse.cartLinesAdd.cart)
	};
}
