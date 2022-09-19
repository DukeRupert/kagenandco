import { postToShopify } from '../../routes/api/utils/postToShopify/+server';
import { json } from '@sveltejs/kit';

// Get details a single product using product handle
const GetProductByHandle = async (handle) => {
	const query = `
query getProduct($handle: String!) {
  productByHandle(handle: $handle) {
    id
    handle
    description
    title
    totalInventory
    productType
    variants(first: 15) {
      edges {
        node {
          id
          title
          selectedOptions {
            name,
            value
          }
          priceV2 {
            amount
            currencyCode
          }
          quantityAvailable
        }
      }
    }
    options {
      name,
      values
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
		const {
			data: { productByHandle }
		} = await shopifyResponse.json();
		return json(productByHandle);
	} catch (error) {
		console.log(error);
	}
};

export default GetProductByHandle;
