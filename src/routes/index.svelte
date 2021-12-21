<script context="module">
	export async function load({ fetch }) {
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
	import ModalLocation from '$lib/components/ModalLocation.svelte';

	// SEO
	const pageUrl = `https://${$page.host}${$page.path}`;

	// Sanity Content
	export let data;
	console.log(data);

	// Modal
	let active = false;
	let action = 'order';

	function closeModal() {
		active = false;
	}

	function openModal(event) {
		active = true;
		action = event.detail;
	}
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
				url: urlFor(data.mainImage.asset).width(388).height(388).format('webp').url(),
				width: '388',
				height: '388',
				alt: data.mainImage.alt
			}
		]
	}}
/>
<ModalLocation on:close={closeModal} {active} {action} />
<PrimaryBanner on:active={openModal} />
<LocationsBanner />
