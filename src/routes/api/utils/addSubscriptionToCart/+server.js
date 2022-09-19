// src/routes/api/add-to-cart
import { json } from '@sveltejs/kit';
const query = `
mutation addItemToCart($cartId: ID!, $lines: [CartLineInput!]!) {
	cartLinesAdd(cartId: $cartId, lines: $lines) {
	cart {
		id
		createdAt
		updatedAt
		checkoutUrl
		lines(first: 10) {
		edges {
			node {
			id
			quantity
			sellingPlanAllocation {
				priceAdjustments {
				price {
					amount
				}
				}
				sellingPlan {
				id,
				name
				}
			}
			merchandise {
				... on ProductVariant {
				id
				title
				priceV2 {
					amount
					currencyCode
				}
				quantityAvailable
				product {
					title
					handle
					images(first: 1) {
					edges {
						node {
						url
						altText
						}
					}
					}
				}
				}
			}
			}
		}
		}
		estimatedCost {
		totalAmount {
			amount
			currencyCode
		}
		subtotalAmount {
			amount
			currencyCode
		}
		totalTaxAmount {
			amount
			currencyCode
		}
		totalDutyAmount {
			amount
			currencyCode
		}
		}
	}
	}
}`;

export async function POST({ query, variables }) {
	try {
		const response = await fetch(SHOPIFY_API_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_API_TOKEN
			},
			body: JSON.stringify({ query, variables })
		});
		if (response.ok) {
			const data = await response.json();
			return json({
				data
			});
		}
		if (response.errors) {
			console.log({ errors: response.errors });
		} else if (!response || !response.data) {
			console.log({ result: response });
			return 'No results found.';
		}
		return response.data;
	} catch (error) {
		console.log(error);
	}
	return new Response(undefined, { status: 404 });
}
