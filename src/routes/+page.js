import { error } from '@sveltejs/kit';

export async function load({ fetch, ctx }) {
	// Page data from Sanity
	const res = await fetch(`/api/home.json`);

	if (res.ok) {
		const { data } = await res.json();
		return { data };
	}
	throw error(500);
}
