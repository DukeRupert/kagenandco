<script lang="ts">
	import type { Cart } from 'src/types/cart';
	import type { Edges } from 'src/types/product';
	import { isCartOpen } from '$lib/stores';
	import { onMount } from 'svelte';
	import CartList from './cart/CartList.svelte';

	function handleClick() {
		isCartOpen.set(false);
	}

	let cart: Cart;
	let cartItems: Edges[] = [];
	let count = 0;

	onMount(() => {
		// get cart details from localStorage
		cart = JSON.parse(localStorage.getItem('cart'));
		cartItems = cart.lines.edges;

		let sum = cartItems.map((n) => n.node.quantity);
		count = sum.reduce((pre, cur) => pre + cur);
	});
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div
	class="relative transition-all ease-in-out duration-500 sm:duration-700 {$isCartOpen
		? 'z-[100]'
		: '-z-10'}"
	on:click={handleClick}
	aria-labelledby="slide-over-title"
	role="dialog"
	aria-modal="true"
>
	<div
		class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out {$isCartOpen
			? 'opacity-100'
			: 'opacity-0'}"
	/>

	<div class="fixed inset-0 overflow-hidden">
		<div class="absolute inset-0 overflow-hidden">
			<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
				<div
					class="pointer-events-auto w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 {$isCartOpen
						? 'translate-x-0'
						: 'translate-x-full'}"
				>
					<div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
						<div class="px-4 sm:px-6">
							<div class="flex items-start justify-between">
								<h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
									Shopping Cart ({count})
								</h2>
								<div class="ml-3 flex h-7 items-center">
									<button
										on:click|preventDefault={handleClick}
										type="button"
										class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										<span class="sr-only">Close panel</span>
										<!-- Heroicon name: outline/x -->
										<svg
											class="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="2"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div class="relative mt-6 flex-1 px-4 sm:px-6">
							<CartList {cart} {cartItems} />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
