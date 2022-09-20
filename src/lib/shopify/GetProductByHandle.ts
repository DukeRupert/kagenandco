import { postToShopify } from '../../routes/api/utils/postToShopify/+server';
import { json } from '@sveltejs/kit';
import { product } from './mutation';

// Get details a single product using product handle
const GetProductByHandle = async (handle) => {
	const query = `
query getProduct($handle: String!) {
  productByHandle(handle: $handle) {
    ${product}
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
