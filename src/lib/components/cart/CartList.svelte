<!-- CartList.svelte -->
<script lang="ts">
	import type { Edges } from 'src/types/product';
	import LineItem from './LineItem.svelte';

	export let cartItems: Edges[];

	async function removeItem(lineId) {
		// remove item from Shopify cart
		const removeItemFromCart = await fetch('/api/remove-from-cart', {
			method: 'POST',
			body: JSON.stringify({
				cartId: localStorage.getItem('cartId'),
				lineId
			})
		})
			.then((res) => res.json())
			.then((data) => data);
		// update localStorage;
		localStorage.setItem('cartId', removeItemFromCart.id);
		localStorage.setItem('cart', JSON.stringify(removeItemFromCart));
		location.reload();
	}
</script>

<section aria-labelledby="cart-heading">
	<h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

	<ul role="list" class="border-t border-b border-gray-200 divide-y divide-gray-200">
		{#each cartItems as item}
			<LineItem item={item.node} />
		{/each}
	</ul>
</section>
