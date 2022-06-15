<script lang="ts">
	import { navigating } from '$app/stores';
	import { isMobileMenuOpen, activeTopMenu } from '$lib/stores';
	import TopMenuItem from './TopMenuItem.svelte';
	export let count: number;

	// Close navigation menu if navigating
	$: if ($navigating) {
		activeTopMenu.close();
	}

	const coffee = [
		{
			title: 'Coffee',
			links: [{ title: 'The Rooster', href: '/products/the-rooster' }]
		}
	];
	const subscriptions = [{ title: 'coffee', href: '/' }];
	const menu = [
		{ title: 'tri-cities', href: '/menu/tri-cities' },
		{ title: 'spokane', href: '/menu/spokane' }
	];
	const about = [
		{ title: 'Learn More', links: [{ title: 'about us', href: '/about-us' }] },
		{
			title: 'Contact',
			links: [
				{ title: 'contact us', href: '/contact-us' },
				{ title: 'join our team', href: '/join-our-team' }
			]
		}
	];
</script>

<div class="bg-white">
	<header class="fixed w-full z-50 lg:relative">
		<nav aria-label="Top">
			<!-- Top navigation -->
			<div class="bg-gray-900">
				<div class="max-w-7xl mx-auto h-10 px-4 flex items-center justify-center sm:px-6 lg:px-8">
					<p class="flex-1 text-center text-sm font-medium text-white">
						Get free delivery on orders over $100
					</p>

					<div class="hidden lg:flex lg:flex-shrink lg:items-center lg:justify-end lg:space-x-6">
						<a href="/login" class="text-sm font-medium text-white hover:text-gray-100">Sign in</a>
					</div>
				</div>
			</div>

			<!-- Secondary navigation -->
			<div class="bg-white">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="border-b border-gray-200">
						<div class="h-24 flex items-center justify-between">
							<!-- Logo (lg+) -->
							<div class="hidden lg:flex lg:items-center">
								<a href="/">
									<span class="sr-only">Kagen's Coffee and Crepes</span>
									<img
										class="h-20 w-auto"
										src="/logoKCC.svg"
										alt="Kagen's Coffee and Crepes Rooster logo"
									/>
								</a>
							</div>

							<div class="hidden z-1 h-full lg:flex">
								<!-- Mega menus -->
								<div class="ml-8">
									<div class="h-full flex justify-center space-x-8">
										<TopMenuItem title="Coffee" subItems={coffee} />
										<TopMenuItem title="About" subItems={about} />

										<a
											href="/locations"
											class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
											>Locations</a
										>
									</div>
								</div>
							</div>

							<!-- Mobile menu and search (lg-) -->
							<div class="flex-1 flex items-center lg:hidden">
								<!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
								<button
									type="button"
									on:click={() => isMobileMenuOpen.update((v) => (v = !v))}
									class="-ml-2 bg-white p-2 rounded-md text-gray-400"
								>
									<span class="sr-only">Open menu</span>
									<!-- Heroicon name: outline/menu -->
									<svg
										class="h-6 w-6"
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
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</button>
							</div>

							<!-- Logo (lg-) -->
							<a href="/" class="lg:hidden">
								<span class="sr-only">Kagen's Coffee and Crepes</span>
								<img
									src="/logoKCC.svg"
									alt="Kagen's Coffee and Crepes Rooster logo"
									class="h-20 w-auto"
								/>
							</a>

							<div class="flex-1 flex items-center justify-end">
								<div class="flex items-center lg:ml-8">
									<div class="flex space-x-8">
										<div class="flex">
											<a href="#" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
												<span class="sr-only">Account</span>
												<!-- Heroicon name: outline/user -->
												<svg
													class="w-6 h-6"
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
														d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
													/>
												</svg>
											</a>
										</div>
									</div>

									<span class="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

									<div class="flow-root">
										<a href="/cart" class="group -m-2 p-2 flex items-center">
											<!-- Heroicon name: outline/shopping-cart -->
											<svg
												class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
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
											{#if count}
												<span
													class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
													>{count}</span
												>
											{:else}
												<span
													class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
													>&nbsp;</span
												>
											{/if}
											<span class="sr-only">items in cart, view bag</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<slot />
		</nav>
	</header>
</div>
