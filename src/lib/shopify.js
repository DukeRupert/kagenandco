import { products, productDetails } from './store';
import { postToShopify } from '../../src/routes/api/utils/postToShopify';

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
		productDetails.set(shopifyResponse.productByHandle);
		return shopifyResponse.productByHandle;
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
              lines(first:10) {
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
