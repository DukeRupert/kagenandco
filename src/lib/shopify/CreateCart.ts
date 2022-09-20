import { json } from '@sveltejs/kit';
import { postToShopify } from '../../routes/api/utils/postToShopify/+server';
import type { Cart } from '$lib/types/cart';

export const CreateCart = async () => {
	const query = `mutation CreateCart {
                    cartCreate {
                      cart {
                        checkoutUrl
                        id
                      }
                    }
                  }`;
	const variables = {};
	try {
		const response = await postToShopify({ query, variables });
		if (response.ok) {
			const data: { data: { cartCreate: { cart: Cart } } } = await response.json();
			const {
				data: {
					cartCreate: { cart }
				}
			} = data;
			return json(cart);
		}
		return new Response(undefined, { status: response.error, statusText: response.statusText });
	} catch (error) {
		console.log(`FIXME: EMAIL or LOG: ${error}`);
	}
};

export default CreateCart;
