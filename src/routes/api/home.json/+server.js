import { json, fail } from '@sveltejs/kit';
import client from '$lib/sanity-client';

export async function GET() {
	// You must be on the home page if you reached this endpoint
	const slug = '/';

	// Build query using slug
	const filter = `*[_type == "page" && slug.current == "${slug}"]`;
	const projection = `{..., mainImage{..., asset->}}`;
	const query = filter + projection;

	// Since only one match is expected destructure result
	const [data] = await client.fetch(query);

	if (data) {
		return json({
			data
		});
	}

	return fail(404, { status: data.status });
}
