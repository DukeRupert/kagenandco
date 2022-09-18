import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const res = await fetch(`/api/siteSettings.json`);

	if (res.ok) {
		const { data } = await res.json();
		return { data };
	}

	throw error(500);
}
