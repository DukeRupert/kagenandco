<script lang="ts">
	import JoinOurTeam from '$lib/forms/JoinOurTeam.svelte';
	import type { PageData } from './$types';
	// Sanity Content
	export let data: PageData;

	import smiling_thank_you from '/src/lib/assets/oreo_crepe_smiling_employee_kagen_coffee_and_crepes.jpg?enhanced';
	import Seo from '$lib/components/SEO.svelte';
	const seoData = {
		title: 'Kagen Coffee & Crepes - Join Our Team',
		description:
			"No experience needed. Just bring your best attitude and a desire to make our customer's day better. You will fit right in.",
		url: 'https://www.kagenandco.com/join-our-team',
		og: {
			src: 'https://www.kagenandco.com/images/coffee_cup_with_coffee_beans_kagen_coffee_and_crepes_square.webp',
			alt: 'Kagen Coffee and Crepes coffee cup with coffee beans scattered around.',
			mimeType: 'image/webp',
			width: 650,
			height: 619
		}
	};
</script>

<Seo data={seoData} />
<!-- Hero -->
<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Join Our Team</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			No experience needed. Just bring your best attitude and a desire to make our customer's day
			better. You will fit right in.
		</p>
	</div>
</div>
<!-- Contact section -->
<div class="relative bg-white">
	<div class="lg:absolute lg:inset-0 lg:left-1/2">
		<enhanced:img
			class="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full rounded-tl-lg"
			src={smiling_thank_you}
			alt="A smiling woman holds out a brown bag with the words Thank You written on the front at a Kagen Coffee and Crepes store."
		/>
	</div>
	<div
		class="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32"
	>
		<div class="px-6 lg:px-8">
			<div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
				<h3 class="text-3xl font-bold tracking-tight text-gray-900">Let's work together</h3>
				<JoinOurTeam />
			</div>
		</div>
	</div>
</div>
