<!-- Individual Coffee Product -->
<script lang="ts">
	import type { PageData } from './$types';
	import type { VariantNode } from '$lib/types/product';
	import Counter from '$lib/components/Counter.svelte';
	import OptionPicker from '$lib/components/OptionPicker.svelte';
	import type { Product, Option } from '$lib/types/product';
	import { cart, cartId, isCartOpen } from '$lib/stores';
	import { addItemToCart, addToCart } from '$lib/shopify';
	import AddSubscriptionToCart from '$lib/shopify/AddSubscriptionToCart';
	import AddItemToCart from '$lib/shopify/AddItemToCart';
	import type { Cart } from '$lib/types/cart';

	interface Choice {
		name: string;
		value: string;
	}

	interface SelectedOptions {
		Size: string;
		Texture: string;
		Type: string;
	}

	export let data: PageData;
	console.log(data);

	// Track active Main Image
	let mainImage = 0;

	// Options
	const options = [...data.options];

	function setDefaults(arr: Option[]): SelectedOptions {
		let object = {};
		arr.forEach((v) => (object[v.name] = v.values[0]));
		return object;
	}

	function updateOptions(choice: Choice, selectedOptions: SelectedOptions) {
		const { name, value } = choice;

		let newOptions = selectedOptions;

		Object.keys(selectedOptions).map((key) => {
			if (key === name) {
				newOptions[key] = value;
			} else {
				newOptions[key] = selectedOptions[key];
			}
		});

		return newOptions;
	}

	// Set default options
	let selectedOptions = setDefaults(options);

	// Refactor variants for easier filtering
	const variants: VariantNode[] = [...data.variants.edges].map((variant) => {
		let obj = Object.assign({}, variant.node);
		obj['id'] = variant.node.id;
		let options = [];
		variant.node.selectedOptions.forEach((element) => {
			options.push(element.value);
		});
		obj['options'] = options;

		return obj;
	});

	// Track active variant, reactively update pricing
	function selectVariant(arr: VariantNode[], options: SelectedOptions): VariantNode {
		const filters: VariantNode[] = Object.values(options);
		let filteredArray = [...arr];

		filters.forEach((el) => {
			filteredArray = filteredArray.filter((v) => v.options.includes(el));
		});

		return filteredArray[0] as VariantNode;
	}

	$: activeVariant = selectVariant(variants, selectedOptions);
	$: price = parseFloat(activeVariant.priceV2.amount);
	$: reduction =
		data.sellingPlanGroups.edges[0].node.sellingPlans.edges[0].node.priceAdjustments[0]
			.adjustmentValue.adjustmentPercentage *
		(price / 100);
	$: subscriptionPrice = price - reduction;

	// Active variant merchandiseId
	$: merchandiseId = activeVariant.id;

	// Track quantity of product to add to cart
	let quantity = 1;
	$: maxQuantity = activeVariant.quantityAvailable;
	const decreaseQuantity = () => (quantity > 1 ? quantity-- : 1);
	const increaseQuantity = () => (quantity < maxQuantity ? quantity++ : quantity);

	// Default to active subscription, change to single purchase by setting sellingPlanId to empty string
	let isSubscription = true;
	const planId = data?.sellingPlanGroups?.edges[0]?.node?.sellingPlans?.edges[0]?.node?.id ?? '';
	$: sellingPlanId = isSubscription ? planId : '';

	// cartId: $cartId,
	// itemId: activeVariant.id,
	// quantity: quantity,
	// sellingPlanId: monthlySubscription

	// cartLinesAdd payload
	let lines = [];

	// Add item to cart
	async function handleClick() {
		// if this is a subscription
		if (sellingPlanId) {
			// Add line
			lines.push({
				merchandiseId,
				quantity,
				sellingPlanId
			});
			// Send mutation to shopify
			const response = await AddSubscriptionToCart($cartId, lines);
			if (response.ok) {
				const newCart: Cart = await response.json();
				// Update cart
				$cart = newCart;
				// Open cart slideOver
				$isCartOpen = true;
				// Reset lines array
				lines = [];
				return;
			}
			const errors = await response.json();
			console.log(JSON.stringify(errors, null, ' '));
			return;
		}

		// Add line
		lines.push({ merchandiseId, quantity });
		const response = await AddItemToCart($cartId, lines);
		if (response.ok) {
			const newCart: Cart = await response.json();
			// Update cart
			$cart = newCart;
			// Open cart slideOver
			$isCartOpen = true;
			// Reset lines array
			lines = [];
			return;
		}
		const errors = await response.json();
		console.log(JSON.stringify(errors, null, ' '));
		return;
	}

	// Update selectedOptions array with user input
	function handleOption(event) {
		const choice = event.detail;

		selectedOptions = updateOptions(choice, selectedOptions);
	}
