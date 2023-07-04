<script lang="ts">
	import { urlFor } from '$lib/image-url';

	const { location } = portableText.value;
	const { slug, name, image, address, hours, locationUrl, orderUrl, phone } = location;
	const url = urlFor(image.asset).width(500).format('webp').url();
	const alt = image.alt;
</script>

<div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
	<img src={url} {alt} class="w-full h-full object-center object-cover group-hover:opacity-75" />
</div>
<div class="flex-1 p-4 flex flex-col">
	<div class="flex-1 flex flex-col space-y-4">
		<h3 class="text-2xl font-medium text-gray-900">
			{name}
		</h3>
		<a href={locationUrl}>
			<p class="text-base text-gray-600">
				{address.line1}
			</p>
			<p class="text-base text-gray-600">{address.line2}</p>
		</a>
		<div class="flex flex-col">
			{#each hours as hour}
				<p class="text-base text-gray-600">{hour}</p>
			{/each}
		</div>
		<a id="phone" href={`phone: ${phone}`}>
			<p class="text-base text-gray-600">
				{phone}
			</p>
		</a>
		<p class="text-base text-gray-800">
			Opening times may vary, please call to check, we always love hearing from you!
		</p>
	</div>
	<div class="flex-1">
		<div class="mt-4 sm:mt-6">
			<a href={orderUrl} class="btn variant-filled-primary min-w-[150px]"> Order Online </a>
		</div>
		<div class="mt-4 sm:mt-6">
			<a href={`/menu/${slug.current}`} class="btn variant-ringed-primary min-w-[150px]">
				View Menu
			</a>
		</div>
		<div class="mt-4 sm:mt-6">
			<a href={locationUrl} class="btn variant-ringed-primary min-w-[150px]"> Get Directions </a>
		</div>
		<div class="mt-4 sm:mt-6">
			<a href={`phone: ${phone}`} class="btn variant-ringed-primary min-w-[150px]"> Call Us </a>
		</div>
	</div>
</div>
