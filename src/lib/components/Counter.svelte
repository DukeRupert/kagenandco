<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let quantity;

	const dispatch = createEventDispatcher();

	function incrementQuantity() {
		dispatch('increment');
	}

	function decrementQuantity() {
		dispatch('decrement');
	}
</script>

<div
	class="basis-1/2 border rounded-md mt-3 flex items-center justify-center text-base font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-custard-500 sm:w-full"
>
	<button on:click|preventDefault|stopPropagation={decrementQuantity} class="basis-1/3 h-full py-3">
		-
	</button>
	<p class="basis-1/3 h-full flex justify-center items-center text-center">{quantity}</p>
	<button on:click|preventDefault|stopPropagation={incrementQuantity} class="basis-1/3 h-full py-3">
		+
	</button>
</div>
