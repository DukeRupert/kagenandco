import { postToShopify } from '../../routes/api/utils/postToShopify/+server';
import type { Cart } from 'src/types/cart';
import { json } from '@sveltejs/kit';
const AddSubscriptionToCart = async ({ cartId, quantity, itemId, sellingPlanId }) => {
	const query = `
        mutation addItemToCart($cartId: ID!, $lines: [CartLineInput!]!) {
          cartLinesAdd(cartId: $cartId, lines: $lines) {
            cart {
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
                        id,
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
          }
        }
      `;
	const variables = {
		cartId,
		lines: [
			{
				merchandiseId: itemId,
				quantity,
				sellingPlanId
			}
		]
	};
	try {
		const response = await postToShopify({
			query,
			variables
		});

		if (response.ok) {
			const { data } = await response.json();
			const cart: Cart = data?.cartLinesAdd?.cart ?? {};
			return json(cart);
		}
		return new Response(undefined, { status: response.status, statusText: response.statusText });
	} catch (error) {
		console.log(error);
	}
};

export default AddSubscriptionToCart;
