import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	const { slug } = params;

	const res = await fetch(`/api/menu/${slug}.json`);
	if (res.ok) {
		const { data } = await res.json();
		return data;
	}
	throw error(500);
}) satisfies PageLoad;
