<script context="module">
	export async function load({ fetch, ctx }) {
		// Page data from Sanity
		const res = await fetch(`/api/home.json`);

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
	import PrimaryBanner from '$lib/components/PrimaryBanner.svelte';
	import LocationsBanner from '$lib/components/LocationsBanner.svelte';
	import Hero from '$lib/components/Hero.svelte';

	// SEO
	const pageUrl = `https://${$page.url.hostname}${$page.url.pathname}`;

	// Sanity Content
	export let data;
</script>

<SvelteSeo
	title={data.title}
	description={data.description}
	canonical={$page.url.hostname + $page.url.pathname}
	openGraph={{
		title: data.title,
		description: data.excerpt,
		url: pageUrl,
		type: 'website',
		images: [
			{
				url: urlFor(data.mainImage.asset).width(600).height(600).format('webp').url(),
				width: '600',
				height: '600',
				alt: data.mainImage.alt
			}
		]
	}}
/>
<PrimaryBanner />
<LocationsBanner />
