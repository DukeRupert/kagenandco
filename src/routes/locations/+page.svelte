<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import { urlFor } from '$lib/image-url';
	import { PortableText } from '@portabletext/svelte';
	import LocationCard from '$lib/components/LocationCard.svelte';
	import Link from '$lib/components/Link.svelte';
	import type { PageData } from './$types';
	// Sanity Content
	export let data: PageData;
	$: ({ title, description, body, mainImage } = data);
	console.log(data);
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
<!-- Hero -->
<div class="relative">
	<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
		<div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
			<div class="absolute inset-0">
				<img
					class="h-full w-full object-cover"
					src={urlFor(mainImage.asset).width(1216).height(368).format('webp').url()}
					alt={mainImage.alt}
				/>
				<div class="absolute inset-0 bg-gray-400 mix-blend-multiply" />
			</div>
			<div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
				<h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
					<span class="block text-custard-500">{title}</span>
				</h1>
				<p class="mt-6 max-w-lg mx-auto text-center text-xl text-custard-200 sm:max-w-3xl">
					Crepes, Coffee, Community
				</p>
			</div>
		</div>
	</div>
</div>
<!-- Location Cards -->
<div class="bg-white">
	<div class="max-w-6xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-5xl lg:px-8">
		<h2 id="products-heading" class="sr-only">Locations</h2>
		{#if body}
			<div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
				<PortableText
					value={body}
					components={{ types: { locationReference: LocationCard }, marks: { link: Link } }}
				/>
			</div>
		{/if}
	</div>
</div>
