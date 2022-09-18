// src/routes/api/add-to-cart
import { addSubscriptionToCart } from '$lib/shopify';

export async function POST({ request }) {
	// Add a subscription
	const body = await request.json();
	let { cartId, itemId, quantity, monthlySubscription } = body;
	const shopifyResponse = await addSubscriptionToCart({
		cartId,
		itemId,
		quantity,
		sellingPlanId: monthlySubscription
	});
	return new Response(JSON.stringify(shopifyResponse.cartLinesAdd.cart));
}
