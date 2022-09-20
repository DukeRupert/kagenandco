<!-- CartList.svelte -->
<script lang="ts">
	import type { Edges } from '$lib/types/cart';
	import LineItem from './LineItem.svelte';
	import { isCartOpen, checkoutUrl, subtotal } from '$lib/stores';

	export let items: Edges | [] = [];

	function closeCart() {
		isCartOpen.set(false);
	}
</script>

<section aria-labelledby="cart-heading h-full">
	{#if items.length > 0}
		<h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

		<ul class="border-t border-b border-gray-200 divide-y divide-gray-200">
			{#each items as item (item.node.id)}
				<LineItem item={item.node} />
			{/each}
		</ul>
		<!-- Order summary -->
		<section aria-labelledby="summary-heading" class="mt-10">
			<h2 id="summary-heading" class="sr-only">Order summary</h2>

			<div>
				<dl class="space-y-4">
					<div class="flex items-center justify-between">
						<dt class="text-base font-medium text-gray-900">Subtotal</dt>
						<dd class="ml-4 text-base font-medium text-gray-900">
							${parseFloat($subtotal.amount).toFixed(2)}
						</dd>
					</div>
				</dl>
				<p class="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
			</div>

			<div class="mt-10 flex items-center text-center">
				<a
					href={$checkoutUrl}
					class="w-full bg-oldGrey border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-custard-500 hover:bg-custard-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
					>Checkout</a
				>
			</div>

			<div class="mt-6 text-sm text-center text-gray-500">
				<p>
					or <button
						on:click|preventDefault={closeCart}
						class="text-oldGrey font-medium hover:text-custard-600"
						>Continue Shopping<span aria-hidden="true"> &rarr;</span></button
					>
				</p>
			</div>
		</section>
	{:else}
		<h2 id="cart-heading" class="sr-only">This shopping cart is empty.</h2>

		<!-- Order summary -->
		<section aria-labelledby="summary-heading" class="mt-10">
			<h2 id="summary-heading" class="sr-only">Continue Shopping</h2>
			<p class="mt-10 text-base text-gray-700">This cart is empty.</p>

			<div class="mt-10">
				<button
					type="submit"
					on:click|preventDefault={closeCart}
					class="w-full bg-oldGrey border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-custard-500 hover:bg-custard-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
					>Continue Shopping</button
				>
			</div>
		</section>
	{/if}
</section>
