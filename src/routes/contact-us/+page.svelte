<script lang="ts">
	import type { PageData } from './$types';
	import { handleToast } from '$lib/components/toast/index.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import ContactForm from './ContactForm.svelte';

	export let data: PageData;
	$: ({ form } = data);

	const title = 'Contact Us';
	const description = 'We want to hear from you!';
</script>

<PageWrapper {title} {description}>
	<div class="relative mx-auto max-w-3xl mb-8">
		<ContactForm data={form} on:toast={handleToast} />
	</div>
</PageWrapper>
