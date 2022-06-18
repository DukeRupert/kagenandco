<script lang="ts">
	import type { Product } from 'src/types/product';
	import { price } from '$lib/utils';

	export let product: Product;

	const { url, altText } = product.images.edges[0].node;
	const { title, description, handle } = product;
	const { amount } = product.priceRange.minVariantPrice;

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
					itemId: product.variants.edges[0].node.id,
					quantity: 1,
					sellingPlanId: ''
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

<div
	class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
>
	<a href="/products/{handle}">
		<div class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-80">
			<img
				src={url}
				alt={altText ? altText : title}
				class="w-full h-full object-center object-cover sm:w-full sm:h-full"
			/>
		</div>
	</a>
	<div class="flex-1 p-4 space-y-4 flex flex-col">
		<div class="flex justify-start">
			<h3 class="text-medium font-medium text-gray-900">
				<span aria-hidden="true" class="absolute inset-0 -z-10" />
				{title}
			</h3>
			<h3 class="ml-auto text-base font-medium text-gray-900">
				{price(parseFloat(amount))}
			</h3>
		</div>
		<p class="text-sm text-gray-500">
			{description}
		</p>
		<div class="mt-10 flex items-center justify-center">
			<button
				type="submit"
				on:click|preventDefault={addToCart}
				class="basis-3/4 bg-oldGrey border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-custard-400 hover:bg-custard-500 hover:text-oldGrey focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-custard-500 sm:w-full"
				>Add to cart</button
			>
		</div>
	</div>
</div>
