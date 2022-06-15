<script lang="ts">
	import ProductCard from './cards/ProductCard.svelte';
	export let products;
	export let heading = 'Products';
</script>

<section aria-labelledby="product-heading" class="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
	<h2 id="product-heading" class="sr-only">{heading}</h2>

	<div
		class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3"
	>
		{#each products as product}
			<ProductCard product={product.node} />
		{/each}
	</div>
</section>
