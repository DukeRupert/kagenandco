import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import type { SanityPage } from '$lib/types/sanity';

interface Response {
	data: SanityPage;
}

export const load = (async ({ fetch }) => {
	const response = await fetch(`/api/siteSettings.json`);

	if (response.ok) {
		const { data }: Response = await response.json();
		return data;
	}

	throw error(500);
}) satisfies LayoutLoad;
