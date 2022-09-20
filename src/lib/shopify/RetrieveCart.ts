import { postToShopify } from '../../routes/api/utils/postToShopify/+server';
import { json } from '@sveltejs/kit';
import type { Cart } from '$lib/types/cart';
import { cart } from './mutation';

export const RetrieveCart = async (cartId: string) => {
	const query = `
query ($id: ID!) {
    cart (id: $id) {
        ${cart}
    }
}`;
	const variables = { id: cartId };

	try {
		const response = await postToShopify({ query, variables });
		if (response.ok) {
			const data: { data: { cart: Cart } } = await response.json();
			const {
				data: { cart }
			} = data;
			return json(cart);
		}
		return new Response(undefined, { status: response.error, statusText: response.statusText });
	} catch (error) {
		console.log(`FIXME: EMAIL or LOG: ${error}`);
	}
};

export default RetrieveCart;
