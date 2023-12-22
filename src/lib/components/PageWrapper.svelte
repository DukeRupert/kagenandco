<script lang="ts">
	export let title = '';
	export let eyebrow = '';
	export let description = '';
</script>

<div class="bg-white px-6 pt-16 pb-32 lg:px-8">
	{#if title}
		<div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
			{#if eyebrow}
				<p class="text-base font-semibold leading-7 text-primary-600">{eyebrow}</p>
			{/if}
			<h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				{title}
			</h1>
			{#if description}
				<p class="mt-6 text-xl leading-8">
					{description}
				</p>{/if}
		</div>
	{/if}
	<slot />
</div>
