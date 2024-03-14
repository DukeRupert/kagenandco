<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Hero from './(components)/hero.svelte';
	import QuoteOverlap from './(components)/quote-with-overlap.svelte';
	import CallToAction from './(components)/call-to-action.svelte';

	const seoData = {
		title: 'Kagen Coffee & Crepes - Coffee, Crepes, and Community!',
		description:
			'Families and friends need a place to gather, catch up and simply enjoy life together. Our delicious crepes and crafted coffees are here to help you deepen friendships and build memories today.',
		url: 'https://www.kagenandco.com/',
		og: {
			src: 'https://www.kagenandco.com/images/kagen_coffee_and_crepes_og.jpg',
			alt: 'Kagen Coffee and Crepes landing page',
			mimeType: 'image/jpg',
			width: 1200,
			height: 630
		}
	};
</script>

<SEO data={seoData} />
<Hero />
<QuoteOverlap />
<CallToAction />
