<script context="module">
	export async function load({ page, fetch }) {
		const slug = page.path;
		const res = await fetch(`/api${slug}.json`);
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

	// SEO
	const pageUrl = `https://${$page.host}${$page.path}`;

	// Sanity Content
	export let data;
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
				url: urlFor(data.mainImage.asset).width(600).height(600).format('webp').url(),
				width: '600',
				height: '600',
				alt: data.mainImage.alt
			}
		]
	}}
/>
<h1>{data.title}</h1>
