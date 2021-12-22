<script lang="ts">
	export let name;
	export let url;
	export let alt;
	export let address;
	export let hours;
	export let locationUrl;
	export let orderUrl;
	export let tel;
	export let slug;
</script>

<div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
	<img src={url} {alt} class="w-full h-full object-center object-cover group-hover:opacity-75" />
</div>
<div class="flex-1 p-4 space-y-2 flex flex-col">
	<h3 class="text-2xl font-medium text-gray-900">
		{name}
	</h3>
	<a href={locationUrl}>
		<p class="text-base text-gray-600">
			{address.line1}
		</p>
		<p class="text-base text-gray-600">{address.line2}</p>
	</a>
	<div class="flex-1 flex flex-col justify-end">
		{#each hours as hour}
			<p class="text-base text-gray-600">{hour}</p>
		{/each}
	</div>
	<a id="phone" href={`tel: ${tel}`}>
		<p class="text-base text-gray-600">
			{tel}
		</p>
	</a>
	<p class="text-base text-gray-800">
		Opening times may vary, please call to check, we always love hearing from you!
	</p>
</div>
<div class="mt-4 sm:mt-6">
	<a
		href={orderUrl}
		class="inline-flex justify-center w-full rounded-3xl border border-transparent shadow-sm px-4 py-2 bg-custard-500 text-base font-medium text-black hover:bg-custard-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custard-300 sm:text-sm"
	>
		Order Online
	</a>
</div>
<div class="mt-4 sm:mt-6">
	<a
		href={locationUrl}
		class="inline-flex justify-center w-full rounded-3xl border border-custard-500 shadow-sm px-4 py-2 bg-custard-white text-base font-medium text-black hover:bg-custard-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custard-300 sm:text-sm"
	>
		View on Map
	</a>
</div>
<div class="mt-4 sm:mt-6">
	<a
		href={`tel: ${tel}`}
		class="inline-flex justify-center w-full rounded-3xl border border-custard-500 shadow-sm px-4 py-2 bg-custard-white text-base font-medium text-black hover:bg-custard-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custard-300 sm:text-sm"
	>
		Call Us
	</a>
</div>
