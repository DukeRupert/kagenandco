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
	// import Navbar from '$lib/components/navbar.svelte';
	// import Footer from '$lib/components/footer.svelte';
	// import Banner from '$lib/components/banner.svelte';
</script>

<div class="parent">
	<nav class="bg-white shadow">
		<!-- <Banner />
		<Navbar /> -->
	</nav>
	<main class="bg-white">
		<slot />
	</main>
	<footer>
		<!-- <Footer /> -->
	</footer>
</div>

<style>
	.parent {
		display: grid;
		grid-template-rows: auto 1fr auto;
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
