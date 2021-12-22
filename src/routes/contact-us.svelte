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
	import { siteData } from '$lib/stores';

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
<div class="min-h-screen pt-16 pb-12 flex flex-col bg-white">
	<main
		class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
	>
		<div class="flex-shrink-0 flex justify-center">
			<a href="/" class="inline-flex">
				<span class="sr-only">{$siteData.title}</span>
				<img
					class="h-60 w-auto"
					src={urlFor($siteData.logo.asset).format('webp').width(400).url()}
					alt={$siteData.logo.alt}
				/>
			</a>
		</div>
		<div class="py-16">
			<div class="text-center">
				<p class="text-sm font-semibold text-primary uppercase tracking-wide">503 error</p>
				<h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
					Temporarily Unavailable
				</h1>
				<p class="mt-2 text-base text-gray-500">
					Sorry, this page is currently under construction. Please check back again later.
				</p>
				<div class="mt-6">
					<a href="/" class="text-base font-medium text-primary hover:text-highlight"
						>Go back home<span aria-hidden="true"> &rarr;</span></a
					>
				</div>
			</div>
		</div>
	</main>
</div>
