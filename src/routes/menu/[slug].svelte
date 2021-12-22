<script context="module">
	export async function load({ page, fetch }) {
		const { slug } = page.params;

		const res = await fetch(`/api/menu/${slug}.json`);
		if (res.ok) {
			const { data } = await res.json();
			return { props: { data } };
		}
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import { urlFor } from '$lib/image-url';
	import type { Menu } from 'src/global';
	import BlockContent from '@arzidava/svelte-portable-text';
	import serializers from '$lib/serializers';

	// SEO
	const pageUrl = `https://${$page.host}${$page.path}`;

	// Sanity Content
	export let data;
	const menu: Menu = data.body.menu;
</script>

<SvelteSeo
	title={data.title}
	description={data.description}
	canonical={$page.host + $page.path}
	openGraph={{
		title: data.title,
		description: data.excerpt,
		url: pageUrl,
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
	<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Sweet Crepes</h2>
		<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
			<BlockContent blocks={menu.sweets} {serializers} />
		</div>
	</div>
	<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Savory Crepes</h2>
		<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
			<BlockContent blocks={menu.savorys} {serializers} />
		</div>
	</div>
	<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Coffee</h2>
		<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
			<BlockContent blocks={menu.coffees} {serializers} />
		</div>
	</div>
	<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Drinks</h2>
		<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
			<BlockContent blocks={menu.drinks} {serializers} />
		</div>
	</div>
	<div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
		<div class="mt-8 flex justify-center">
			<div class="inline-flex rounded-3xl shadow">
				<a
					sveltekit:prefetch
					href={menu.location.orderUrl}
					class="inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-3xl text-black bg-custard-500 hover:bg-custard-400"
				>
					Order Online
				</a>
			</div>
			<div class="ml-3 inline-flex">
				<a
					href={menu.location.locationUrl}
					class="inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-3xl text-black hover:bg-custard-500 hover:border-custard-500 transition-all ease-in"
				>
					Get Directions
				</a>
			</div>
		</div>
	</div>
</div>
