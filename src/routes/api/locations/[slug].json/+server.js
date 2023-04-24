import { json } from '@sveltejs/kit';
import client from '$lib/sanity-client';

export async function GET({ params }) {
	// You must be on the home page if you reached this endpoint
	const { slug } = params;

	// Build query using slug
	const filter = `*[_type == "location" && slug.current == "${slug}"]`;
	const projection = `{...,image{...,asset->}}`;
	const query = filter + projection;
	console.log(`Query : ${query}`);
	console.log('Fetching Sanity data');
	// Since only one match is expected destructure result
	const [data] = await client.fetch(query);

	if (data) {
		return json({
			data
		});
	}

	return new Response(undefined, { status: data.status });
}