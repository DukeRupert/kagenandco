<script lang="ts">
	import { onMount } from 'svelte';
	import MobileMenu from './nav/MobileMenu.svelte';
	import TopMenu from './nav/TopMenu.svelte';
	import type { Cart } from 'src/types/cart';
	import { cartValue, isCartOpen } from '$lib/stores';
	import type { Edges } from 'src/types/product';

	// Shopping Cart
	let count = 0;
	let cart: Cart;
	let cartItems: Edges[] = [];

	onMount(() => {
		cart = JSON.parse(localStorage.getItem('cart'));

		if (cart) {
			cartItems = cart.lines.edges;
		}

		// If cartItems isn't empty update cart count
		if (cartItems.length > 0) {
			let sum = cartItems.map((n) => n.node.quantity);
			count = sum.reduce((pre, cur) => pre + cur);
		}

		// If an item has been added to the cart, open the SlideOver
		if (count !== $cartValue) {
			// Update value for future evaluations
			cartValue.set(count);

			// Open the cart
			isCartOpen.set(true);
		}
	});
</script>

<TopMenu {count}>
	<MobileMenu />
</TopMenu>
