<script lang="ts">
	import SEO from './../lib/components/SEO.svelte';
	import Instagram from './Instagram.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import type { PageData, ActionData } from './$types';
	import Hero from '$lib/components/hero/ImageTiles.svelte';
	import ContactUs from '$lib/forms/ContactUs.svelte';
	import FoodStarsBanner from '$lib/components/FoodStarsBanner.svelte';
	import QuoteOverlap from '$lib/components/QuoteOverlap.svelte';
	import TestimonialGrid from '$lib/components/TestimonialGrid.svelte';
	// Sanity Content
	export let data: PageData;
	export let form: ActionData;

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
<svelte:head>
	<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Restaurant",
  "name": "Kagen Coffee & Crepes",
  "image": [
    "https://www.kagenandco.com/_app/immutable/assets/black_bean_crepe_kagen_coffee_and_crepes.6c87b078.jpg",
    "https://www.kagenandco.com/_app/immutable/assets/oreo_crepe_smiling_employee_kagen_coffee_and_crepes.fc0343bf.jpg",
    "https://www.kagenandco.com/_app/immutable/assets/mixed_berry_crepe_kagen_coffee_and_crepes.9bab80ab.jpg",
    "https://www.kagenandco.com/_app/immutable/assets/the_chunky_monkey_crepe_kagen_coffee_and_crepes.c6a037e6.jpg"
  ],
  "telephone": "+1509-851-7186",
  "email": "info@kagenandco.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "270 Williams Blvd",
    "addressLocality": "Richland",
    "addressRegion": "WA",
    "postalCode": "99354"
  },
  "menu": "https://www.kagenandco.com/menu/tri-cities",
  "servesCuisine": "Coffee shop",
  "url": "https://www.kagenandco.com/",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "ratingCount": "609"
  }
}
	</script>
</svelte:head>

<FoodStarsBanner />
<Hero />
<QuoteOverlap />
<Instagram />
<TestimonialGrid />
<CTA />
<div id="contact-us" class="relative isolate bg-white pb-32 pt-24 sm:pt-32">
	<div class="relative mx-auto max-w-4xl mb-8">
		<div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
			<h2
				id="contact-heading"
				class="unstyled text-lg font-semibold leading-8 tracking-tight text-primary-600"
			>
				Contact us
			</h2>
			<h3 class="unstyled mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				We want to hear from you!
			</h3>
			<ContactUs data={form} />
		</div>
	</div>
</div>
