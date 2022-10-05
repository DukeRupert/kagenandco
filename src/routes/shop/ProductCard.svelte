<script lang="ts">
	import type { ProductsEdge } from '$lib/types/mutationProductCard';
	import { price } from '$lib/utils';

	export let product: ProductsEdge;

	const { url, altText } = product.node.images.edges[0].node;
	const { title, description, handle } = product.node;
	const { amount } = product.node.priceRange.minVariantPrice;
</script>

<a class="flex" href="/products/{handle}">
	<div
		class="group h-full relative bg-white border border-gray-200 hover:border-custard-500 hover:border-spacing-2 rounded-lg flex flex-col overflow-hidden"
	>
		<span
			class="invisible group-hover:visible flex justify-center items-center absolute w-full h-full inset-0"
		>
			<a href="/products/{handle}" class="btn-primary"> Shop Now </a>
		</span>
		<div class="relative aspect-w-3 aspect-h-4 sm:aspect-none sm:h-80">
			<img
				src={url}
				alt={altText ? altText : title}
				class="w-full h-full object-center object-cover sm:w-full sm:h-full"
			/>
		</div>
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
			<p class="flex-1 text-sm line-clamp-4 text-gray-500">
				{description}
			</p>
		</div>
	</div>
</a>
