<!-- src/lib/components/nav/MobileMenuItem.svelte -->
<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';
	export let timing = 300;
	export let title = '';
	export let href = '';
	export let subItems = [];
	let toggle = false;
</script>

<div class="grid grid-cols-1 gap-y-10 gap-x-6">
	<div>
		<div class="flex">
			<a {href} class="font-medium text-xl text-gray-900">
				{title.toUpperCase()}
			</a>
			{#if subItems.length > 0}
				<span on:click={() => (toggle = !toggle)} class="ml-auto mr-2">
					<!-- plus -->
					<svg
						class="h-6 w-6 text-gray-900"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<line
							x1="12"
							y1="5"
							x2="12"
							y2="19"
							class="transition-transform duration-300 ease-linear transform origin-center {toggle
								? 'rotate-90'
								: 'rotate-0'}"
						/>
						<line x1="5" y1="12" x2="19" y2="12" /></svg
					>
				</span>
			{/if}
		</div>
		{#if toggle}
			<ul
				aria-labelledby="mobile-featured-heading-0"
				class="mt-6 pl-4 space-y-6"
				transition:slide={{ duration: timing, easing: quartOut }}
			>
				{#each subItems as { title, href }}
					<li class="flex">
						<a sveltekit:prefetch {href} class="text-gray-500"> {title.toUpperCase()} </a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
