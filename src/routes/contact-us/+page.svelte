<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import { urlFor } from '$lib/image-url';
	import ContactUs from '$lib/forms/ContactUs.svelte';
	import type { PageData } from './$types';
	// Sanity Content
	export let data: PageData;
	console.log(data);
	$: ({ title, description, mainImage } = data);
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
				url: urlFor(mainImage.asset).width(600).height(600).format('webp').url(),
				width: '600',
				height: '600',
				alt: mainImage.alt
			}
		]
	}}
/>

<section class="relative bg-white" aria-labelledby="contact-heading">
	<div class="absolute w-full h-1/2 bg-white" aria-hidden="true" />
	<div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="relative bg-white mb-8">
			<h2 id="contact-heading" class="sr-only">Contact us</h2>

			<div class="grid grid-cols-1 lg:grid-cols-3">
				<div class="relative overflow-hidden py-10 px-6 bg-secondary sm:px-10 xl:p-12">
					<img
						src="/kccLogoNew.svg"
						alt="Kagen Coffee and Crepes Rooster logo"
						class="w-full h-auto"
					/>
				</div>
				<div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
					<h3 class="text-lg font-medium text-gray-900">Send us a message</h3>
					<ContactUs />
				</div>
			</div>
		</div>
	</div>
</section>
