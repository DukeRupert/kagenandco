export const postToShopify = async ({ query, variables }) => {
	try {
		const result = await fetch(
			'https://kagens-coffee-and-crepes.myshopify.com/api/2022-04/graphql.json',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_API_TOKEN
				},
				body: JSON.stringify({ query, variables })
			}
		).then((res) => res.json());
		if (result.errors) {
			console.log({ errors: result.errors });
		} else if (!result || !result.data) {
			console.log({ result });
			return 'No results found.';
		}
		return result.data;
	} catch (error) {
		console.log(error);
	}
};
