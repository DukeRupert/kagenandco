<script lang="ts">
	import type { PageData } from './$types';
	import type { Crepe } from '$lib/types/menu';
	import type { FlipParams } from 'svelte/animate';
	import { flip } from 'svelte/animate';
	import { quadOut } from 'svelte/easing';
	import Seo from '$lib/components/SEO.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';

	export let data: PageData;
	$: ({ crepes, type } = data);
	let is_modal_active = false;
	let active_crepe: Crepe;

	const flip_params: FlipParams = {
		duration: 500,
		easing: quadOut
	}

	const toggle_modal = (event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) => {
		// Get id of crepe
		const target = event.target as HTMLButtonElement;
		console.log(target);
		const id = target.id;
		console.log(`Id : ${id}`);
		// Find and set
		const p = crepes.find((crepe) => crepe.name == id);
		console.log(p);
		if (p) active_crepe = p;
		// trigger modal
		is_modal_active = !is_modal_active;
	};

	const title = 'Our Menu';
	const description =
		'Enjoy a fresh crepe today! We offer a variety of savory and sweet crepes that will satisfy any craving. Gluten-free is also available.';
	const seoData = {
		title: `Kagen Coffee & Crepes: ${title} `,
		description: description,
		url: 'https://www.kagenandco.com/about-us',
		og: {
			src: 'https://www.kagenandco.com/images/kagen_coffee_and_crepes_owner_og.jpg',
			alt: 'Kagen Coffee and Crepes landing page',
			mimeType: 'image/jpg',
			width: 1200,
			height: 630
		}
	};
</script>

<Seo data={seoData} />
<PageWrapper {title} {description}>
	<div class="mx-auto max-w-2xl px-4 py-8 md:py-12 flex justify-center">
		<span class="isolate inline-flex rounded-md shadow-sm">
			<a
				data-sveltekit-noscroll
				id="all"
				href="/menu"
				class="{type === ''
					? 'bg-primary-400'
					: 'bg-white'} relative min-w-[80px] inline-flex justify-center items-center rounded-l-md px-3 py-2 text-sm font-semibold !text-gray-900 !no-underline ring-1 ring-inset ring-gray-300 hover:bg-primary-300 focus:z-10"
				>All</a
			>
			<a
				data-sveltekit-noscroll
				id="savory"
				href="/menu?type=savory"
				class="{type === 'savory'
					? 'bg-primary-400'
					: 'bg-white'} relative min-w-[80px] -ml-px inline-flex justify-center items-center px-3 py-2 text-sm font-semibold !text-gray-900 !no-underline ring-1 ring-inset ring-gray-300 hover:bg-primary-300 focus:z-10"
				>Savory</a
			>
			<a
				data-sveltekit-noscroll
				id="sweet"
				href="/menu?type=sweet"
				class="{type === 'sweet'
					? 'bg-primary-400'
					: 'bg-white'} relative min-w-[80px] -ml-px inline-flex justify-center items-center rounded-r-md px-3 py-2 text-sm font-semibold !text-gray-900 !no-underline ring-1 ring-inset ring-gray-300 hover:bg-primary-300 focus:z-10"
				>Sweet</a
			>
		</span>
	</div>
	<!-- Crepes Grid -->
	<ul
		role="list"
		class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
	>
		{#each crepes as { name, type, image, ingredients, special, most_popular } (name)}
			<li id={name} animate:flip={flip_params} class="relative">
				{#if special}
					<span class="badge bg-rose-600 text-white absolute -top-2 right-2 z-10">Limited Time</span
					>
				{/if}
				{#if most_popular}
					<span class="badge bg-primary-500 absolute -top-2 right-2 z-10">Most popular</span>
				{/if}
				<div
					class="relative group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
				>
					<enhanced:img
						src={image.src}
						alt={image.alt}
						sizes="(min-width:240px) 280px, (min-width:300) 400px"
						class="pointer-events-none object-cover h-full w-full group-hover:opacity-75"
					/>
					<button
						id={name}
						on:click={toggle_modal}
						type="button"
						class="absolute inset-0 focus:outline-none"
					>
						<span class="sr-only">View details for {name}</span>
					</button>
				</div>
				<p
					class="pointer-events-none mt-2 block truncate text-sm md:text-lg font-medium text-gray-900"
				>
					{name}
				</p>
			</li>
		{/each}
	</ul>
</PageWrapper>
<!-- Modal -->
<div
	class="relative z-10 {is_modal_active ? 'pointer-events-auto' : 'pointer-events-none'}"
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
>
	<!-- Background backdrop, show/hide based on modal state. -->
	<div
		class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity {is_modal_active
			? 'opacity-100 ease-out duration-300'
			: 'opacity-0 ease-in duration-200'}"
	/>

	<div class="fixed inset-0 z-10 overflow-y-auto">
		<div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
			<!-- Modal panel, show/hide based on modal state. -->
			<div
				class="relative flex flex-col w-full transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:max-w-xl sm:p-6 {is_modal_active
					? 'ease-out duration-300 opacity-100 translate-y-0 sm:scale-100'
					: 'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}"
			>
				{#if active_crepe}
					<div>
						<div
							class="mx-auto aspect-h-7 aspect-w-10 overflow-hidden flex items-center justify-center rounded-lg bg-green-100"
						>
							<enhanced:img
								src={active_crepe.image.src}
								alt={active_crepe.image.alt}
								class="pointer-events-none object-cover h-full w-full group-hover:opacity-75"
							/>
						</div>
						<div class="mt-3 text-center sm:mt-5">
							<h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
								{active_crepe.name}
							</h3>
							<div class="mt-2">
								<p class="text-sm text-gray-500">
									{active_crepe.description ?? ''}
								</p>
							</div>
						</div>
					</div>
					<div class="mt-5 sm:mt-6">
						<button on:click={toggle_modal} type="button" class="btn variant-filled-primary w-full"
							>Go back</button
						>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
