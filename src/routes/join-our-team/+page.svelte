<script lang="ts">
	//@ts-ignore
	import smiling_thank_you from '/src/lib/assets/oreo_crepe_smiling_employee_kagen_coffee_and_crepes.jpg?enhanced';
	import type { PageData } from './$types';
	import { handleToast } from '$lib/components/toast/index.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import ApplicantForm from './ApplicantForm.svelte';

	export let data: PageData;
	$: ({ form } = data);

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
	<div class="relative mx-auto max-w-7xl pt-12 sm:pt-24 md:py-24">
		<div class="text-center">
			<h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Join Our Team
			</h1>
			<p class="mt-6 text-base leading-7 text-gray-600">
				No experience needed. Just bring your best attitude and a desire to make our customer's day
				better. You will fit right in.
			</p>
		</div>
	</div>
</div>
<div class="relative mx-auto max-w-2xl px-6 pb-12 lg:px-8">
	<ApplicantForm on:toast={handleToast} data={form} />
</div>