</script>

<div class="bg-white">
	<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
			<!-- Image gallery -->
			<div class="flex flex-col-reverse">
				<!-- Image selector -->
				<div class="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
					<div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
						{#each data.images.edges as image, index}
							<button
								id="tab-{index}"
								class="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
								aria-controls="tabs-{index}"
								role="tab"
								type="button"
								on:click={() => (mainImage = index)}
							>
								<span class="sr-only"> Angled view </span>
								<span class="absolute inset-0 rounded-md overflow-hidden">
									<img
										src={image.node.url}
										alt={image.node.altText ? image.node.altText : data.title}
										class="w-full h-full object-center object-cover"
									/>
								</span>

								<span
									class="ring-transparent absolute inset-0 rounded-md selection:ring-custard-500 ring-2 ring-offset-2 pointer-events-none"
									aria-hidden="true"
								/>
							</button>
						{/each}
					</div>
				</div>

				<div class="w-full aspect-w-1 aspect-h-1">
					<!-- Tab panel, show/hide based on tab state. -->
					<div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
						<img
							src={data.images.edges[mainImage].node.url}
							alt="Angled front view with bag zipped and handles upright."
							class="w-full h-full object-center object-cover sm:rounded-lg"
						/>
					</div>
				</div>
			</div>
			<!-- Product info -->
			<div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
				<h1 class="text-3xl font-extrabold tracking-tight text-gray-900">
					{data.title}
				</h1>

				<div class="mt-3 flex flex-wrap">
					<h2 class="sr-only">Product information</h2>
					{#if data.totalInventory !== 0}
						<p
							class="text-2xl text-gray-900 mr-4 {isSubscription
								? 'text-gray-500 line-through'
								: ''}"
						>
							${price.toFixed(2)}
						</p>
						{#if isSubscription}
							<p class="text-2xl text-gray-900">
								${subscriptionPrice.toFixed(2)}
							</p>
						{/if}
					{:else}
						<p class="text-2xl text-red-500">Sold Out</p>
					{/if}
				</div>

				<div class="mt-6">
					<h3 class="sr-only">Description</h3>

					<div class="text-base text-gray-700 space-y-6">
						<p>
							{data.description}
						</p>
					</div>
				</div>

				<form class="mt-10 grid grid-cols-2 gap-3 sm:flex-col">
					<label
						class="flex-1 border rounded-md py-3 px-8 flex items-center justify-center text-base font-small text-gray-900 hover:bg-custard-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-custard-500 sm:w-full {isSubscription
							? ''
							: 'bg-oldGrey text-custard-400'}"
					>
						<input
							type="radio"
							name="variant"
							bind:group={isSubscription}
							value={false}
							class="sr-only"
							aria-labelledby="size-choice-0-label"
						/>
						<span id="size-choice-0-label" class="text-center">
							Single purchase - ${price.toFixed(2)}</span
						>
					</label>
					<label
						class="max-w-xs flex-1 border rounded-md py-3 px-8 flex items-center justify-center text-base font-small text-gray-900 hover:bg-custard-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-custard-500 sm:w-full {isSubscription
							? 'bg-oldGrey text-custard-400'
							: ''}"
					>
						<input
							type="radio"
							name="variant"
							bind:group={isSubscription}
							value={true}
							class="sr-only"
							aria-labelledby="size-choice-0-label"
						/>
						<span id="size-choice-0-label" class="text-center">
							Subscribe & Save - ${subscriptionPrice.toFixed(2)}</span
						>
					</label>
				</form>

				<!-- Options -->
				<form class="mt-6">
					{#each options as option}
						<OptionPicker {option} on:option={handleOption} />
					{/each}

					<div class="mt-10 flex flex-col md:flex-row">
						<Counter on:decrement={decreaseQuantity} on:increment={increaseQuantity} {quantity} />
						<button
							type="submit"
							on:click|preventDefault={handleClick}
							disabled={data.totalInventory == 0 ? true : false}
							class="basis-3/4 bg-custard-500 disabled:bg-gray-300 disabled:text-gray-900 border border-transparent rounded-md md:ml-3 mt-3 py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 hover:bg-oldGrey hover:text-custard-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-custard-500 sm:w-full"
						>
							Add to Cart
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
