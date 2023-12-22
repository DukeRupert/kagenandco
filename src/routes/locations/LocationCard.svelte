<script lang="ts">
	import type { Location } from '$lib/data/locations';
	export let location: Location;
</script>

<div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
	<enhanced:img
		src={location.image.src}
		alt={location.image.alt}
		class="w-full h-full object-center object-cover group-hover:opacity-75"
	/>
</div>
<div class="flex-1 p-4 flex flex-col">
	<div class="flex-1 flex flex-col space-y-4">
		<h3 class="text-2xl font-medium text-gray-900">
			{location.name}
		</h3>
		<a href={location.locationUrl}>
			<p class="text-base text-gray-600">
				{location.address.line1}
			</p>
			<p class="text-base text-gray-600">{location.address.line2}</p>
		</a>
		<div class="flex flex-col">
			{#each location.hours as hour}
				<p class="text-base text-gray-600">{hour}</p>
			{/each}
		</div>
		<p class="text-base text-gray-800">
			Opening times may vary, please call to check, we always love hearing from you!
		</p>
	</div>
	<div class="flex-1">
		<div class="mt-4 sm:mt-6">
			<a href={location.orderUrl} class="btn variant-filled-primary min-w-[150px]">
				Order Online
			</a>
		</div>
		<div class="mt-4 sm:mt-6">
			<a href={`/menu/tri-cities`} class="btn variant-ringed-primary min-w-[150px]"> View Menu </a>
		</div>
		<div class="mt-4 sm:mt-6">
			<a href={location.locationUrl} class="btn variant-ringed-primary min-w-[150px]">
				Get Directions
			</a>
		</div>
	</div>
</div>
