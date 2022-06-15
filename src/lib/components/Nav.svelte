<script lang="ts">
	import { onMount } from 'svelte';
	import MobileMenu from './nav/MobileMenu.svelte';
	import TopMenu from './nav/TopMenu.svelte';

	let mobileMenu = false;

	const toggleMenu = () => {
		mobileMenu = !mobileMenu;
		console.log(mobileMenu);
	};

	// Shopping Cart
	let count: number;
	let cart;

	onMount(() => {
		cart = JSON.parse(localStorage.getItem('cart'));
		if (cart) {
			let sum = 0;
			const arr = cart.lines.edges;

			count = arr.length;
		}
	});
</script>

<TopMenu {count}>
	<MobileMenu />
</TopMenu>
