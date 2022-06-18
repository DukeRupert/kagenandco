<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/api/siteSettings.json`);

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
	import '../app.css';
	import { siteData, activeTopMenu } from '$lib/stores';
	import Modal from '$lib/components/Modal.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SlideOver from '$lib/components/SlideOver.svelte';

	// Write Sanity content to global store
	export let data;
	siteData.set(data);

	function closeActiveTopMenu() {
		activeTopMenu.set('');
	}
</script>

<div class="parent flex flex-col h-full w-full min-h-screen scroll-smooth}">
	<Nav />
	<main
		class="bg-white flex flex-col min-h-screen overflow-y-auto"
		on:click={closeActiveTopMenu}
		on:mouseenter={closeActiveTopMenu}
	>
		<Modal />
		<SlideOver />
		<div class="h-full mt-[96px]">
			<slot />
		</div>
	</main>
	<Footer />
</div>
