<script lang="ts">
	import ApplicantForm from './ApplicantForm.svelte';
	import type { PageData } from './$types';
	// Sanity Content
	export let data: PageData;
	$:({form} = data)

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
<div class="relative bg-white">
  <div class="relative h-80 overflow-hidden bg-gray-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
    <enhanced:img class="h-full w-full object-cover" src={smiling_thank_you}
			alt="A smiling woman holds out a brown bag with the words Thank You written on the front at a Kagen Coffee and Crepes store.">
  </div>
  <div class="relative mx-auto max-w-7xl pt-12 sm:pt-24 md:py-24">
    <div class="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2">
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Join Our Team</h1>
      <p class="mt-6 text-base leading-7 text-gray-600">No experience needed. Just bring your best attitude and a desire to make our customer's
					day better. You will fit right in.</p>
	  </div>
  </div>
</div>
  <div class="relative mx-auto max-w-2xl px-6 py-12 sm:py-16 lg:px-8">
	<ApplicantForm data={form} />
  </div>

 
