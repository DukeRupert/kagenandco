<script lang="ts">
	import Instagram from './Instagram.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Reviews from '$lib/components/reviews/Reviews.svelte';
	import type { PageData, ActionData } from './$types';
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import { urlFor } from '$lib/image-url';
	import Hero from '$lib/components/hero/ImageTiles.svelte';
	import ContactUs from '$lib/forms/ContactUs.svelte';
	import FoodStarsBanner from '$lib/components/FoodStarsBanner.svelte';
	import QuoteOverlap from '$lib/components/QuoteOverlap.svelte';
	// Sanity Content
	export let data: PageData;
	export let form: ActionData;
	$: ({ title, description, mainImage } = data);
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
<QuoteOverlap />
<Instagram />
<Reviews />
<CTA />
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
