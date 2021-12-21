import client from '$lib/sanity-client';

export async function get({ params }) {
	// You must be on the home page if you reached this endpoint
	const { slug } = params;

	// Build query using slug
	const filter = `*[_type == "page" && slug.current == "${slug}"]`;
	const projection = `{..., mainImage{..., asset->}}`;
	const query = filter + projection;

	// Since only one match is expected destructure result
	const [data] = await client.fetch(query);

	if (data) {
		return {
			body: {
				data
			}
		};
	}

	return {
		status: data.status,
		error: new Error(`Could not fetch ${query}`)
	};
}
