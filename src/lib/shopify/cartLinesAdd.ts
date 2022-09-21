import { postToShopify } from '../../routes/api/utils/postToShopify/+server';
import { cart, userErrors } from './mutation';
import type { CartLinesAddPayload, ErrorLineAdd, Line } from '$lib/types/cart';
import { json } from '@sveltejs/kit';

const cartLinesAdd = async (cartId: string, lines: Line[]) => {
	const query = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
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
		console.log(response);
		if (response.ok) {
			const data: CartLinesAddPayload & ErrorLineAdd = await response.json();
			console.log(data);

			if (data.errors) {
				return json(data, { status: 400 });
			}

			const {
				data: {
					cartLinesAdd: { cart }
				}
			} = data;
			return json(cart, { status: 200 });
		}
	} catch (error) {
		console.log(`FIXME: EMAIL or LOG: ${error}`);
		return new Response(undefined, { status: 500 });
	}
};

export default cartLinesAdd;
