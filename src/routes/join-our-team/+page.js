import { error } from '@sveltejs/kit';

export async function load({ url, fetch }) {
	const slug = url.pathname;
	const res = await fetch(`/api${slug}.json`);
	if (res.ok) {
		const { data } = await res.json();
		return { data };
	}
	throw error(500);
}
