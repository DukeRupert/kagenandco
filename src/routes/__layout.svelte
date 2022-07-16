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
	import {
		isCartOpen,
		cart,
		cartId,
		checkoutUrl,
		cartItems,
		subtotal,
		itemCount
	} from '$lib/stores';
	import { createCart, initializeCart } from '$lib/shopify';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SlideOver from '$lib/components/SlideOver.svelte';
	import { onMount } from 'svelte';

	// Write Sanity content to global store
	export let data;
	siteData.set(data);

	function closeActiveTopMenu() {
		activeTopMenu.set('');
	}

	async function createNewCart() {
		const res = await createCart();
		console.log(`Response from createCart : ${JSON.stringify(res)}`);
		const newCart = res?.cartCreate?.cart || {};
		const id = res?.cartCreate?.cart?.id ?? '';
		const url = res?.cartCreate?.cart?.checkoutUrl ?? '';
		// Update stores
		cart.set(newCart);

		// Persist to localStorage
		localStorage.setItem('cartId', id);
	}

	// Initialize cart status
	onMount(async () => {
		// get cart details from localStorage
		const storedCartId = localStorage.getItem('cartId');
		console.log(`Stored cartId : ${storedCartId}`);
		if (!storedCartId) {
			console.log(`Stored cartId does not exist -> Create new cart`);
			// create a new cart
			createNewCart();
		} else {
			console.log('Stored cartId exists -> refreshing cart');
			// validate cartId with shopify
			const res = await initializeCart(storedCartId);

			// If the cart is not valid, create a new cart
			if (res.cart == null) {
				console.log('Refreshed cart is null -> Create new cart');
				createNewCart();
			} else {
				// Cart is valid. Destructure and assign to stores.
				const freshCart = res?.cart ?? {};
				cart.set(freshCart);

				console.log(`cartId : ${$cartId}`);

				console.log(`checkoutUrl : ${$checkoutUrl}`);

				console.log(`cartItems : ${JSON.stringify($cartItems)}`);

				console.log(`itemCount: ${JSON.stringify($itemCount)}`);

				console.log(`subtotal : ${JSON.stringify($subtotal)}`);
			}
		}
	});
</script>

<div
	class="flex flex-col h-full w-full min-h-screen scroll-smooth {$isCartOpen
		? 'overflow-hidden'
		: ''}}"
>
	<Nav />
	<main
		class="bg-white flex flex-col min-h-screen overflow-y-auto"
		on:click={closeActiveTopMenu}
		on:mouseenter={closeActiveTopMenu}
	>
		<SlideOver />
		<div class="h-full mt-[96px]">
			<slot />
		</div>
	</main>
	<Footer />
</div>
