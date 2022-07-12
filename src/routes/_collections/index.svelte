<!-- Coffee.svelte -->
<script context="module">
	import { getProducts } from '$lib/shopify';

	export async function load() {
		await getProducts();
		return { props: {} };
	}
</script>

<script lang="ts">
	import { products } from '$lib/stores';
	import ProductList from '$lib/components/ProductList.svelte';
</script>

<div class="bg-white">
	<main class="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
		<div class="border-b border-gray-200 pt-24 pb-10">
			<h1 class="text-4xl font-extrabold tracking-tight text-gray-900">ALL PRODUCTS</h1>
			<!-- <p class="mt-4 text-base text-gray-500">
				Checkout out the latest release of Basic Tees, new and improved with four openings!
			</p> -->
		</div>

		<div class="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
			<ProductList products={$products} />
		</div>
	</main>
</div>
