<script lang="ts">
	import type { LayoutData } from './$types';
	import type { Cart } from '$lib/types/cart';
	import '../app.css';
	import { siteData, activeTopMenu } from '$lib/stores';
	import { isCartOpen, cart } from '$lib/stores';
	import cartCreate from '$lib/shopify/cartCreate';
	import queryCart from '$lib/shopify/queryCart';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SlideOver from '$lib/components/SlideOver.svelte';
	import { onMount } from 'svelte';
	import { error } from '@sveltejs/kit';
	import Banner from '$lib/components/Banner.svelte';

	// Write Sanity content to global store
	export let data: LayoutData;
	$siteData = data;

	function closeActiveTopMenu() {
		activeTopMenu.set('');
	}

	async function createNewCart() {
		const response = await cartCreate();

		if (!response.ok) {
			throw error(500);
		}

		const newCart: Cart = await response.json();
		const { checkoutUrl, id } = newCart;

		// Update stores
		$cart = newCart;

		// Persist to localStorage
		localStorage.setItem('cartId', id);
		localStorage.setItem('checkoutUrl', checkoutUrl);
	}

	// Initialize cart status
	onMount(async () => {
		// get cart details from localStorage
		const storedCartId = localStorage.getItem('cartId');

		// No cartId is found, create a new one
		if (!storedCartId) {
			// create a new cart
			createNewCart();
			return;
		}

		// cartId is found, retrieve cart from Shopify
		const response = await queryCart(storedCartId);

		if (!response.ok) {
			throw error(500);
		}

		const newCart: Cart = await response.json();

		// If the cart is not valid, create a new cart
		if (newCart == null) {
			createNewCart();
		} else {
			// Cart is valid. update store
			$cart = newCart;
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
