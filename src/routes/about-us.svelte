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
	import BlockContent from '@arzidava/svelte-portable-text';
	import serializers from '$lib/serializers';
	import CallToAction from '$lib/components/CallToAction.svelte';

	// SEO
	const pageUrl = `https://${$page.host}${$page.path}`;

	// Sanity Content
	export let data;
	console.log(data.body);
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

<div class="relative py-16 bg-white overflow-hidden">
	<div class="relative px-4 sm:px-6 lg:px-8">
		<div class="mt-6 prose prose-indigo prose-lg text-gray-700 mx-auto">
			<BlockContent blocks={data.body} {serializers} />
			<figure>
				<img
					class="w-full rounded-lg"
					src={urlFor(data.mainImage.asset).width(1310).height(873).format('webp').url()}
					alt={data.mainImage.alt}
					width="1310"
					height="873"
				/>
				<figcaption>{data.mainImage.caption}</figcaption>
			</figure>
		</div>
		<CallToAction />
	</div>
</div>
