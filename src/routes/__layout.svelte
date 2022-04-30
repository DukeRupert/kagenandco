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
	import { siteData } from '$lib/stores';
	import Modal from '$lib/components/Modal.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Write Sanity content to global store
	export let data;
	siteData.set(data);
</script>

<div class="parent">
	<nav class="bg-white shadow">
		<Nav />
	</nav>
	<main class="bg-white">
		<Modal />
		<slot />
	</main>
	<footer>
		<Footer />
	</footer>
</div>

<style>
	.parent {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
	}
	nav {
		grid-row-start: 1;
		grid-row-end: 2;
	}
	main {
		grid-row-start: 2;
		grid-row-end: 3;
	}
	footer {
		grid-row-start: 3;
		grid-row-end: 4;
	}
</style>
