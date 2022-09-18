<script lang="ts">
	import { siteData } from '$lib/stores';
</script>

<!--
  This example requires updating your template:

  ```
  <html class="h-full">
  <body class="h-full">
  ```
-->
<div class="min-h-screen pt-16 pb-12 flex flex-col bg-white">
	<main
		class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
	>
		<div class="flex-shrink-0 flex justify-center">
			<a href="/" class="inline-flex">
				<span class="sr-only">{$siteData.title}</span>
				<img class="h-40 w-auto" src="logoKCC.svg" alt="One Sleep Company logo" />
			</a>
		</div>
		<div class="py-16">
			<div class="text-center">
				<p class="text-sm font-semibold text-primary uppercase tracking-wide">Error</p>
				<h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
					Uh oh, Something went wrong.
				</h1>
				<p class="mt-2 text-base text-gray-500">
					We still want to hear from you. Please use the link below to find contact information for
					each location.
				</p>
				<div class="mt-6">
					<a href="/locations" class="text-base font-medium text-primary hover:text-highlight"
						>Locations<span aria-hidden="true"> &rarr;</span></a
					>
				</div>
			</div>
		</div>
	</main>
</div>
