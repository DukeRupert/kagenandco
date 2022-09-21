<script lang="ts">
	import { price } from '$lib/utils';
	import { cart, cartId } from '$lib/stores';
	import type { Product } from '$lib/types/cart';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let item: Product;
	$: ({ id, merchandise, quantity, sellingPlanAllocation } = item);

	const quantityAvailable = merchandise?.quantityAvailable ?? 0;

	const removeItem = () => {
		dispatch('remove', {
			id
		});
	};

	const incrementItem = () => {
		if (quantity > quantityAvailable) {
			quantity++;
			if (sellingPlanAllocation) {
				dispatch('quantityChange', {
					id,
					merchandiseId: merchandise.id,
					quantity,
					sellingPlanId: sellingPlanAllocation.sellingPlan.id
				});
				return;
			}
			dispatch('quantityChange', {
				id,
				merchandiseId: merchandise.id,
				quantity
			});
		} else {
			alert('Inventory limit has been reached');
		}
	};

	const decrementItem = () => {
		if (quantity > 0) {
			quantity--;
			if (sellingPlanAllocation) {
				dispatch('quantityChange', {
					id,
					merchandiseId: merchandise.id,
					quantity,
					sellingPlanId: sellingPlanAllocation.sellingPlan.id
				});
				return;
			}
			dispatch('quantityChange', {
				id,
				merchandiseId: merchandise.id,
				quantity
			});
		}
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
					{#if sellingPlanAllocation}
						{price(parseFloat(sellingPlanAllocation.priceAdjustments[0].price.amount))}
					{:else}
						{price(parseFloat(merchandise.priceV2.amount))}
					{/if}
				</p>
			</div>
			<p class="mt-1 text-sm text-gray-500">{item.merchandise.title}</p>
			{#if sellingPlanAllocation}
				<p class="mt-1 text-sm text-gray-500">{sellingPlanAllocation.sellingPlan.name}</p>
			{/if}
		</div>

		<div class="mt-4 flex-1 flex items-end justify-between">
			<div
				class="basis-1/2 border rounded-md mt-3 flex items-center justify-center text-base font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
			>
				<button on:click|stopPropagation={decrementItem} class="basis-1/3 h-full py-3"> - </button>
				<p class="basis-1/3 h-full flex justify-center items-center text-center">{quantity}</p>
				<button on:click|stopPropagation={incrementItem} class="basis-1/3 h-full py-3"> + </button>
			</div>
			<div class="ml-4">
				<button
					type="button"
					on:click|stopPropagation={removeItem}
					class="text-sm font-medium text-oldGrey hover:text-custard-600"
				>
					<span>Remove</span>
				</button>
			</div>
		</div>
	</div>
</li>
