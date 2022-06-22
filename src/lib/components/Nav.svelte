<script lang="ts">
	import { onMount } from 'svelte';
	import MobileMenu from './nav/MobileMenu.svelte';
	import TopMenu from './nav/TopMenu.svelte';
	import type { Cart } from 'src/types/cart';
	import { cartValue, isCartOpen } from '$lib/stores';
	import type { Edges } from 'src/types/product';
	import { checkIfCartExists } from '$lib/shopify';

	// Shopping Cart
	let count = 0;
	let cart: Cart;
	let cartId: string = '';
	let cartItems: Edges[] = [];

	function purgeCart() {
		localStorage.removeItem('cartId');
		localStorage.removeItem('cart');
	}

	onMount(async () => {
		try {
			cartId = localStorage.getItem('cartId');
		} catch (error) {
			console.log(error);
		}

		if (cartId !== undefined) {
			const validCart = await checkIfCartExists(cartId);
			if (validCart.cart !== null) {
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
			} else {
				purgeCart();
			}
		}
	});
</script>

<TopMenu {count}>
	<MobileMenu />
</TopMenu>
