<script lang="ts">
	import { navigating } from '$app/stores';
	import { isCartOpen } from '$lib/stores';
	import { fly, fade } from 'svelte/transition';
	import { quadIn, quadOut } from 'svelte/easing';
	import { itemCount } from '$lib/stores';
	import Logo from '$lib/components/Logo.svelte';
	let count = 0;
	$: count = $itemCount;
	let is_mobile_open = false;
	const order_online_href =
		'https://www.toasttab.com/kagen-coffee-crepes-270-williams-blvd/v3/?mode=fulfillment';

	function toggle_mobile_open() {
		is_mobile_open = !is_mobile_open;
	}

	// Close mobile menu when navigation
	$: if ($navigating) {
		is_mobile_open = false;
	}

	// Open Shopping Cart SlideOver
	function openShoppingCart() {
		$isCartOpen = true;
	}

	const top_links = [
		{ title: 'Menu', href: '/menu/tri-cities' },
		{ title: 'Coffee Club', href: '/products/the-rooster' },
		{ title: 'Our Story', href: '/about-us' },
		{ title: 'Locations', href: '/locations' },
		{ title: 'Join Our Team', href: '/join-our-team' },

		{ title: 'Contact Us', href: '/contact-us' }
	];
</script>

<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
	<div class="flex">
		<a href="/" class="-m-1.5 p-1.5">
			<span class="sr-only">Kagen's Coffee and Crepes</span>
			<div class="h-20 w-20">
				<Logo stroke="#000" fill="#000" />
			</div>
		</a>
	</div>
	<div class="flex lg:hidden">
		<button on:click|preventDefault={openShoppingCart} class="btn-icon">
			<span>
				<!-- Heroicon name: outline/shopping-cart -->
				<svg
					class="flex-shrink-0 h-6 w-6 text-gray-700 group-hover:text-gray-900"
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
						d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
			</span>
			{#if count}
				<span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
					>{$itemCount}</span
				>
			{:else}
				<span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">&nbsp;</span>
			{/if}
			<span class="sr-only">items in cart, view bag</span>
		</button>
		<button type="button" on:click={toggle_mobile_open} class="btn-icon">
			<span class="sr-only">Open main menu</span>
			<span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</span>
		</button>
	</div>
	<div class="hidden lg:flex lg:gap-x-12">
		{#each top_links as { title, href }}
			<a {href} class="text-sm font-semibold leading-6 !no-underline !text-token">{title}</a>
		{/each}
	</div>
	<div class="hidden space-x-2 lg:flex lg:justify-end">
		<button on:click|preventDefault={openShoppingCart} class="btn-icon">
			<span>
				<!-- Heroicon name: outline/shopping-cart -->
				<svg
					class="flex-shrink-0 h-6 w-6 text-gray-700 group-hover:text-gray-900"
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
						d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
			</span>
			{#if count}
				<span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{count}</span
				>
			{:else}
				<span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">&nbsp;</span>
			{/if}
			<span class="sr-only">items in cart, view bag</span>
		</button>
		<a href={order_online_href} class="btn variant-filled-primary text-sm font-semibold leading-6"
			>Order Online<span aria-hidden="true">&rarr;</span></a
		>
	</div>
</nav>
<!-- Mobile menu, show/hide based on menu open state. -->
{#if is_mobile_open}
	<div
		transition:fly={{ duration: 300, x: 400, easing: quadOut }}
		class="fixed inset-0 {is_mobile_open
			? 'translate-x-0'
			: 'translate-x-full'} z-50 min-h-screen lg:hidden"
		role="dialog"
		aria-modal="true"
	>
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div
			transition:fade={{ delay: 250, duration: 100, easing: quadOut }}
			class="fixed inset-0 z-50 bg-gray-700/20"
		/>
		<div
			class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="flex items-center justify-between">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">Kagen's Coffee and Crepes</span>
					<div class="h-12 w-12">
						<Logo stroke="#000" fill="#000" />
					</div>
				</a>
				<button
					type="button"
					on:click={toggle_mobile_open}
					class="-m-2.5 rounded-md p-2.5 text-gray-700"
				>
					<span class="sr-only">Close menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-secondary-800/30">
					<div class="space-y-2 py-6">
						{#each top_links as { title, href }}
							<a
								{href}
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 !no-underline !text-tertiary-600"
								>{title}</a
							>
						{/each}
					</div>
					<div class="py-6">
						<a href={order_online_href} class="btn variant-ringed-tertiary !bg-white"
							>Order Online</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
