<script lang="ts">
	// Your selected Skeleton theme:
	import '../theme.postcss';
	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	import { page } from '$app/stores';
	import Toaster from '$lib/components/toast/index.svelte';

	const nakedPaths = ['/sitemap.xml'];
	$: naked = nakedPaths.includes($page.url.pathname);
</script>

<Toaster />
{#if naked}
	<slot />
{:else}
	<header>
		<Navigation />
	</header>
	<main>
		<slot />
	</main>
	<Footer />
{/if}
