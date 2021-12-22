<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';
	import { TIMING } from '$lib/constants';
	import { siteData } from '$lib/stores';
	let timing = TIMING;
	let data = {
		longMessage: 'Merry Christmas! We have gift cards, and only gift cards',
		shortMessage: 'Gift Cards!',
		actionLabel: 'Shop Now',
		url: $siteData.shop
	};
	let show = true;
	const hideBanner = () => {
		show = !show;
	};
</script>

{#if show}
	<div
		out:slide={{ duration: timing, easing: quartOut }}
		class="relative max-w-7xl mx-auto sm:px-6 lg:px-8"
	>
		<div class="bg-red-900 mx-auto py-3 px-3 sm:px-6 lg:px-8">
			<div class="pr-8 text-center sm:px-16">
				<p class="font-medium text-white">
					<span class="md:hidden"> {data.shortMessage} </span>
					<span class="hidden md:inline">
						{data.longMessage}
					</span>
					<span class="inline-block sm:ml-2 sm:inline-block">
						<a href={data.url} class="text-white font-bold underline">
							{data.actionLabel} <span aria-hidden="true">&rarr;</span></a
						>
					</span>
				</p>
			</div>
			<div
				class="absolute inset-y-0 right-10 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start"
			>
				<button
					type="button"
					class="flex p-2 rounded-md hover:bg-highlight focus:outline-none focus:ring-2 focus:ring-white"
					on:click={hideBanner}
				>
					<span class="sr-only">Dismiss</span>
					<!-- Heroicon name: outline/x -->
					<svg
						class="h-6 w-6 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
{/if}
