import { postToShopify } from '../../routes/api/utils/postToShopify/+server';
import { json } from '@sveltejs/kit';
import { productCard } from './mutation';

// Get data needed to populate product cards
const queryProducts = async () => {
	const query = `
query {
  products (first: 5) {
    edges {
      node { 
		${productCard}
	   }
    }
  }
}
  `;

	const variables = {};
	try {
		const response = await postToShopify({ query, variables });
		console.log(response);
		const data = await response.json();
		return json(data);
	} catch (error) {
		console.log(error);
	}
};

export default queryProducts;
