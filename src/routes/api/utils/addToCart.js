// src/routes/api/add-to-cart
import { createCartWithItem, addItemToCart, addSubscriptionToCart } from '$lib/shopify';

export async function post({ request }) {
	const body = await request.json();
	let { cartId, itemId, quantity, sellingPlanId } = body;
	quantity = parseInt(quantity);
	if (cartId) {
		console.log('Adding item to existing cart...');
		// If this is a subscription
		if (sellingPlanId) {
			const shopifyResponse = await addSubscriptionToCart({
				cartId,
				itemId,
				quantity,
				sellingPlanId
			});
			return {
				statusCode: 200,
				body: JSON.stringify(shopifyResponse.cartLinesAdd.cart)
			};
		}
		// Else add a single purchase item
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
