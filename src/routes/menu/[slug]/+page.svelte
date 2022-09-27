<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import { urlFor } from '$lib/image-url';
	import PortableText from '@portabletext/svelte';
	import Crepe from '$lib/components/Crepe.svelte';
	import Coffee from '$lib/components/Coffee.svelte';
	import Drink from '$lib/components/Drink.svelte';

	// Sanity Content
	export let data;
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
<div class="bg-white">
	<div class="max-w-2xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
		<h1 class="text-3xl text-center font-bold">{data.title}</h1>
	</div>
	{#if sweets}
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Sweet Crepes</h2>
			<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
				<PortableText blocks={sweets} serializers={{ types: { crepe: Crepe } }} />
			</div>
		</div>
	{/if}
	{#if savorys}
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Savory Crepes</h2>
			<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
				<PortableText blocks={savorys} serializers={{ types: { crepe: Crepe } }} />
			</div>
		</div>
	{/if}
	{#if coffees}
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Coffee</h2>
			<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
				<PortableText blocks={coffees} serializers={{ types: { coffee: Coffee } }} />
			</div>
		</div>
	{/if}
	{#if drinks}
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Drinks</h2>
			<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
				<PortableText blocks={drinks} serializers={{ types: { drink: Drink } }} />
			</div>
		</div>
	{/if}
	{#if location}
		<div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<div class="mt-8 flex justify-center">
				<div class="inline-flex rounded-3xl shadow">
					<a
						sveltekit:prefetch
						href={location.orderUrl}
						class="inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-3xl text-black bg-custard-500 hover:bg-custard-400"
					>
						Order Online
					</a>
				</div>
				<div class="ml-3 inline-flex">
					<a
						href={location.locationUrl}
						class="inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-3xl text-black hover:bg-custard-500 hover:border-custard-500 transition-all ease-in"
					>
						Get Directions
					</a>
				</div>
			</div>
		</div>
	{/if}
</div>
