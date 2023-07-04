import { writable, derived, type Writable, type Readable } from 'svelte/store';
import type { Product } from '$lib/types/product';
import type { Cart, ProductNode, Subtotal } from './types/cart';

export const isBannerOpen = writable(false);

export const isMobileMenuOpen = writable(false);

function createActiveTopMenu() {
	const { subscribe, set, update } = writable('');

	return {
		subscribe,
		set,
		close: () => set('')
	};
}

export const activeTopMenu = createActiveTopMenu();

export const productDetails: Writable<Product> = writable({
	id: '',
	handle: '',
	description: '',
	title: '',
	totalInventory: 50,
	productType: '',
	variants: {
		edges: [
			{
				node: {
					id: '',
					title: '',
					price: ''
				}
			}
		]
	},
	priceRange: {
		maxVariantPrice: {
			amount: '',
			currencyCode: ''
		},
		minVariantPrice: {
			amount: '',
			currencyCode: ''
		}
	},
	sellingPlanGroups: {
		edges: [
			{
				node: {
					sellingPlans: {
						edges: [
							{
								node: {
									id: 'gid://shopify/SellingPlan/2961113314',
									description: 'This is the basic monthly plan',
									priceAdjustments: [
										{
											adjustmentValue: {
												adjustmentPercentage: 10
											}
										}
									]
								}
							}
						]
					}
				}
			}
		]
	},
	images: {
		edges: [
			{
				node: {
					url: '',
					altText: null
				}
			}
		]
	}
});

export const products: Writable<Array<Product>> = writable([
	{
		id: '',
		handle: '',
		description: '',
		title: '',
		totalInventory: 50,
		productType: '',
		variants: {
			edges: [
				{
					node: {
						id: '',
						title: '',
						price: ''
					}
				}
			]
		},
		priceRange: {
			maxVariantPrice: {
				amount: '',
				currencyCode: ''
			},
			minVariantPrice: {
				amount: '',
				currencyCode: ''
			}
		},
		images: {
			edges: [
				{
					node: {
						url: '',
						altText: null
					}
				}
			]
		}
	}
]);

export const cartValue = writable(0);

// New stores

export const isCartOpen = writable(false);

export const cart: Writable<Cart> = writable({});

export const cartId: Readable<string> = derived(
	cart,
	($cart) => {
		return $cart?.id ?? '';
	},
	''
);

export const checkoutUrl: Readable<string> = derived(
	cart,
	($cart) => {
		return $cart?.checkoutUrl ?? '';
	},
	''
);

export const cartItems: Readable<ProductNode[]> = derived(
	cart,
	($cart) => {
		const items = $cart?.lines?.edges ?? [];
		const newItems = [...items];
		return newItems;
	},
	[]
);

export const itemCount = derived(
	cart,
	($cart) => {
		let count = 0;
		const items = $cart?.lines?.edges ?? [];
		if (items.length > 0) {
			const sum = items.map((n) => n.node.quantity);
			count = sum.reduce((pre, cur) => pre + cur);
		}
		return count;
	},
	0
);

export const subtotal: Readable<Subtotal> = derived(
	cart,
	($cart) => {
		return $cart?.estimatedCost?.subtotalAmount ?? {};
	},
	{}
);
