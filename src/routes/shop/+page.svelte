<!-- Coffee.svelte -->
<script lang="ts">
	import ProductList from './ProductList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	// $: ({ edges } = data);
	const { edges } = data;
</script>

<div class="bg-white">
	<main class="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
		<div class="border-b border-gray-200 pt-24 pb-10">
			<h1 class="text-4xl font-extrabold tracking-tight text-gray-900">Shop</h1>
			<p class="mt-4 text-base text-gray-500">
				Enjoy our coffee from the comfort of your own home today!
			</p>
		</div>

		<div class="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
			<ProductList data={edges} />
		</div>
	</main>
</div>
