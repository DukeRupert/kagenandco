import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { SanityPage } from '$lib/types/sanity';

interface Response {
	data: SanityPage;
}

export const load = (async ({ url, fetch }) => {
	const slug = url.pathname;
	const res = await fetch(`/api${slug}.json`);
	if (res.ok) {
		const { data }: Response = await res.json();
		return data;
	}
	throw error(500);
}) satisfies PageLoad;
