<script lang="ts">
	import CTA from '$lib/components/CTA.svelte';
	import Reviews from '$lib/components/reviews/Reviews.svelte';
	import type { PageData, ActionData } from './$types';
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import { urlFor } from '$lib/image-url';
	import Hero from '$lib/components/hero/ImageTiles.svelte';
	import ContactUs from '$lib/forms/ContactUs.svelte';
	import FoodStarsBanner from '$lib/components/FoodStarsBanner.svelte';
	import Quote from '$lib/components/Quote.svelte';
	import QuoteOverlap from '$lib/components/QuoteOverlap.svelte';
	// Sanity Content
	export let data: PageData;
	export let form: ActionData;
	$: ({ title, description, mainImage } = data);

	const quote = {
		quote: 'Not all superheroes wear capes...some make crepes.',
		name: 'Kagen Cox',
		title: 'Owner',
		img: {
			src: 'https://cdn.sanity.io/images/codowsse/production/7b5e94b83d75001698cb3325bd344e8772038e5e-800x800.jpg?rect=0,134,800,533&w=1310&h=873&fm=webp',
			alt: 'Kagen Cox owner of Kagen Coffee and Crepes'
		}
	};
</script>

<SvelteSeo
	{title}
	{description}
	canonical={$page.url.toString()}
	openGraph={{
		title: title,
		description: description,
		url: $page.url.toString(),
		type: 'website',
		images: [
			{
				url: urlFor(mainImage.asset).width(600).height(600).format('webp').url(),
				width: '600',
				height: '600',
				alt: mainImage.alt
			}
		]
	}}
/>

<FoodStarsBanner />
<Hero />
<QuoteOverlap data={quote} />
<Reviews />
<CTA />
<div class="relative mx-auto max-w-4xl mb-8">
	<h2 id="contact-heading" class="sr-only">Contact us</h2>

	<div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
		<h3 class="text-lg font-medium text-gray-900">Send us a message</h3>
		<ContactUs data={form} />
	</div>
</div>
<!-- <PrimaryBanner />
	<SubscriptionBanner />
	<MenuBanner /> -->
