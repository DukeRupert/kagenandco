<script lang="ts">
	import { onMount } from 'svelte';
	import MobileMenu from './nav/MobileMenu.svelte';
	import TopMenu from './nav/TopMenu.svelte';
	import type { Cart } from 'src/types/cart';

	// Shopping Cart
	let count = 0;
	let cart: Cart;

	onMount(() => {
		cart = JSON.parse(localStorage.getItem('cart'));
		const arr = cart.lines.edges;

		let sum = arr.map((n) => n.node.quantity);
		count = sum.reduce((pre, cur) => pre + cur);
	});
</script>

<TopMenu {count}>
	<MobileMenu />
</TopMenu>
