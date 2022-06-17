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
	class="basis-1/4 border rounded-md mt-3 py-3 flex items-center justify-center text-base font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
>
	<button on:click|preventDefault={decrementQuantity} class="basis-1/4 h-full"> - </button>
	<p class="basis-1/2 h-full flex justify-center items-center text-center">{quantity}</p>
	<button on:click|preventDefault={incrementQuantity} class="basis-1/4 h-full"> + </button>
</div>
