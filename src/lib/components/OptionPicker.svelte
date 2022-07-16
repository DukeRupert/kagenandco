<script lang="ts">
	import type { Option } from 'src/types/product';
	import { createEventDispatcher } from 'svelte';

	export let option: Option;

	const dispatch = createEventDispatcher();

	const handleClick = (value: string) => {
		dispatch('option', { name: option.name, value: value });
	};

	// Track selection to change css
	let variant = 0;
</script>

<!-- Variant picker -->
<div class="mt-8">
	<div class="flex items-center justify-between">
		<h2 class="text-sm font-medium text-gray-900">{option.name}</h2>
	</div>

	<fieldset class="mt-2">
		<legend class="sr-only">Choose a ${option.name}</legend>
		<div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
			<!--
            In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
            Active: "ring-2 ring-offset-2 ring-custard-500"
            Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
            -->
			<!-- {#each product.variants.edges as { node: { title, quantityAvailable } }, i} -->
			{#each option.values as value, i}
				<!-- content here -->
				<label
					class="border rounded-md py-3 px-3 flex items-center justify-center text-sm font-small text-gray-900 hover:bg-custard-500 hover:text-gray-900 uppercase sm:flex-1 cursor-pointer focus:outline-none {variant ===
					i
						? 'bg-oldGrey border-transparent text-custard-400'
						: ''}"
				>
					<input
						type="radio"
						name="variant"
						on:click={handleClick(value)}
						bind:group={variant}
						value={i}
						class="sr-only"
						aria-labelledby="size-choice-0-label"
					/>
					<span id="size-choice-0-label"> {value} </span>
				</label>
			{/each}
		</div>
	</fieldset>
</div>
