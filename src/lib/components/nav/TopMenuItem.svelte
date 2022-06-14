<!-- lib/components/nav/TopMenuItem.svelte -->
<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { activeTopMenu } from '$lib/stores';

	export let title = 'Fix Me';
	export let subItems = [
		{
			title: 'Coffee',
			links: [
				{ title: 'The Rooster', href: '/collections/coffee/products/the rooster' },
				{ title: '2 lb', href: '#' }
			]
		}
	];

	function toggleActive() {
		if ($activeTopMenu === title) {
			activeTopMenu.set('');
			return;
		}
		activeTopMenu.set(title);
	}
</script>

<div class="flex">
	<div class="relative flex">
		<!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
		<button
			on:click={toggleActive}
			type="button"
			class="focus:border-custard-600 focus:text-custard-600 border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
			aria-expanded="false">{title}</button
		>
	</div>

	{#if $activeTopMenu === title}
		<div
			class="absolute top-full inset-x-0 text-gray-500 sm:text-sm"
			transition:slide={{ delay: 250, duration: 300, easing: quintOut }}
		>
			<!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
			<div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

			<div class="relative bg-white">
				<div class="max-w-7xl mx-auto px-8">
					<div class="grid grid-cols-4 items-start gap-y-10 gap-x-8 pt-10 pb-12">
						<!-- <div class="grid grid-cols-3 gap-y-10 gap-x-8"> -->
						<div class="flex flex-col items-center">
							<img class="h-40 mx-auto" src="/logoRooster.svg" alt="Kagen rooster logo" />
							<a
								href="/"
								class="inline-flex justify-center mt-2 w-40 rounded-3xl border border-custard-500 bg-custard-500 shadow-sm px-4 py-2 bg-custard-white text-base font-medium text-coffee hover:bg-custard-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custard-300 sm:text-sm"
							>
								Join The Club
							</a>
						</div>
						{#each subItems as item}
							<div>
								<a
									href="/collections/{item.title}"
									id="desktop-categories-heading"
									class="font-medium text-gray-900"
								>
									{item.title}
								</a>
								<ul
									role="list"
									aria-labelledby="desktop-categories-heading"
									class="mt-6 ml-4 space-y-6 sm:mt-4 sm:space-y-4"
								>
									{#each item.links as { title, href }}
										<!-- content here -->
										<li class="flex">
											<a {href} class="hover:text-gray-800">{title}</a>
										</li>
									{/each}
								</ul>
							</div>
						{/each}
						<!-- </div> -->
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
