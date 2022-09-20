import { writable, derived, type Writable, type Readable } from 'svelte/store';
import type { Product } from '$lib/types/product';
import type { Cart, Edges, Subtotal } from './types/cart';

export const siteData = writable({
	_createdAt: '2019-03-29T10:09:19Z',
	_id: 'siteSettings',
	_rev: 'Cv1FYYyXvvAoFbluSe8246',
	_type: 'siteSettings',
	_updatedAt: '2021-12-20T18:50:19Z',
	description:
		'Crepes, community and coffee. Fresh, handmade crepes and a bold espresso make a fantastic pair! Both savory and sweet crepes are always available. ',
	email: 'kagen.cox@gmail.com',
	facebook: 'https://www.facebook.com/kagencoffeeandcrepes/',
	instagram: 'https://www.instagram.com/kagencoffeeandcrepes/',
	logo: {
		_type: 'mainImage',
		alt: 'Kagen Coffee and Crepes rooster logo',
		asset: {
			_createdAt: '2021-12-20T15:58:40Z',
			_id: 'image-59df4bd27287c2d6730d8c7c3ee4d7e8fc27dd55-388x388-svg',
			_rev: 'Cv1FYYyXvvAoFbluSdFacy',
			_type: 'sanity.imageAsset',
			_updatedAt: '2021-12-20T15:58:40Z',
			assetId: '59df4bd27287c2d6730d8c7c3ee4d7e8fc27dd55',
			extension: 'svg',
			metadata: {
				_type: 'sanity.imageMetadata',
				blurHash: 'e009jvfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQfQ',
				dimensions: {
					_type: 'sanity.imageDimensions',
					aspectRatio: 1,
					height: 388,
					width: 388
				},
				hasAlpha: true,
				isOpaque: false,
				lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB6ElEQVQ4jX2Ui1ITQRBFT2Je8kiWGB5BEAMEEtAIiSiglpb//1FWb52hhiHSVVO1u9N9u+/t7oWX1gFGwCWwAu6Bn55H4A6YA/tAl1esAWwBx4JdAZ+AL57Pnni+1ucD0Aea68AGwCkwA86AKXALPFhVAC19Phdsqu9OCbqVgewC76z0StpfgYXvQfc9UAk0MXaQaxbZLoAh8AZom2TXau4FHgObwFt9mlIOwBOgh0GXOgdYsq7NOVS7R4NahVxN/S6svKZwbubceiYbKEEKKAGT70RZapGP1ji2BOsbkJ7XATaBA6WpqYzsdG5tRd+WfoDtWW3oXtpQrHpgI7C0nk4bgo/s8kzw0ipHjB++lNbNADs25Juab74G+CCNRnZyypXnROGrYhqS7STKdw5xX+F7mdDb6rbvXbvQumO1G45d3ZRrtZl6xgaSaXdoUG4t704du7nrWbd74Z6uHOI9wVrqeGS1jQJspv+NYMdJ/IlgKy+n0qwMHLpuHVdybEVLgW6NeWIxcP1ulGDu+0QGI0U/8PtSkIWA4R9Jn/SNBkRArFc4pf9eBMe6hU4fTRDfv2dsgnYkfLFBARqVRlAAJj2DSvxoIzAljOoCOO7SH+q/FmMTXY3AmKvfwF/gD/DLb6kBMTLPVvYftk8i4G5hGGIAAAAASUVORK5CYII=',
				palette: {
					_type: 'sanity.imagePalette',
					darkMuted: {
						_type: 'sanity.imagePaletteSwatch',
						background: '#040404',
						foreground: '#fff',
						population: 100,
						title: '#fff'
					},
					darkVibrant: {
						_type: 'sanity.imagePaletteSwatch',
						background: '#424242',
						foreground: '#fff',
						population: 0,
						title: '#fff'
					},
					dominant: {
						_type: 'sanity.imagePaletteSwatch',
						background: '#040404',
						foreground: '#fff',
						population: 100,
						title: '#fff'
					},
					lightMuted: {
						_type: 'sanity.imagePaletteSwatch',
						background: '#4c4c4c',
						foreground: '#fff',
						population: 0,
						title: '#fff'
					},
					lightVibrant: {
						_type: 'sanity.imagePaletteSwatch',
						background: '#bcbcbc',
						foreground: '#000',
						population: 0,
						title: '#fff'
					},
					muted: {
						_type: 'sanity.imagePaletteSwatch',
						background: '#4c4c4c',
						foreground: '#fff',
						population: 0,
						title: '#fff'
					},
					vibrant: {
						_type: 'sanity.imagePaletteSwatch',
						background: '#7f7f7f',
						foreground: '#fff',
						population: 0,
						title: '#fff'
					}
				}
			},
			mimeType: 'image/svg+xml',
			originalFilename: 'logoKCC.svg',
			path: 'images/codowsse/production/59df4bd27287c2d6730d8c7c3ee4d7e8fc27dd55-388x388.svg',
			sha1hash: '59df4bd27287c2d6730d8c7c3ee4d7e8fc27dd55',
			size: 14929,
			uploadId: 'b3etylB8UxALahhlgqMFvuBxpRM4VXdS',
			url: 'https://cdn.sanity.io/images/codowsse/production/59df4bd27287c2d6730d8c7c3ee4d7e8fc27dd55-388x388.svg'
		},
		caption: 'Kagen Coffee and Crepes rooster logo'
	},
	order: [
		{
			name: 'Tri-Cities',
			url: 'https://www.toasttab.com/kagen-coffee-crepes-270-williams-blvd/v3/?mode=fulfillment'
		},
		{
			name: 'Spokane',
			url: 'https://www.toasttab.com/kagen-coffee-crepes-spokane-915-e-hawthorne-rd/v3'
		}
	],
	shop: 'https://shop.kagenandco.com/',
	siteColor: '#fcc24c',
	title: 'Kagen Coffee & Crepes'
});

export const isMobileMenuOpen = writable(false);

export const modal = writable(false);

export const modalAction = writable('order');

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

export const cartItems: Readable<Edges[] | any[]> = derived(
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
