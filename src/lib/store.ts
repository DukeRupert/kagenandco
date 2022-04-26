// store.js
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { ProductType } from 'src/types/product';

export const productDetails: Writable<ProductType> = writable({
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
});

export const products: Writable<Array<ProductType>> = writable([
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
