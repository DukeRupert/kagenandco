<script>
	import { slide, draw } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import { TIMING } from '$lib/constants';
	import { modal, siteData } from '$lib/stores';
	let isNavOpen = false;
	let timing = TIMING;
	const toggleMenu = () => {
		isNavOpen = !isNavOpen;
	};
</script>

<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
	<div class="relative flex justify-between h-20">
		<div class="flex items-center mr-auto md:hidden">
			<!-- Mobile menu button -->
			<button
				type="button"
				class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-highlight"
				aria-controls="mobile-menu"
				aria-expanded="false"
				on:click={toggleMenu}
			>
				<span class="sr-only">Open main menu</span>
				{#if !isNavOpen}
					<svg
						class="h-6 w-6 block"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							in:draw={{ duration: timing, easing: quartOut }}
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
				{#if isNavOpen}
					<svg
						class="h-6 w-6 block"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							in:draw={{ duration: timing, easing: quartOut }}
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{/if}
			</button>
		</div>
		<div class="flex-1 flex items-center justify-center sm:items-stretch md:justify-start">
			<a sveltekit:prefetch href="/" class="flex items-center">
				<!-- max-width: 98% is a hacky fix. SVG gets fuzzy at max-size. Probably should fix svg file itself -->
				<img class="block h-16 w-auto" src="/logoKCC.svg" alt="One Sleep Company logo" />
			</a>
			<div class="hidden md:ml-6 md:flex md:space-x-4">
				<!-- Current: " text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
				<a
					sveltekit:prefetch
					href="/menu/tri-cities"
					class="{$page.path == '/menu/tri-cities' || $page.path == '/menu/spokane'
						? 'current'
						: 'default'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
				>
					Menu
				</a>
				<a
					sveltekit:prefetch
					href="/locations"
					class="{$page.path == '/locations'
						? 'current'
						: 'default'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
				>
					Locations
				</a>
				<a
					sveltekit:prefetch
					href="/about-us"
					class="{$page.path == '/about-us'
						? 'current'
						: 'default'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
				>
					About Us
				</a>
			</div>
		</div>
		<div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
			<a
				href={$siteData.shop}
				class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
			>
				Shop
			</a>
			<button
				on:click={() => modal.set({ active: true, action: 'order' })}
				class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-3xl shadow-sm text-base font-medium text-black bg-custard-500 hover:bg-custard-400"
			>
				Order Online
			</button>
		</div>
	</div>
</div>

<!-- Mobile menu, show/hide based on menu state. -->
{#if isNavOpen}
	<div transition:slide={{ duration: timing, easing: quartOut }} class="md:hidden" id="mobile-menu">
		<div class="pt-2 pb-4 space-y-1">
			<a
				sveltekit:prefetch
				href="/inventory/mattresses"
				class="{$page.path == '/inventory/mattresses'
					? 'mobile-current'
					: 'mobile-default'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Mattresses</a
			>
			<a
				sveltekit:prefetch
				href="/inventory/adjustable-bases"
				class="{$page.path == '/inventory/adjustable-bases'
					? 'mobile-current'
					: 'mobile-default'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>Adjustable Bases</a
			>
			<a
				sveltekit:prefetch
				href="/locations"
				class="{$page.path == '/locations'
					? 'mobile-current'
					: 'mobile-default'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Locations</a
			>
			<a
				sveltekit:prefetch
				href="/about-us"
				class="{$page.path == '/about-us'
					? 'mobile-current'
					: 'mobile-default'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium">About Us</a
			>
		</div>
	</div>
{/if}

<style>
	.default {
		@apply border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700;
	}
	.current {
		@apply text-gray-900;
	}
	.mobile-default {
		@apply border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700;
	}
	.mobile-current {
		@apply bg-indigo-50;
	}
</style>
