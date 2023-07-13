<script lang="ts">
	import type { Crepe } from '$lib/types/menu';
	import the_caprese_crepe from '$lib/assets/crepes/the_caprese.jpg?run';
	import the_cookie_monster from '$lib/assets/crepes/the_cookie_monster.jpg?run';
	import Img from '@zerodevx/svelte-img';
	import Seo from '$lib/components/SEO.svelte';
	const seoData = {
		title: 'Kagen Coffee & Crepes | Menu | Richland',
		description:
			'Enjoy a fresh crepe today! We offer a variety of savory and sweet crepes that will satisfy any craving. Gluten-free is also available.',
		url: 'https://www.kagenandco.com/about-us',
		og: {
			src: 'https://www.kagenandco.com/images/kagen_coffee_and_crepes_owner_og.jpg',
			alt: 'Kagen Coffee and Crepes landing page',
			mimeType: 'image/jpg',
			width: 1200,
			height: 630
		}
	};

	const crepes: Crepe[] = [
		{
			name: 'The Caprese',
			description:
				'Provolone, fresh mozzarella, chicken, sun dried tomatoes, and spinach topped with a balsamic glaze',
			special: true,
			most_popular: false,
			type: 'savory',
			ingredients: ['ham', 'turkey', 'provolone', 'cheddar', 'raspberry', 'eggs', 'dairy', 'flour'],

			image: {
				src: the_caprese_crepe,
				alt: 'A Caprese crepe garnished with balsamic glaze.'
			},

			price: {
				mini: '8.50',
				full: '11.95'
			}
		},

		{
			name: 'The Cookie Monster',
			description:
				'Milk chocolate chips tucked inside a warm crepe, topped with crushed pretzels and homemade edible cookie dough.',
			most_popular: false,
			special: true,
			type: 'sweet',
			image: {
				src: the_cookie_monster,
				alt: 'A cookie monster crepe garnished with pretzels'
			},
			price: {
				mini: '6.00',
				full: '7.00'
			},
			ingredients: ['lemon', 'sugar', 'eggs', 'dairy', 'flour']
		}
	];

	let is_modal_active = false;
	let active_crepe: Crepe = crepes[0];
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
</script>

<Seo data={seoData} />

<div class="bg-white">
	<div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
		<!-- Details section -->
		<section aria-labelledby="details-heading">
			<div class="flex flex-col items-center text-center">
				<h2
					id="details-heading"
					class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
				>
					Monthly Specials
				</h2>
				<p class="mt-3 max-w-3xl text-lg text-gray-600">
					Each month we let our imagination go wild and bring you a few new recipies for a limited
					time.
				</p>
			</div>

			<div class="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
				{#each crepes as { name, type, image, ingredients, special, most_popular } (name)}
					<div>
						<div class="group aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
							<Img
								src={image.src}
								alt={image.alt}
								class="h-full w-full object-cover object-center group-hover:opacity-75"
							/>
							<button
								id={name}
								on:click={toggle_modal}
								type="button"
								class="absolute inset-0 focus:outline-none"
							>
								<span class="sr-only">View details for IMG_4985.HEIC</span>
							</button>
						</div>
						<p class="mt-8 text-base text-gray-500">
							{name}
						</p>
					</div>
				{/each}

				<!-- <div>
					<div class="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
						<img
							src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"
							alt="Front zipper pouch with included key ring."
							class="h-full w-full object-cover object-center"
						/>
					</div>
					<p class="mt-8 text-base text-gray-500">
						Up your snack organization game with multiple compartment options. The quick-access
						stash pouch is ready for even the most unexpected snack attacks and sharing needs.
					</p>
				</div> -->
			</div>
		</section>
	</div>
</div>
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
				<div>
					<div
						class="mx-auto aspect-h-7 aspect-w-10 overflow-hidden flex items-center justify-center rounded-lg bg-green-100"
					>
						<Img
							src={active_crepe.image.src}
							alt={active_crepe.image.alt}
							class="pointer-events-none object-cover h-full group-hover:opacity-75"
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
			</div>
		</div>
	</div>
</div>
