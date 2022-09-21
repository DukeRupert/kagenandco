import { postToShopify } from '../../routes/api/utils/postToShopify/+server';
import { cart, userErrors } from './mutation';
import type { CartLinesRemovePayload, ErrorLineAdd } from '$lib/types/cart';
import { json } from '@sveltejs/kit';

const cartLinesRemove = async (cartId: string, lineIds: string[]) => {
	const query = `
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      ${cart}
      ${userErrors}
    }
  }
`;
	const variables = {
		cartId,
		lineIds
	};

	try {
		const response = await postToShopify({ query, variables });
		if (response.ok) {
			const data: CartLinesRemovePayload & ErrorLineAdd = await response.json();

			if (data.errors) {
				return json(data, { status: 400 });
			}

			const {
				data: {
					cartLinesRemove: { cart }
				}
			} = data;
			return json(cart, { status: 200 });
		}
	} catch (error) {
		console.log(`FIXME: EMAIL or LOG: ${error}`);
		return new Response(undefined, { status: 500 });
	}
};

export default cartLinesRemove;
