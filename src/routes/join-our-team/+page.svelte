<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import { urlFor } from '$lib/image-url';
	import JoinOurTeam from '$lib/forms/JoinOurTeam.svelte';
	import type { PageData } from './$types';
	// Sanity Content
	export let data: PageData;
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
<!-- Contact section -->
<section class="relative bg-white" aria-labelledby="join-our-team">
	<div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col lg:flex-row">
			<div class="flex-1 flex flex-col">
				<div class="relative overflow-hidden py-10 px-6 bg-secondary sm:px-10 xl:p-12">
					<img
						src="/kccLogoNew.svg"
						alt="Kagen Coffee and Crepes Rooster logo"
						class="w-full max-w-2xl h-auto m-auto"
					/>
				</div>
			</div>
			<div class="flex-1 flex flex-col">
				<div class="relative bg-white mb-8">
					<h2 id="join-our-team" class="sr-only">Join Our Team</h2>
					<JoinOurTeam />
				</div>
			</div>
		</div>
	</div>
</section>
