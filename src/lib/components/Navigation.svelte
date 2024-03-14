<script lang="ts">
	import { SITE_DATA } from '$lib/constants';
	import { navigating } from '$app/stores';
	import Logo from '$lib/components/Logo.svelte';
	import { MenuIcon } from 'lucide-svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button/index.js';

	let is_mobile_open = false;

	// Reactive functions
	$: if ($navigating) {
		is_mobile_open = false; // Close mobile menu when navigation
	}
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
		<Sheet.Root bind:open={is_mobile_open}>
			<Sheet.Trigger asChild let:builder>
				<Button builders={[builder]} variant="outline">
					<span class="sr-only">Open navigation menu</span>
					<MenuIcon class="h-6 w-6" /></Button
				>
			</Sheet.Trigger>
			<Sheet.Content side="right">
				<Sheet.Header>
					<Sheet.Title>Navigation</Sheet.Title>
				</Sheet.Header>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-secondary-800/30">
						<div class="space-y-2 py-6">
							<a href="/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
								>Home</a
							>
							{#each SITE_DATA.routes as { title, href }}
								<a {href} class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
									>{title}</a
								>
							{/each}
						</div>
						<div class="py-6">
							<Button variant="default" href={SITE_DATA.online_order_url}>Order online</Button>
						</div>
					</div>
				</div>
			</Sheet.Content>
		</Sheet.Root>
	</div>
	<div class="hidden lg:flex lg:gap-x-12">
		{#each SITE_DATA.routes as { title, href }}
			<a {href} class="text-sm font-semibold leading-6">{title}</a>
		{/each}
	</div>
	<div class="hidden space-x-2 lg:flex lg:justify-end">
		<Button variant="default" href={SITE_DATA.online_order_url}>Order online</Button>
	</div>
</nav>
