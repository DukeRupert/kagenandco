<script lang="ts">
	//@ts-ignore
	import type { PageData } from './$types';
	import { handleToast } from '$lib/components/toast/index.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import ApplicantForm from './ApplicantForm.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';

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

	const eyebrow = 'Employment Opportunities';
	const title = seoData.title;
	const description = seoData.description;
</script>

<Seo data={seoData} />
<PageWrapper {eyebrow} {title} {description}>
	<div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
		<div class="relative py-12 sm:py-16">
			<ApplicantForm on:toast={handleToast} data={form} />
		</div>
	</div>
</PageWrapper>
