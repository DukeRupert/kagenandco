<script lang="ts">
	import type { PageData } from './$types';
	import { locations } from '$lib/data/locations';
	import Seo from '$lib/components/SEO.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import LocationCard from './LocationCard.svelte';
	export let data: PageData;

	const seoData = {
		title: 'Kagen Coffee & Crepes - Locations',
		description:
			"Find our nearest location and come join us! It's hard to beat a delicous crepe paired with a strong, handcrafted coffee.",
		url: 'https://www.kagenandco.com/locations',
		og: {
			src: 'https://www.kagenandco.com/images/coffee_cup_with_coffee_beans_kagen_coffee_and_crepes_square.webp',
			alt: 'Kagen Coffee and Crepes coffee cup with coffee beans scattered around.',
			mimeType: 'image/webp',
			width: 650,
			height: 619
		}
	};

	const title = 'Locations';
	const description = seoData.description;
</script>

<Seo data={seoData} />
<!-- Hero --><PageWrapper {title} {description}>
	<!-- Location Cards -->
	<div class="bg-white px-6 pb-32 lg:px-8">
		<div class="max-w-6xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-5xl lg:px-8">
			<h2 id="products-heading" class="sr-only">Locations</h2>

			<div class="grid grid-cols-1 gap-y-14 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
				{#each locations as location}
					<LocationCard {location} />
				{/each}
			</div>
		</div>
	</div>
</PageWrapper>
