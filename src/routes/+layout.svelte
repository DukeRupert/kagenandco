<script lang="ts">
	// Your selected Skeleton theme:
	import '../theme.postcss';
	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';
	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';
	import type { Cart } from '$lib/types/cart';
	import { isCartOpen, cart } from '$lib/stores';
	import cartCreate from '$lib/shopify/cartCreate';
	import queryCart from '$lib/shopify/queryCart';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SlideOver from '$lib/components/SlideOver.svelte';
	import { onMount } from 'svelte';
	import { error } from '@sveltejs/kit';
	import { Toast } from '@skeletonlabs/skeleton';
	// import Toaster from '$lib/components/toast/index.svelte';

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

<Toast />
<SlideOver />
<div class="{$isCartOpen ? 'overflow-hidden' : ''}}">
	<header>
		<Navigation />
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<Footer />
	</footer>
</div>
