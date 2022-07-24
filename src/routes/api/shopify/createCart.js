import { postToShopify } from '../utils/postToShopify';

export async function GET() {
	console.log('Running createCart endpoint');

	const response = await postToShopify({ query });
	console.log(`createCart response : ${response}`);

	if (!response) {
		return {
			status: 500,
			body: JSON.stringify({ message: `There was a problem creating a cart` })
		};
	}
	return {
		statusCode: 200,
		body: JSON.stringify({
			cartId: response?.cartCreate?.cart?.id,
			checkoutUrl: response?.cartCreate?.cart?.checkoutUrl
		})
	};
}
