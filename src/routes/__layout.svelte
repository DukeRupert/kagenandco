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

	// Write Sanity content to global store
	export let data;
	siteData.set(data);
</script>

<div class="parent h-screen">
	<nav class="bg-white shadow" aria-label="Top">
		<Nav />
	</nav>
	<main class="bg-white overflow-y-auto" on:click={() => activeTopMenu.set('')}>
		<Modal />
		<slot />
		<Footer />
	</main>
</div>

<style>
	.parent {
		display: grid;
		grid-template-rows: 140px 1fr;
		grid-template-columns: 1fr;
	}
</style>
