<script lang="ts">
	import MobileMenu from './MobileMenu.svelte';
	import TopMenu from './TopMenu.svelte';
	import { itemCount } from '$lib/stores';
</script>

<TopMenu count={$itemCount}>
	<MobileMenu />
</TopMenu>
