import { json, fail } from '@sveltejs/kit';
import client from '$lib/sanity-client';

export async function GET({ params }) {
	// You must be on the home page if you reached this endpoint
	const { slug } = params;
	console.log(`Calling sanity for slug : ${slug}`);

	// Build query using slug
	const filter = `*[_type == "page" && slug.current == "${slug}"]`;
	const projection = `{
		title,
		description, 
        mainImage{..., 
            asset->},
		body[]{..., 
            location->{..., 
                image{..., 
                    asset->}}}
        }`;
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
