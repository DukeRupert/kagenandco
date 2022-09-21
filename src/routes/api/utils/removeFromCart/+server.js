// api/utils/removeFromCart.js

import { removeItemFromCart } from '$lib/shopify';
export async function POST({ request }) {
	const body = await request.json();
	const { cartId, lineId } = body;
	try {
		const shopifyResponse = await removeItemFromCart({
			cartId,
			lineId
		});
		return new Response(JSON.stringify(shopifyResponse.cartLinesRemove.cart));
	} catch (error) {
		console.log('There was an error removing-item-from-cart');
		console.log(error);
	}
}