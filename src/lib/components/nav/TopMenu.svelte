<script lang="ts">
	import { isMobileMenuOpen } from '$lib/stores';
	export let count: number;
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
						<a href="#" class="text-sm font-medium text-white hover:text-gray-100">Sign in</a>
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

							<div class="hidden h-full lg:flex">
								<!-- Mega menus -->
								<div class="ml-8">
									<div class="h-full flex justify-center space-x-8">
										<div class="flex">
											<div class="relative flex">
												<!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
												<button
													type="button"
													class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
													aria-expanded="false">Women</button
												>
											</div>

											<!--
                        'Women' mega menu, show/hide based on flyout menu state.

                        Entering: "transition ease-out duration-200"
                          From: "opacity-0"
                          To: "opacity-100"
                        Leaving: "transition ease-in duration-150"
                          From: "opacity-100"
                          To: "opacity-0"
                      -->
											<div class="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
												<!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
												<div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

												<div class="relative bg-white">
													<div class="max-w-7xl mx-auto px-8">
														<div class="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
															<div class="grid grid-cols-2 gap-y-10 gap-x-8">
																<div>
																	<p
																		id="desktop-featured-heading-0"
																		class="font-medium text-gray-900"
																	>
																		Featured
																	</p>
																	<ul
																		role="list"
																		aria-labelledby="desktop-featured-heading-0"
																		class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																	>
																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Sleep </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Swimwear </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Underwear </a>
																		</li>
																	</ul>
																</div>
																<div>
																	<p
																		id="desktop-categories-heading"
																		class="font-medium text-gray-900"
																	>
																		Categories
																	</p>
																	<ul
																		role="list"
																		aria-labelledby="desktop-categories-heading"
																		class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																	>
																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Basic Tees </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Artwork Tees </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Bottoms </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Underwear </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Accessories </a>
																		</li>
																	</ul>
																</div>
															</div>
															<div class="grid grid-cols-2 gap-y-10 gap-x-8">
																<div>
																	<p
																		id="desktop-collection-heading"
																		class="font-medium text-gray-900"
																	>
																		Collection
																	</p>
																	<ul
																		role="list"
																		aria-labelledby="desktop-collection-heading"
																		class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																	>
																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Everything </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Core </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> New Arrivals </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Sale </a>
																		</li>
																	</ul>
																</div>

																<div>
																	<p id="desktop-brand-heading" class="font-medium text-gray-900">
																		Brands
																	</p>
																	<ul
																		role="list"
																		aria-labelledby="desktop-brand-heading"
																		class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																	>
																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Full Nelson </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> My Way </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Re-Arranged </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Counterfeit </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800">
																				Significant Other
																			</a>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div class="flex">
											<div class="relative flex">
												<!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
												<button
													type="button"
													class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
													aria-expanded="false">Men</button
												>
											</div>

											<!--
                        'Men' mega menu, show/hide based on flyout menu state.

                        Entering: "transition ease-out duration-200"
                          From: "opacity-0"
                          To: "opacity-100"
                        Leaving: "transition ease-in duration-150"
                          From: "opacity-100"
                          To: "opacity-0"
                      -->
											<div class="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
												<!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
												<div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

												<div class="relative bg-white">
													<div class="max-w-7xl mx-auto px-8">
														<div class="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
															<div class="grid grid-cols-2 gap-y-10 gap-x-8">
																<div>
																	<p
																		id="desktop-featured-heading-1"
																		class="font-medium text-gray-900"
																	>
																		Featured
																	</p>
																	<ul
																		role="list"
																		aria-labelledby="desktop-featured-heading-1"
																		class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																	>
																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Casual </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Boxers </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Outdoor </a>
																		</li>
																	</ul>
																</div>
																<div>
																	<p
																		id="desktop-categories-heading"
																		class="font-medium text-gray-900"
																	>
																		Categories
																	</p>
																	<ul
																		role="list"
																		aria-labelledby="desktop-categories-heading"
																		class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																	>
																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Artwork Tees </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Pants </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Accessories </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Boxers </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Basic Tees </a>
																		</li>
																	</ul>
																</div>
															</div>
															<div class="grid grid-cols-2 gap-y-10 gap-x-8">
																<div>
																	<p
																		id="desktop-collection-heading"
																		class="font-medium text-gray-900"
																	>
																		Collection
																	</p>
																	<ul
																		role="list"
																		aria-labelledby="desktop-collection-heading"
																		class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																	>
																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Everything </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Core </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> New Arrivals </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Sale </a>
																		</li>
																	</ul>
																</div>

																<div>
																	<p id="desktop-brand-heading" class="font-medium text-gray-900">
																		Brands
																	</p>
																	<ul
																		role="list"
																		aria-labelledby="desktop-brand-heading"
																		class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																	>
																		<li class="flex">
																			<a href="#" class="hover:text-gray-800">
																				Significant Other
																			</a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> My Way </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Counterfeit </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Re-Arranged </a>
																		</li>

																		<li class="flex">
																			<a href="#" class="hover:text-gray-800"> Full Nelson </a>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

										<a
											href="#"
											class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
											>Company</a
										>

										<a
											href="#"
											class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
											>Stores</a
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
										<a href="#" class="group -m-2 p-2 flex items-center">
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
