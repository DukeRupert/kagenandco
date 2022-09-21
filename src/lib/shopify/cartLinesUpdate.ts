import { postToShopify } from '../../routes/api/utils/postToShopify/+server';
import { cart, userErrors } from './mutation';
import type { CartLinesUpdatePayload, ErrorLineAdd, Line } from '$lib/types/cart';
import { json } from '@sveltejs/kit';

const cartLinesUpdate = async (cartId: string, lines: Line[]) => {
	const query = `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      ${cart}
      ${userErrors}
    }
  }
`;
	const variables = {
		cartId,
		lines
	};

	try {
		const response = await postToShopify({ query, variables });
		if (response.ok) {
			const data: CartLinesUpdatePayload & ErrorLineAdd = await response.json();

			if (data.errors) {
				return json(data, { status: 400 });
			}

			const {
				data: {
					cartLinesUpdate: { cart }
				}
			} = data;
			return json(cart, { status: 200 });
		}
	} catch (error) {
		console.log(`FIXME: EMAIL or LOG: ${error}`);
		return new Response(undefined, { status: 500 });
	}
};

export default cartLinesUpdate;
