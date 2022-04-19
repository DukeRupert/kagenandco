// https://www.npmjs.com/package/@sanity/image-url
import { urlFor } from '$lib/image-url';
import TextSection from '$lib/components/TextSection.svelte';
import Crepe from '$lib/components/Crepe.svelte';
import Coffee from '$lib/components/Coffee.svelte';
import Drink from '$lib/components/Drink.svelte';
import LocationCard from '$lib/components/LocationCard.svelte';

export default {
	types: {
		textSection: (node) => {
			return {
				component: TextSection,
				props: {
					data: node.body,
					name: node.name
				}
			};
		},
		coffee: (node) => {
			return {
				component: Coffee,
				props: {
					name: node.name,
					price: node.price
				}
			};
		},
		drink: (node) => {
			return {
				component: Drink,
				props: {
					name: node.name,
					price: node.price
				}
			};
		}
	}
};
