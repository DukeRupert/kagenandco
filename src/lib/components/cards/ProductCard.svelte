<script lang="ts">
	import type { ProductType } from 'src/types/product';

	export let product: ProductType;
	export let collection = '';
</script>

<div
	class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
>
	<div class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
		<img
			src={product.images.edges[0].node.url}
			alt={product.images.edges[0].node.altText
				? product.images.edges[0].node.altText
				: product.title}
			class="w-full h-full object-center object-cover sm:w-full sm:h-full"
		/>
	</div>
	<div class="flex-1 p-4 space-y-2 flex flex-col">
		<h3 class="text-sm font-medium text-gray-900">
			<a href="/collections/{collection}/products/{product.handle}">
				<span aria-hidden="true" class="absolute inset-0" />
				{product.title}
			</a>
		</h3>
		<p class="text-sm text-gray-500">
			{product.description}
		</p>
		<div class="flex-1 flex flex-col justify-end">
			<p class="text-base font-medium text-gray-900">
				${product.priceRange.maxVariantPrice.amount}
			</p>
		</div>
	</div>
</div>
