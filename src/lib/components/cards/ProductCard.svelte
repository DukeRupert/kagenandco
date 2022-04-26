<script lang="ts">
	import type { ProductType } from 'src/types/product';
	import { productDetails } from '$lib/store';
	import { price } from '$lib/utils';

	export let product: ProductType;
	const { url, altText } = product.images.edges[0].node;
	const { title, description, handle } = product;
	const { amount } = product.priceRange.maxVariantPrice;

	export let collection = 'coffee';
</script>

<div
	class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
>
	<div class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
		<img
			src={url}
			alt={altText ? altText : title}
			class="w-full h-full object-center object-cover sm:w-full sm:h-full"
		/>
	</div>
	<div class="flex-1 p-4 space-y-2 flex flex-col">
		<h3 class="text-sm font-medium text-gray-900">
			<a href="/collections/{collection}/products/{handle}">
				<span aria-hidden="true" class="absolute inset-0" />
				{$productDetails.title}
			</a>
		</h3>
		<p class="text-sm text-gray-500">
			{description}
		</p>
		<div class="flex-1 flex flex-col justify-end">
			<p class="text-base font-medium text-gray-900">
				{price(parseFloat(amount))}
			</p>
		</div>
	</div>
</div>
