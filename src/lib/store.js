// store.js
import { writable } from 'svelte/store';
import { postToShopify } from '../routes/api/utils/postToShopify';

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
		return shopifyResponse;
	} catch (error) {
		console.log(error);
	}
};

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
        }
      }
    }
  }
}`;

	const variables = { handle: handle };
	try {
		const shopifyResponse = await postToShopify({ query, variables });
		return shopifyResponse;
	} catch (error) {
		console.log(error);
	}
};

export const getProductByHandle = async (handle) => {
	const query = `query ($handle: String!) {
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
              quantityAvailable
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
      }
    }`;

	const variables = { handle: handle };
	try {
		const shopifyResponse = await postToShopify({ query, variables });
		return shopifyResponse;
	} catch (error) {
		console.log(error);
	}
};
