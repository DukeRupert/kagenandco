import { postToShopify } from '../../routes/api/utils/postToShopify/+server';
import { json } from '@sveltejs/kit';
import type { Cart } from 'src/types/cart';

export const RetrieveCart = async (cartId: string) => {
	const query = `
query ($id: ID!) {
    cart (id: $id) {
    id
    createdAt
    updatedAt
    checkoutUrl
    lines(first: 10) {
        edges {
        node {
            id
            quantity
            sellingPlanAllocation {
            priceAdjustments {
                price {
                amount
                }
            }
            sellingPlan {
                id
                name
            }
            }
            merchandise {
            ... on ProductVariant {
                id
                title
                priceV2 {
                amount
                currencyCode
                }
                quantityAvailable
                product {
                title
                handle
                images(first: 1) {
                    edges {
                    node {
                        url
                        altText
                    }
                    }
                }
                }
            }
            }
        }
        }
    }
    estimatedCost {
        totalAmount {
        amount
        currencyCode
        }
        subtotalAmount {
        amount
        currencyCode
        }
        totalTaxAmount {
        amount
        currencyCode
        }
        totalDutyAmount {
        amount
        currencyCode
        }
    }
    }
}`;
	const variables = { id: cartId };

	try {
		const response = await postToShopify({ query, variables });
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
