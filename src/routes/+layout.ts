import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
	const response = await fetch(`/api/siteSettings.json`);

	if (response.ok) {
		const { data } = await response.json();
		return data;
	}

	throw error(500);
};
