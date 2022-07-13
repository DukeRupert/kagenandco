// src/routes/api/add-to-cart
import { addItemToCart, addSubscriptionToCart } from '$lib/shopify';

export async function post({ request }) {
	const body = await request.json();
	let { cartId, itemId, quantity, sellingPlanId } = body;
	console.log(`Adding to cart : 
	id - ${itemId}
	quantity - ${quantity}
	sellingPlanId - ${sellingPlanId}`);
	quantity = parseInt(quantity);
	// Is there an existing cart?
	console.log('Adding item to existing cart...');
	// Add a subscription
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
	// Add a single purchase item
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
