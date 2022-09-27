import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	const { slug } = params;

	const res = await fetch(`/api/menu/${slug}.json`);
	if (res.ok) {
		const { data } = await res.json();
		return data;
	}
	throw error(500);
}
