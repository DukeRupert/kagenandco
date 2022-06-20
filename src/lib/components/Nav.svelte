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
		console.log('Made it to mount');
		try {
			cartId = localStorage.getItem('cartId');
			console.log(`cartId : ${cartId}`);
		} catch (error) {
			console.log(error);
		}

		if (cartId) {
			console.log('Checking if cart is valid...');
			const validCart = await checkIfCartExists(cartId);
			console.log(validCart);
			if (validCart.cart !== null) {
				console.log('Cart is valid.');
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
				console.log('Cart is invalid.');
				purgeCart();
				console.log('Cart is purged from local storage.');
			}
		}
	});
</script>

<TopMenu {count}>
	<MobileMenu />
</TopMenu>
