<script lang="ts">
	import type { Option } from '$lib/types/product';
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
		<h2 class="h2">{option.name}</h2>
	</div>

	<fieldset class="mt-2">
		<legend class="sr-only">Choose a ${option.name}</legend>
		<div class="space-y-2">
			<!-- {#each product.variants.edges as { node: { title, quantityAvailable } }, i} -->
			{#each option.values as value, i}
				<label class="flex items-center space-x-2">
					<input
						type="radio"
						name={option.name}
						on:click={handleClick(value)}
						bind:group={variant}
						value={i}
						class="radio"
						aria-labelledby="size-choice-0-label"
					/>
					<span id="size-choice-0-label"> {value} </span>
				</label>
			{/each}
		</div>
	</fieldset>
</div>
