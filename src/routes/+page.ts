import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	// Page data from Sanity
	const response = await fetch(`/api/home.json`);

	if (response.ok) {
		const { data } = await response.json();
		return data;
	}
	throw error(500);
};
