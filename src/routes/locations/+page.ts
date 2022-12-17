import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ route, fetch }) => {
	const slug = route.id;
	console.log(slug);
	const res = await fetch(`/api${slug}.json`);
	if (res.ok) {
		const { data } = await res.json();
		console.log('data returned');
		console.log(data);
		return data;
	}
	throw error(500);
}) satisfies PageLoad;
