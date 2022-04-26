// src/routes/api/add-to-cart
import { createCartWithItem, addItemToCart } from '$lib/shopify';

export async function post({ request }) {
	const body = await request.json();
	console.log(body);
	let { cartId, itemId, quantity } = body;
	quantity = parseInt(quantity);
	if (cartId) {
		console.log('Adding item to existing cart...');
		const shopifyResponse = await addItemToCart({
			cartId,
			itemId,
			quantity
		});
		return {
			statusCode: 200,
			body: JSON.stringify(shopifyResponse.cartLinesAdd.cart)
		};
	} else {
		console.log('Creating new cart with item...');
		const createCartResponse = await createCartWithItem({
			itemId,
			quantity
		});
		return {
			statusCode: 200,
			body: JSON.stringify(createCartResponse.cartCreate.cart)
		};
	}
}
