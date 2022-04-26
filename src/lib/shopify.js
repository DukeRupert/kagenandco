import { products, productDetails } from './store';
import { postToShopify } from '../../src/routes/api/utils/postToShopify';

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
