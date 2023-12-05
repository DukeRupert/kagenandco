<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Instagram from './Instagram.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Hero from '$lib/components/hero/ImageTiles.svelte';
	import QuoteOverlap from '$lib/components/QuoteOverlap.svelte';
	import TestimonialGrid from '$lib/components/TestimonialGrid.svelte';
	import CrepesOfTheMonth from '$lib/components/CrepesOfTheMonth.svelte';

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

<svelte:head>
	<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Restaurant",
  "name": "Kagen Coffee & Crepes",
  "url": "https://www.kagenandco.com/",
  "logo": "https://www.kagenandco.com/images/logo_kcc.png",
  "description": "Families and friends need a place to gather, catch up and simply enjoy life together. Our delicious crepes and crafted coffees are here to help you deepen friendships and build memories today.",
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
  "sameAs": [
	"https://www.facebook.com/kagencoffeeandcrepes/",
	"https://www.instagram.com/kagencoffeeandcrepes/"
  ],
  "menu": "https://www.kagenandco.com/menu/tri-cities",
  "servesCuisine": "Coffee shop",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "ratingCount": "609"
  }
}
	</script>
</svelte:head>

<SEO data={seoData} />
<Hero />
<!-- <CrepesOfTheMonth /> -->
<QuoteOverlap />
<!-- <Instagram /> -->
<TestimonialGrid />
<CTA />
