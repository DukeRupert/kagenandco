<script context="module">
	export async function load({ url, fetch }) {
		const slug = url.pathname;
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
	import PortableText from '@portabletext/svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';
	import Link from '$lib/components/Link.svelte';
	import TextSection from '$lib/components/TextSection.svelte';

	// Sanity Content
	export let data;
	const { title, description, asset, alt, caption } = data.mainImage;
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

<div class="relative py-16 bg-white overflow-hidden">
	<div class="relative px-4 sm:px-6 lg:px-8">
		<div class="mt-6 prose prose-indigo prose-lg text-gray-700 mx-auto">
			{#if data.body}
				<PortableText
					blocks={data.body}
					serializers={{ types: { textSection: TextSection }, marks: { link: Link } }}
				/>
			{/if}
			{#if data.mainImage}
				<figure>
					<img
						class="w-full rounded-lg"
						src={urlFor(asset).width(1310).height(873).format('webp').url()}
						{alt}
						width="1310"
						height="873"
					/>
					<figcaption>{caption}</figcaption>
				</figure>
			{/if}
		</div>
		<CallToAction />
	</div>
</div>
