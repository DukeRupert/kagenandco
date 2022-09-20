import { postToShopify } from '../../routes/api/utils/postToShopify/+server';
import { json } from '@sveltejs/kit';
import type { Cart } from '$lib/types/cart';
import { cartFragment } from './mutation';

export const RetrieveCart = async (cartId: string) => {
	const query = `
query ($id: ID!) {
    cart (id: $id) {
        ${cartFragment}
    }
}`;
	const variables = { id: cartId };

	try {
		const response = await postToShopify({ query, variables });
		console.log(response);
		if (response.ok) {
			const data: { data: { cart: Cart } } = await response.json();
			console.log(data);
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
