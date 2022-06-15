<!-- Individual Coffee Product -->
<script context="module">
	//** @type {import('./[handle]').Load} */
	import { getProductByHandle } from '$lib/shopify';

	export async function load({ params }) {
		const { handle } = params;
		await getProductByHandle(handle);
		return { props: {} };
	}
</script>

<script lang="ts">
	import Counter from '$lib/components/Counter.svelte';
	import { productDetails } from '$lib/store';

	// Track active Main Image
	let mainImage = 0;

	// Track active variant, reactively update pricing
	let variant = 0;
	$: price = parseFloat($productDetails.variants.edges[variant].node.price);
	$: reduction =
		$productDetails.sellingPlanGroups.edges[0].node.sellingPlans.edges[0].node.priceAdjustments[0]
			.adjustmentValue.adjustmentPercentage *
		(price / 100);
	$: subscribePrice = price - reduction;

	// Track quantity of product to add to cart
	let quantity = 0;
	function decreaseQuantity() {
		if (quantity > 0) {
			return quantity--;
		}
		return 0;
	}
	function increaseQuantity() {
		return quantity++;
	}

	// Default to active subscription, change to single purchase by setting sellingPlanId to empty string
	let type = 1;
	let sellingPlanId = $productDetails.sellingPlanGroups.edges[0].node.sellingPlans.edges[0].node.id;

	$: if (type === 0) {
		sellingPlanId = '';
	}

	$: if (type === 1) {
		sellingPlanId = $productDetails.sellingPlanGroups.edges[0].node.sellingPlans.edges[0].node.id;
	}

	// Cart operations
	let selectedProduct = $productDetails.variants.edges[0].node.id;
	const addToCart = async () => {
		// add selected product to cart
		try {
			const addToCartResponse = await fetch('/api/utils/addToCart', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					cartId: localStorage.getItem('cartId'),
					itemId: selectedProduct,
					quantity: quantity,
					sellingPlanId: sellingPlanId
				})
			});
			const data = await addToCartResponse.json();
			// save cart to localStorage
			localStorage.setItem('cartId', data.id);
			localStorage.setItem('cart', JSON.stringify(data));
			location.reload();
		} catch (e) {
			console.log(e);
		}
	};
</script>

<div class="bg-white">
	<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
			<!-- Image gallery -->
			<div class="flex flex-col-reverse">
				<!-- Image selector -->
				<div class="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
					<div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
						{#each $productDetails.images.edges as image, index}
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
										alt={image.node.altText ? image.node.altText : $productDetails.title}
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
							src={$productDetails.images.edges[mainImage].node.url}
							alt="Angled front view with bag zipped and handles upright."
							class="w-full h-full object-center object-cover sm:rounded-lg"
						/>
					</div>
				</div>
			</div>
			<!-- Product info -->
			<div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
				<h1 class="text-3xl font-extrabold tracking-tight text-gray-900">
					{$productDetails.title}
				</h1>

				<div class="mt-3">
					<h2 class="sr-only">Product information</h2>
					<p class="text-3xl text-gray-900">
						${$productDetails.variants.edges[variant].node.price}
					</p>
				</div>

				<div class="mt-6">
					<h3 class="sr-only">Description</h3>

					<div class="text-base text-gray-700 space-y-6">
						<p>
							{$productDetails.description}
						</p>
					</div>
				</div>

				<form class="mt-10 grid grid-cols-2 gap-3 sm:flex-col">
					<label
						class="flex-1 border rounded-md py-3 px-8 flex items-center justify-center text-base font-small text-gray-900 hover:bg-custard-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-custard-500 sm:w-full {type ===
						0
							? 'bg-oldGrey text-custard-400'
							: ''}"
					>
						<input
							type="radio"
							name="variant"
							bind:group={type}
							value={0}
							class="sr-only"
							aria-labelledby="size-choice-0-label"
						/>
						<span id="size-choice-0-label" class="text-center">
							Single purchase - ${price.toFixed(2)}</span
						>
					</label>
					<label
						class="max-w-xs flex-1 border rounded-md py-3 px-8 flex items-center justify-center text-base font-small text-gray-900 hover:bg-custard-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-custard-500 sm:w-full {type ===
						1
							? 'bg-oldGrey text-custard-400'
							: ''}"
					>
						<input
							type="radio"
							name="variant"
							bind:group={type}
							value={1}
							class="sr-only"
							aria-labelledby="size-choice-0-label"
						/>
						<span id="size-choice-0-label" class="text-center">
							Subscribe & Save - ${subscribePrice.toFixed(2)}</span
						>
					</label>
				</form>

				<form class="mt-6">
					{#if $productDetails.variants.edges.length > 0}
						<!-- Variant picker -->
						<div class="mt-8">
							<div class="flex items-center justify-between">
								<h2 class="text-sm font-medium text-gray-900">Size</h2>
							</div>

							<fieldset class="mt-2">
								<legend class="sr-only">Choose a size</legend>
								<div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
									<!--
                    In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                    Active: "ring-2 ring-offset-2 ring-custard-500"
                    Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                  -->
									{#each $productDetails.variants.edges as { node: { id, title, price } }, i}
										<label
											class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium text-gray-900 hover:bg-custard-500 hover:text-gray-900 uppercase sm:flex-1 cursor-pointer focus:outline-none {variant ===
											i
												? 'bg-oldGrey border-transparent text-custard-400'
												: ''}"
										>
											<input
												type="radio"
												name="variant"
												bind:group={variant}
												value={i}
												class="sr-only"
												aria-labelledby="size-choice-0-label"
											/>
											<span id="size-choice-0-label"> {title} </span>
										</label>
									{/each}
								</div>
							</fieldset>
						</div>
					{/if}

					<div class="mt-10 flex flex-col md:flex-row">
						<Counter on:decrement={decreaseQuantity} on:increment={increaseQuantity} {quantity} />
						<button
							type="submit"
							on:click|preventDefault={addToCart}
							class="basis-3/4 bg-oldGrey border border-transparent rounded-md md:ml-3 mt-3 py-3 px-8 flex items-center justify-center text-base font-medium text-custard-400 hover:bg-custard-500 hover:text-oldGrey focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-custard-500 sm:w-full"
							>Add to cart</button
						>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
