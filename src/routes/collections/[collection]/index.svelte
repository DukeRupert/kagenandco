<!-- Coffee.svelte -->
<script context="module">
	import { getCollectionByHandle } from '$lib/shopify';

	export async function load({ params }) {
		const { collection } = params;
		console.log(`Query param : ${collection}`);
		await getCollectionByHandle(collection);
		return { props: { collection } };
	}
</script>

<script lang="ts">
	import ProductList from '$lib/components/ProductList.svelte';
	import { products } from '$lib/store';

	export let collection: string;
</script>

<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<div class="bg-white">
	<!-- Breadcrumbs -->
	<div class="border-b border-gray-200">
		<nav aria-label="Breadcrumb" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<ol role="list" class="flex items-center space-x-4 py-4">
				<li>
					<div class="flex items-center">
						<a href="#" class="mr-4 text-sm font-medium text-gray-900"> Men </a>
						<svg
							viewBox="0 0 6 20"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							class="h-5 w-auto text-gray-300"
						>
							<path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
						</svg>
					</div>
				</li>

				<li class="text-sm">
					<a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">
						New Arrivals
					</a>
				</li>
			</ol>
		</nav>
	</div>

	<main class="max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
		<div class="border-b border-gray-200 pt-24 pb-10">
			<h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
				{collection.toUpperCase()}
			</h1>
			<p class="mt-4 text-base text-gray-500">
				Checkout out the latest release of Basic Tees, new and improved with four openings!
			</p>
		</div>

		<div class="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
			<ProductList products={$products} />
		</div>
	</main>
</div>
