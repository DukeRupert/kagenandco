import { products } from '$lib/stores';
import { postToShopify } from '../routes/api/utils/postToShopify/+server';
import { dev } from '$app/environment';

export const SHOPIFY_API_ENDPOINT = dev
	? import.meta.env.VITE_SHOPIFY_API_ENDPOINT
	: process.env.SHOPIFY_API_ENDPOINT;
export const SHOPIFY_STOREFRONT_API_TOKEN = dev
	? import.meta.env.VITE_SHOPIFY_STOREFRONT_API_TOKEN
	: process.env.SHOPIFY_STOREFRONT_API_TOKEN;

// Get all products
export const getProducts = async () => {
	const query = `{
        products(sortKey: TITLE, first: 20) {
          edges {
            node {
              id
              handle
              description
              title
              productType
              priceRange {
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
              collections (first:1) {
                edges {
                  node {
                    handle
                  }
                }
              }
            }
          }
        }
      }`;
	const variables = {};
	try {
		const shopifyResponse = await postToShopify({
			query: query,
			variables: variables
		});
		products.set(shopifyResponse.products.edges);
		return shopifyResponse;
	} catch (error) {
		console.log(error);
	}
};

// Get only items from a single collection
export const getCollectionByHandle = async (handle) => {
	const query = `query ($handle: String!) {
  collectionByHandle(handle: $handle) {
    products(first:15) {
      edges {
        node {
          id
          handle
          description
          title
          totalInventory
          productType
          variants(first: 5) {
            edges {
              node {
                id
                title
                price
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 4) {
            edges {
              node {
                url
                altText
              }
            }
          }
          collections (first:1) {
            edges {
              node {
                  handle
                }
              }
            }
        }
      }
    }
  }
}`;

	const variables = { handle: handle };
	try {
		const shopifyResponse = await postToShopify({ query, variables });
		products.set(shopifyResponse.collectionByHandle.products.edges);
		return shopifyResponse;
	} catch (error) {
		console.log(error);
	}
};

export const initializeCart = async (cartId: string) => {
	const query = `query ($id: ID!) {
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
		return await postToShopify({ query, variables });
	} catch (error) {
		console.log(error);
	}
};

// Check if cart exists
export const checkIfCartExists = async (cartId) => {
	const query = `query ($id : ID!){
  cart (id : $id) {
    id
  }
}`;

	const variables = { id: cartId };
	try {
		const shopifyResponse = await postToShopify({ query, variables });
		return shopifyResponse;
	} catch (error) {
		console.log(error);
	}
};

// Creates a cart with a single item
export const createCartWithItem = async ({ itemId, quantity }) => {
	try {
		const response = await postToShopify({
			query: `
        mutation createCart($cartInput: CartInput) {
          cartCreate(input: $cartInput) {
            cart {
              id
              createdAt
              updatedAt
              checkoutUrl
              lines(first:10) {
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
      `,
			variables: {
				cartInput: {
					lines: [
						{
							quantity,
							merchandiseId: itemId
						}
					]
				}
			}
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};

// Creates a cart with a single item
export const createCartWithSubscription = async ({ itemId, quantity, sellingPlanId }) => {
	try {
		const response = await postToShopify({
			query: `
        mutation createCart($cartInput: CartInput) {
          cartCreate(input: $cartInput) {
            cart {
              id
              createdAt
              updatedAt
              checkoutUrl
              lines(first:10) {
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
      `,
			variables: {
				cartInput: {
					lines: [
						{
							merchandiseId: itemId,
							quantity,
							sellingPlanId
						}
					]
				}
			}
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};

// Adds item to existing cart
export const addItemToCart = async ({ cartId, quantity, itemId }) => {
	try {
		const shopifyResponse = postToShopify({
			query: `
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
      `,
			variables: {
				cartId,
				lines: [
					{
						merchandiseId: itemId,
						quantity
					}
				]
			}
		});

		return shopifyResponse;
	} catch (error) {
		console.log(error);
	}
};

// Add sub
export const addSubscriptionToCart = async ({ cartId, quantity, itemId, sellingPlanId }) => {
	try {
		const shopifyResponse = postToShopify({
			query: `
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
      `,
			variables: {
				cartId,
				lines: [
					{
						merchandiseId: itemId,
						quantity,
						sellingPlanId
					}
				]
			}
		});
		return shopifyResponse;
	} catch (error) {
		console.log(error);
	}
};

// Remove item from cart
export const removeItemFromCart = async ({ cartId, lineId }) => {
	try {
		const shopifyResponse = await postToShopify({
			query: `
        mutation removeItemFromCart($cartId: ID!, $lineIds: [ID!]!) {
          cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
            cart {
              id
              lines(first: 10) {
                edges {
                  node {
                    id
                    quantity
                    merchandise {
                      ... on ProductVariant {
                        id
                        title
                        priceV2 {
                          amount
                          currencyCode
                        }
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
      `,
			variables: {
				cartId,
				lineIds: [lineId]
			}
		});

		return shopifyResponse;
	} catch (error) {
		console.log(error);
	}
};

// Update subscription item in cart
export const updateItemInCart = async ({ cartId, lines }) => {
	try {
		const shopifyResponse = await postToShopify({
			query: `
  mutation addItemToCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
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
  }
}
      `,
			variables: {
				cartId,
				lines
			}
		});

		return shopifyResponse;
	} catch (error) {
		console.log(error);
	}
};

export const addToCart = async (
	cartId: string,
	itemId: string,
	quantity: number,
	monthlySubscription: string
) => {
	if (monthlySubscription) {
		try {
			const response = await fetch('/api/utils/addSubscriptionToCart', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					cartId,
					itemId,
					quantity,
					monthlySubscription
				})
			});

			if (response.ok) {
				const { data } = await response.json();
				console.log(cart);
				return cart;
			}

			const { errors } = await response.json();
			console.log(errors);
		} catch (e) {
			console.log(e);
		}
	}

	try {
		const res = await fetch('/api/utils/addItemToCart', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				cartId,
				itemId,
				quantity
			})
		});
		const cart = await res.json();
		// update cart
		return cart;
	} catch (e) {
		console.log(e);
	}
};
