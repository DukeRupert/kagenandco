import type { PageLoad } from './$types';
import type { ProductCardPayload } from '$lib/types/mutationProductCard';
import { error } from '@sveltejs/kit';
import queryProductCards from '$lib/shopify/queryProductCards';

export const load: PageLoad = async () => {
	const response = await queryProductCards();
	console.log(response);

	if (response.ok) {
		const data: ProductCardPayload = await response.json();
		const {
			data: { products }
		} = data;
		console.log(products);
		return products;
	}
	throw error(500);
};
