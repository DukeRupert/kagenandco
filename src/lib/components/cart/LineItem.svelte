<script lang="ts">
	import { price } from '$lib/utils';

	import type { CartItem } from 'src/types/product';
	export let item: CartItem;
	console.log(item);

	async function removeItem(lineId) {
		// remove item from Shopify cart
		const removeItemFromCart = await fetch('/api/utils/removeFromCart', {
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

<li class="flex py-6">
	<div class="flex-shrink-0">
		<img
			src={item.merchandise.product.images.edges[0].node.url}
			alt={item.merchandise.product.images.edges[0].node.altText || item.merchandise.product.title}
			class="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
		/>
	</div>

	<div class="ml-4 flex-1 flex flex-col sm:ml-6">
		<div>
			<div class="flex justify-between">
				<h4 class="text-sm">
					<a href="#" class="font-medium text-gray-700 hover:text-gray-800">
						{item.merchandise.product.title}
					</a>
				</h4>
				<p class="ml-4 text-sm font-medium text-gray-900">
					{price(parseFloat(item.merchandise.priceV2.amount))}
				</p>
			</div>
			<p class="mt-1 text-sm text-gray-500">Mint</p>
			<p class="mt-1 text-sm text-gray-500">Medium</p>
		</div>

		<div class="mt-4 flex-1 flex items-end justify-between">
			<p class="flex items-center text-sm text-gray-700 space-x-2">
				<!-- Heroicon name: solid/check -->
				<svg
					class="flex-shrink-0 h-5 w-5 text-green-500"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>In stock</span>
			</p>
			<div class="ml-4">
				<button
					type="button"
					on:click|preventDefault={() => removeItem(item.id)}
					class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
				>
					<span>Remove</span>
				</button>
			</div>
		</div>
	</div>
</li>
