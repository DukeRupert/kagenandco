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
	import MenuBanner from '$lib/components/MenuBanner.svelte';
	import SubscriptionBanner from '$lib/components/SubscriptionBanner.svelte';

	// Sanity Content
	export let data;
	const { title, description, mainImage } = data;
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
				url: urlFor(data.mainImage.asset).width(600).height(600).format('webp').url(),
				width: '600',
				height: '600',
				alt: data.mainImage.alt
			}
		]
	}}
/>
<PrimaryBanner />
<SubscriptionBanner />
<MenuBanner />
