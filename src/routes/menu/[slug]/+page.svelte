<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import { urlFor } from '$lib/image-url';
	import { PortableText } from '@portabletext/svelte';
	import Crepe from '$lib/components/Crepe.svelte';
	import Coffee from '$lib/components/Coffee.svelte';
	import Drink from '$lib/components/Drink.svelte';
	import type { PageData } from './$types';

	// Sanity Content
	export let data: PageData;
	console.log(data);
	const { sweets, savorys, coffees, drinks, location } = data.body.menu;
</script>

<SvelteSeo
	title={data.title}
	description={data.description}
	canonical={$page.url.href}
	openGraph={{
		title: data.title,
		description: data.excerpt,
		url: $page.url.href,
		type: 'website',
		images: [
			{
				url: urlFor(data.mainImage.asset).width(1200).height(627).format('webp').url(),
				width: '1200',
				height: '627',
				alt: data.mainImage.alt
			}
		]
	}}
/>
<!-- Hero -->
<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{data.title}</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			Enjoy a fresh crepe today! We offer a variety of savory and sweet crepes that will satisfy any
			craving. Gluten-free is also available.
		</p>
	</div>
</div>
<div class="bg-white">
	<div class="max-w-2xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
		<h1 class="text-3xl text-center font-bold">{data.title}</h1>
	</div>
	{#if sweets}
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Sweet Crepes</h2>
			<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
				<PortableText value={sweets} components={{ types: { crepe: Crepe } }} />
			</div>
		</div>
	{/if}
	{#if savorys}
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Savory Crepes</h2>
			<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
				<PortableText value={savorys} components={{ types: { crepe: Crepe } }} />
			</div>
		</div>
	{/if}
	{#if coffees}
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Coffee</h2>
			<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
				<PortableText value={coffees} components={{ types: { coffee: Coffee } }} />
			</div>
		</div>
	{/if}
	{#if drinks}
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Drinks</h2>
			<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
				<PortableText value={drinks} components={{ types: { drink: Drink } }} />
			</div>
		</div>
	{/if}
	{#if location}
		<div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<div class="mt-8 flex justify-center">
				<div class="inline-flex rounded-3xl shadow">
					<a
						data-sveltekit-preload-data="hover"
						href={location.orderUrl}
						class="btn variant-filled-primary"
					>
						Order Online
					</a>
				</div>
				<div class="ml-3 inline-flex">
					<a href={location.locationUrl} class="btn variant-ringed-primary"> Get Directions </a>
				</div>
			</div>
		</div>
	{/if}
</div>
