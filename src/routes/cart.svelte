<script lang="ts">
	import type { Edges } from 'src/types/product';
	import type { Cart } from 'src/types/cart';
	import CartList from '$lib/components/cart/CartList.svelte';
	import { onMount } from 'svelte';
	let cart: Cart;
	let cartItems: Edges[] = [];
	onMount(() => {
		// get cart details from localStorage
		cart = JSON.parse(localStorage.getItem('cart'));
		console.log(cart);
		cartItems = cart.lines.edges;
		console.log(cartItems);
	});
</script>

<!-- src/routes/cart.svelte -->
<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
	<h1 class="text-3xl font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl">
		Shopping Cart
	</h1>

	<form class="mt-12">
		<CartList {cartItems} />
		<!-- Order summary -->
		<section aria-labelledby="summary-heading" class="mt-10">
			<h2 id="summary-heading" class="sr-only">Order summary</h2>

			<div>
				<dl class="space-y-4">
					<div class="flex items-center justify-between">
						<dt class="text-base font-medium text-gray-900">Subtotal</dt>
						{#if cart}
							<dd class="ml-4 text-base font-medium text-gray-900">
								${cart.estimatedCost.subtotalAmount.amount}
							</dd>
						{/if}
					</div>
				</dl>
				<p class="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
			</div>

			<div class="mt-10">
				<button
					type="submit"
					class="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
					>Checkout</button
				>
			</div>

			<div class="mt-6 text-sm text-center text-gray-500">
				<p>
					or <a href="/collections" class="text-indigo-600 font-medium hover:text-indigo-500"
						>Continue Shopping<span aria-hidden="true"> &rarr;</span></a
					>
				</p>
			</div>
		</section>
	</form>
</div>

<!-- Policy grid -->
<section aria-labelledby="policies-heading" class="bg-gray-50 border-t border-gray-200">
	<h2 id="policies-heading" class="sr-only">Our policies</h2>

	<div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
		<div
			class="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0"
		>
			<div class="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
				<div class="md:flex-shrink-0">
					<div class="flow-root">
						<img
							class="-my-1 h-24 w-auto mx-auto"
							src="https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg"
							alt=""
						/>
					</div>
				</div>
				<div class="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
					<h3 class="text-sm font-semibold tracking-wide uppercase text-gray-900">Free returns</h3>
					<p class="mt-3 text-sm text-gray-500">
						Not what you expected? Place it back in the parcel and attach the pre-paid postage
						stamp.
					</p>
				</div>
			</div>

			<div class="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
				<div class="md:flex-shrink-0">
					<div class="flow-root">
						<img
							class="-my-1 h-24 w-auto mx-auto"
							src="https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg"
							alt=""
						/>
					</div>
				</div>
				<div class="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
					<h3 class="text-sm font-semibold tracking-wide uppercase text-gray-900">
						Same day delivery
					</h3>
					<p class="mt-3 text-sm text-gray-500">
						We offer a delivery service that has never been done before. Checkout today and receive
						your products within hours.
					</p>
				</div>
			</div>

			<div class="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
				<div class="md:flex-shrink-0">
					<div class="flow-root">
						<img
							class="-my-1 h-24 w-auto mx-auto"
							src="https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg"
							alt=""
						/>
					</div>
				</div>
				<div class="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
					<h3 class="text-sm font-semibold tracking-wide uppercase text-gray-900">
						All year discount
					</h3>
					<p class="mt-3 text-sm text-gray-500">
						Looking for a deal? You can use the code &quot;ALLYEAR&quot; at checkout and get money
						off all year round.
					</p>
				</div>
			</div>

			<div class="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
				<div class="md:flex-shrink-0">
					<div class="flow-root">
						<img
							class="-my-1 h-24 w-auto mx-auto"
							src="https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg"
							alt=""
						/>
					</div>
				</div>
				<div class="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
					<h3 class="text-sm font-semibold tracking-wide uppercase text-gray-900">
						For the planet
					</h3>
					<p class="mt-3 text-sm text-gray-500">
						We’ve pledged 1% of sales to the preservation and restoration of the natural
						environment.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
