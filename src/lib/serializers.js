// https://www.npmjs.com/package/@sanity/image-url
import { urlFor } from '$lib/image-url';
import Link from '$lib/components/Link.svelte';
import TextSection from '$lib/components/TextSection.svelte';

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
		}
	}
};
