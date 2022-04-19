<script lang="ts">
	export let portableText;
	import { urlFor } from '$lib/image-url';
	const { name, price, ingredients, image } = portableText.block;
	const url = urlFor(image.asset).format('webp').width(400).height(400).url();
	const alt = image.alt;
</script>

<div class="group relative">
	<div
		class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
	>
		<img src={url} {alt} class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
	</div>
	<div class="mt-4 flex justify-between">
		<div>
			<h3 class="text-lg text-gray-900">
				<span aria-hidden="true" class="absolute inset-0" />
				{name}
			</h3>
		</div>
		<div>
			<p class="text-sm font-medium text-gray-500">Full: ${price.full}</p>
			<p class="text-sm font-medium text-gray-500">Mini: ${price.mini}</p>
		</div>
	</div>
</div>
