// https://www.npmjs.com/package/@sanity/image-url
import { urlFor } from '$lib/image-url';
import Link from '$lib/components/Link.svelte';
import TextSection from '$lib/components/TextSection.svelte';
import Crepe from '$lib/components/Crepe.svelte';
import Coffee from '$lib/components/Coffee.svelte';
import Drink from '$lib/components/Drink.svelte';

export default {
	marks: {
		link: (node) => {
			return {
				component: Link,
				props: node.mark
			};
		}
	},
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
		crepe: (node) => {
			return {
				component: Crepe,
				props: {
					url: urlFor(node.image.asset).format('webp').width(400).height(400).url(),
					alt: node.image.alt,
					name: node.name,
					price: node.price,
					ingredients: node.ingredients
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
