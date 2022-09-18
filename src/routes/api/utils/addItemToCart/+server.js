// src/routes/api/add-to-cart
import { addItemToCart } from '$lib/shopify';

export async function POST({ request }) {
	// Add a single purchase item
	const body = await request.json();
	let { cartId, itemId, quantity } = body;
	const shopifyResponse = await addItemToCart({
		cartId,
		itemId,
		quantity
	});
	return new Response(JSON.stringify(shopifyResponse.cartLinesAdd.cart));
}
