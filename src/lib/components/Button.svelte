<script lang="ts">
	export let label;
	export let action: Function;
</script>

<button
	type="submit"
	on:click|preventDefault={action}
	class="basis-3/4 bg-custard-500 border border-transparent rounded-md md:ml-3 mt-3 py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 hover:bg-oldGrey hover:text-custard-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-custard-500 sm:w-full"
	>{label}</button
>
