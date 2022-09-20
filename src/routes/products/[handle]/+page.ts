import type { PageLoad } from './$types';
import type { Product } from '$lib/types/product';
import { error } from '@sveltejs/kit';
import GetProductByHandle from '$lib/shopify/GetProductByHandle';

export const load: PageLoad = async ({ params }) => {
	const { handle } = params;
	const response = await GetProductByHandle(handle);

	if (response.ok) {
		const data: Product = await response.json();
		return data;
	}
	throw error(500);
};
