<script lang="ts">
	export let portableText;
	import { urlFor } from '$lib/image-url';
	const { location } = portableText.block;
	const { name, address, hours, locationUrl, orderUrl, phone } = location;
	const url = urlFor(location.image.asset).width(500).format('webp').url();
	const alt = location.image.alt;
	const slug = location.slug.current;
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
			<a
				href={orderUrl}
				class="inline-flex justify-center w-full rounded-3xl border border-transparent shadow-sm px-4 py-2 lg:py-4 bg-custard-500 text-base font-medium text-black hover:bg-custard-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custard-300 sm:text-sm"
			>
				Order Online
			</a>
		</div>
		<div class="mt-4 sm:mt-6">
			<a
				href={`/menu/${slug}`}
				class="inline-flex justify-center w-full rounded-3xl border border-custard-500 shadow-sm px-4 py-2 lg:py-4 bg-custard-white text-base font-medium text-black hover:bg-custard-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custard-300 sm:text-sm"
			>
				View Menu
			</a>
		</div>
		<div class="mt-4 sm:mt-6">
			<a
				href={locationUrl}
				class="inline-flex justify-center w-full rounded-3xl border border-custard-500 shadow-sm px-4 py-2 lg:py-4 bg-custard-white text-base font-medium text-black hover:bg-custard-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custard-300 sm:text-sm"
			>
				Get Directions
			</a>
		</div>
		<div class="mt-4 sm:mt-6">
			<a
				href={`phone: ${phone}`}
				class="inline-flex justify-center w-full rounded-3xl border border-custard-500 shadow-sm px-4 py-2 lg:py-4 bg-custard-white text-base font-medium text-black hover:bg-custard-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custard-300 sm:text-sm"
			>
				Call Us
			</a>
		</div>
	</div>
</div>
