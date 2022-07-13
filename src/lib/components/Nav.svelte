<script lang="ts">
	import MobileMenu from './nav/MobileMenu.svelte';
	import TopMenu from './nav/TopMenu.svelte';
	import { itemCount } from '$lib/stores';
</script>

<TopMenu count={$itemCount}>
	<MobileMenu />
</TopMenu>
