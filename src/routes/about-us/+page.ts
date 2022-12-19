import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { SanityPage } from '$lib/types/sanity';

export const load = (async ({ url, fetch }) => {
	const slug = url.pathname;
	const res = await fetch(`/api${slug}.json`);
	if (!res.ok) {
		throw error(500);
	}
	const response: SanityPage = await res.json();
	const { data } = response;
	return data;
}) satisfies PageLoad;
