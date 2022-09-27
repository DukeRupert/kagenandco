import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ url, fetch }) => {
	const slug = url.pathname;
	console.log(slug);
	const res = await fetch(`/api${slug}.json`);
	if (res.ok) {
		const { data } = await res.json();

		return data;
	}
	throw error(500);
};
