<script lang="ts">
	import { price } from '$lib/utils';
	import Counter from '../Counter.svelte';
	import type { CartItem } from 'src/types/product';
	export let item: CartItem;
	const { id, sellingPlanAllocation } = item;
	let sellingPlanId = '';

	// Change quantity of an item in the cart
	let quantity = item.quantity;
	if (sellingPlanAllocation) {
		sellingPlanId = sellingPlanAllocation.sellingPlan.id;
	}
	const quantityAvailable = item.merchandise.quantityAvailable;

	let timer;
	const debounceUpdate = async () => {
		clearTimeout(timer);
		timer = setTimeout(updateItem, 2000);
	};

	function handleIncrement() {
		if (quantity < quantityAvailable) {
			quantity++;
		}
		debounceUpdate();
	}

	function handleDecrement() {
		if (quantity > 1) {
			quantity--;
		}
		debounceUpdate();
	}

	const updateItem = async () => {
		// remove item from Shopify cart
		const updatedCart = await fetch('/api/utils/updateCart', {
			method: 'POST',
			body: JSON.stringify({
				cartId: localStorage.getItem('cartId'),
				lines: [{ id, quantity, sellingPlanId }]
			})
		})
			.then((res) => res.json())
			.then((data) => data);
		// update localStorage;
		console.log(`Updating localStorage`);
		localStorage.setItem('cartId', updatedCart.id);
		localStorage.setItem('cart', JSON.stringify(updatedCart));
		location.reload();
	};

	const removeItem = async () => {
		// remove item from Shopify cart
		const removeItemFromCart = await fetch('/api/utils/removeFromCart', {
			method: 'POST',
			body: JSON.stringify({
				cartId: localStorage.getItem('cartId'),
				lineId: item.id
			})
		})
			.then((res) => res.json())
			.then((data) => data);
		// update localStorage;
		localStorage.setItem('cartId', removeItemFromCart.id);
		localStorage.setItem('cart', JSON.stringify(removeItemFromCart));
		location.reload();
	};
</script>

<li class="flex py-6 z-50">
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
					<a
						href="/products/{item.merchandise.product.handle}"
						class="font-medium text-gray-700 hover:text-gray-800"
					>
						{#if sellingPlanAllocation}
							Coffee Club - {item.merchandise.product.title}
						{:else}
							{item.merchandise.product.title}
						{/if}
					</a>
				</h4>
				<p class="ml-4 text-sm font-medium text-gray-900">
					{price(parseFloat(item.merchandise.priceV2.amount))}
				</p>
			</div>
			<p class="mt-1 text-sm text-gray-500">{item.merchandise.title}</p>
			{#if sellingPlanAllocation}
				<p class="mt-1 text-sm text-gray-500">{sellingPlanAllocation.sellingPlan.name}</p>
			{/if}
		</div>

		<div class="mt-4 flex-1 flex items-end justify-between">
			<Counter {quantity} on:increment={handleIncrement} on:decrement={handleDecrement} />
			<div class="ml-4">
				<button
					type="button"
					on:click|preventDefault={removeItem}
					class="text-sm font-medium text-oldGrey hover:text-custard-600"
				>
					<span>Remove</span>
				</button>
			</div>
		</div>
	</div>
</li>
