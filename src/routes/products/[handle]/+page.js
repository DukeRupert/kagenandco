//** @type {import('./[handle]').Load} */
import { getProductByHandle } from '$lib/shopify';

export async function load({ params }) {
	const { handle } = params;
	const product = await getProductByHandle(handle);
	return { product };
}
