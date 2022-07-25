// api/utils/removeFromCart.js

import { updateItemInCart } from '$lib/shopify';

export async function POST({ request }) {
	const body = await request.json();
	const { cartId, lines } = body;

	// If item does not contain a valid subscription plan then delete property
	// to avoid api error
	if (lines[0].sellingPlanId == '') {
		delete lines[0].sellingPlanId;
	}

	try {
		const shopifyResponse = await updateItemInCart({
			cartId,
			lines
		});
		return {
			statusCode: 200,
			body: JSON.stringify(shopifyResponse.cartLinesUpdate.cart)
		};
	} catch (error) {
		console.log('There was an error updating an item in the cart');
		console.log(error);
	}
}
