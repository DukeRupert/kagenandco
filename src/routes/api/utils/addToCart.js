// src/routes/api/add-to-cart
import {
	createCartWithItem,
	createCartWithSubscription,
	addItemToCart,
	addSubscriptionToCart
} from '$lib/shopify';

export async function post({ request }) {
	const body = await request.json();
	let { cartId, itemId, quantity, sellingPlanId } = body;
	quantity = parseInt(quantity);
	// Is there an existing cart?
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
	}

	console.log('Creating new cart with item...');
	// If this is a subscription
	if (sellingPlanId) {
		const createCartResponse = await createCartWithSubscription({
			itemId,
			quantity,
			sellingPlanId
		});
		return {
			statusCode: 200,
			body: JSON.stringify(createCartResponse.cartCreate.cart)
		};
	}
	// Else create cart with single purchase item
	const createCartResponse = await createCartWithItem({
		itemId,
		quantity
	});
	return {
		statusCode: 200,
		body: JSON.stringify(createCartResponse.cartCreate.cart)
	};
}
