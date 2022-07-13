import { products } from './stores';
import { postToShopify } from '../routes/api/utils/postToShopify';

// Get all products
export const getProducts = async () => {
	try {
		const shopifyResponse = await postToShopify({
			query: `{
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
      }`
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

// Get details a single product using product handle
export const getProductByHandle = async (handle) => {
	const query = `
    query getProduct($handle: String!) {
  productByHandle(handle: $handle) {
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
          priceV2 {
            amount
            currencyCode
          }
          quantityAvailable
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
    sellingPlanGroups(first: 5) {
      edges {
        node {
          sellingPlans(first: 5) {
            edges {
              node {
                id
                description
                priceAdjustments {
                  adjustmentValue {
                    ...on SellingPlanPercentagePriceAdjustment {
                      adjustmentPercentage
                    }
                  }
                }
                
              }
            }
          }
        }
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
  }
}
  `;

	const variables = { handle: handle };
	try {
		const shopifyResponse = await postToShopify({ query, variables });
		return shopifyResponse.productByHandle;
	} catch (error) {
		console.log(error);
	}
};

export const createCart = async () => {
	console.log('Executing createCart');
	const query = `mutation CreateCart {
                    cartCreate {
                      cart {
                        checkoutUrl
                        id
                      }
                    }
                  }`;

	try {
		return await postToShopify({ query });
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