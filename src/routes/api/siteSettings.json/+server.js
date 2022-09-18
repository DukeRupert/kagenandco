import { json } from '@sveltejs/kit';
import client from '$lib/sanity-client';

export async function GET() {
	// Build query
	const filter = `*[_type == "siteSettings"]`;
	const projection = `{..., logo{..., asset->}, "order" : *[_type=="location"]{name, "url" : orderUrl}}`;
	const query = filter + projection;

	// Since only one match is expected destructure result
	const [data] = await client.fetch(query);

	if (data) {
		return json({
			data
		});
	}

	return new Response(undefined, { status: data.status });
}
