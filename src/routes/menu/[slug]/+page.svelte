<script lang="ts">
	import { flip } from 'svelte/animate';
	import type { Crepe } from '$lib/types/menu';
	import the_egg_crepe from '$lib/assets/crepes/egg_crepe.jpg?run';
	import the_bib_crepe from '$lib/assets/crepes/breakfast_in_bed_crepe.jpg?run';
	import the_chicken_crepe from '$lib/assets/crepes/chicken_crepe.jpg?run';
	import the_turkey_bacon_crepe from '$lib/assets/crepes/turkey_bacon_crepe_2.jpg?run';
	import the_all_american_crepe from '$lib/assets/crepes/the_all_american.jpg?run';
	import the_chipotle_chicken_crepe from '$lib/assets/crepes/the_chipotle_chicken.jpg?run';
	import the_montecristo_crepe from '$lib/assets/crepes/the_monte_cristo_crepe_2.jpg?run';
	import the_black_bean_crepe from '$lib/assets/crepes/black_bean_crepe_2.jpg?run';
	import the_lemon_crepe from '$lib/assets/crepes/lemon_crepe.jpg?run';
	import the_chocolate_crepe from '$lib/assets/crepes/chocolate_crepe.jpg?run';
	import the_peanut_butter_crepe from '$lib/assets/crepes/peanut_butter_crepe.jpg?run';
	import the_nutella_crepe from '$lib/assets/crepes/nutella_crepe.jpg?run';
	import the_mixed_berry_crepe from '$lib/assets/crepes/mixed_berry_crepe_2.jpg?run';
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

	const all_crepes: Crepe[] = [
		{
			name: 'The Egg',
			description: 'Ham, eggs, provolone and spinach.',
			type: 'savory',
			special: false,
			most_popular: false,
			image: {
				alt: 'The Egg crepe',
				src: the_egg_crepe
			},
			price: {
				mini: '8.50',
				full: '11.95'
			},
			ingredients: ['provolone', 'ham', 'spinach', 'eggs', 'dairy', 'flour']
		},
		{
			name: 'The Breakfast in Bed',
			description: 'Egg, cheddar, bacon, maple sausage served with a side of maple syrup.',
			type: 'savory',
			most_popular: true,
			special: false,
			image: {
				src: the_bib_crepe,
				alt: 'The Breakfast in Bed crepe'
			},
			price: {
				mini: '8.50',
				full: '11.95'
			},
			ingredients: ['bacon', 'cheddar', 'maple sausage', 'maple syrup', 'eggs', 'dairy', 'flour']
		},
		{
			name: 'The Chicken',
			description: 'Chicken, provolone and spinach.',
			most_popular: false,
			special: false,
			type: 'savory',
			price: {
				mini: '8.50',
				full: '11.95'
			},

			ingredients: ['chicken', 'spinach', 'provolone', 'eggs', 'dairy', 'flour'],
			image: {
				src: the_chicken_crepe,
				alt: 'The Chicken crepe'
			}
		},
		{
			name: 'The Turkey Bacon',
			description: 'Turkey, bacon, provalone, tomato and spinach with a side of ranch.',
			type: 'savory',
			special: false,
			most_popular: false,
			image: {
				src: the_turkey_bacon_crepe,
				alt: 'The Turkey Bacon crepe'
			},
			price: {
				full: '11.95',
				mini: '8.50'
			},
			ingredients: [
				'turkey',
				'bacon',
				'provolone',
				'tomato',
				'spinach',
				'ranch',
				'eggs',
				'dairy',
				'flour'
			]
		},
		{
			name: 'The All American',
			description: 'Bacon, eggs and chedder topped with gravy.',
			special: false,
			most_popular: true,
			type: 'savory',
			price: {
				mini: '8.50',
				full: '11.95'
			},
			ingredients: ['gravy', 'bacon', 'cheddar', 'eggs', 'dairy', 'flour'],

			image: {
				src: the_all_american_crepe,
				alt: 'The  All American crepe'
			}
		},
		{
			name: 'The Chipotle Chicken',
			description: 'Chicken, provolone, tomatoes, coleslaw, and a spicy sweet chipotle ranch.',
			special: false,
			most_popular: false,
			type: 'savory',
			price: {
				mini: '8.50',
				full: '11.95'
			},
			ingredients: ['chicken', 'coleslaw', 'tomato', 'chipotle ranch', 'eggs', 'dairy', 'flour'],
			image: {
				src: the_chipotle_chicken_crepe,
				alt: 'The Chipotle Chicken crepe'
			}
		},
		{
			name: 'The Montecristo',
			description:
				'Egg, Ham, Turkey, Provolone, and Cheddar topped with powdered sugar and raspberry jam.',
			special: false,
			most_popular: true,
			type: 'savory',
			ingredients: ['ham', 'turkey', 'provolone', 'cheddar', 'raspberry', 'eggs', 'dairy', 'flour'],

			image: {
				src: the_montecristo_crepe,
				alt: 'A Montecristo crepe garnished with jam.'
			},

			price: {
				mini: '8.50',
				full: '11.95'
			}
		},
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
			name: 'The Black Bean',
			description: 'Black beans, tomato, guacamole, and spinach with a side of pico de gallo!',
			special: false,
			most_popular: true,
			type: 'savory',
			image: {
				src: the_black_bean_crepe,
				alt: 'The Black Bean crepe'
			},
			ingredients: [
				'black bean',
				'avocado',
				'tomato',
				'spinach',
				'lime',
				'salsa',
				'eggs',
				'dairy',
				'flour'
			],
			price: {
				full: '11.95',
				mini: '8.50'
			}
		},
		{
			name: 'The Lemon',
			description: 'Sugar and lemon garnished with whipped cream.',
			type: 'sweet',
			most_popular: false,
			special: false,
			image: {
				src: the_lemon_crepe,
				alt: 'A lemon crepe garnished with whipped crème'
			},
			price: {
				mini: '6.00',
				full: '7.00'
			},
			ingredients: ['lemon', 'sugar', 'eggs', 'dairy', 'flour']
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
		},
		{
			name: 'The Chocolate',
			description: 'Chocolate and raspberry garnished with whipped cream.',
			most_popular: false,
			special: false,
			type: 'sweet',
			ingredients: ['chocolate', 'raspberry', 'eggs', 'dairy', 'flour'],

			image: {
				src: the_chocolate_crepe,
				alt: 'A chocolate crepe garnished with whipped creme'
			},
			price: {
				mini: '7.50',
				full: '9.00'
			}
		},
		{
			name: 'The Peanut Butter',
			description: 'Peanut butter and banana garnsihed with whipped cream.',
			most_popular: false,
			special: false,
			type: 'sweet',
			price: {
				mini: '7.50',
				full: '9.00'
			},
			ingredients: ['peanut butter', 'banana', 'eggs', 'dairy', 'flour'],

			image: {
				src: the_peanut_butter_crepe,
				alt: 'A peanut butter crepe garnished with whipped crème and banana'
			}
		},
		{
			name: 'The Nutella',
			description: 'Nutella and strawberry garnished with whipped cream.',
			most_popular: false,
			special: false,
			type: 'sweet',
			image: {
				src: the_nutella_crepe,
				alt: 'A Nutella crepe garnished with whipped crème'
			},
			price: {
				full: '9.00',
				mini: '7.50'
			},
			ingredients: ['Nutella', 'strawberry', 'eggs', 'dairy', 'flour']
		},
		{
			name: 'The Mixed Berry',
			description: 'Cream cheese, strawberry and blueberry garnished with whipped cream.',
			most_popular: true,
			special: false,
			type: 'sweet',
			image: {
				src: the_mixed_berry_crepe,
				alt: 'A mixed berry crepe garnished with whipped creme'
			},

			price: {
				mini: '7.50',
				full: '9.00'
			},

			ingredients: ['cream cheese', 'strawberry', 'blueberry', 'eggs', 'dairy', 'flour']
		}
	];

	let filtered_crepes: Crepe[] = all_crepes.sort((a, b) => 0.5 - Math.random());
	let id = 'all';

	function filter_crepes(crepes: Crepe[], param: string): Crepe[] {
		// If no filter param exists return full array
		if (param == null) {
			return crepes;
		} else {
			const result = crepes.filter((crepe) => crepe.type == param);
			return result;
		}
	}

	const update_crepes = (
		event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
	) => {
		const target = event.target as HTMLButtonElement;
		const crepe_type = target.id;
		id = crepe_type;
		if (id && id !== 'all') {
			filtered_crepes = filter_crepes(all_crepes, crepe_type);
		} else {
			filtered_crepes = all_crepes;
		}
	};

	let is_modal_active = false;
	let active_crepe: Crepe = all_crepes[0];
	const toggle_modal = (event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) => {
		// Get id of crepe
		const target = event.target as HTMLButtonElement;
		console.log(target);
		const id = target.id;
		console.log(`Id : ${id}`);
		// Find and set
		const p = all_crepes.find((crepe) => crepe.name == id);
		console.log(p);
		if (p) active_crepe = p;
		// trigger modal
		is_modal_active = !is_modal_active;
	};
</script>

<Seo data={seoData} />
<!-- Hero -->
<div class="bg-white px-6 py-8 md:py-16 lg:py-32 lg:px-8">
	<div class="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
		<h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Menu</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			Enjoy a fresh crepe today! We offer a variety of savory and sweet crepes that will satisfy any
			craving. Gluten-free is also available.
		</p>
	</div>
	<div class="mx-auto max-w-2xl px-4 py-8 flex justify-center">
		<span class="isolate inline-flex rounded-md shadow-sm">
			<button
				id="all"
				on:click={update_crepes}
				type="button"
				class="{id == 'all'
					? 'bg-primary-400'
					: 'bg-white'} relative min-w-[80px] inline-flex justify-center items-center rounded-l-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-primary-300 focus:z-10"
				>All</button
			>
			<button
				id="savory"
				on:click={update_crepes}
				type="button"
				class="{id == 'savory'
					? 'bg-primary-400'
					: 'bg-white'} relative min-w-[80px] -ml-px inline-flex justify-center items-center px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-primary-300 focus:z-10"
				>Savory</button
			>
			<button
				id="sweet"
				on:click={update_crepes}
				type="button"
				class="{id == 'sweet'
					? 'bg-primary-400'
					: 'bg-white'} relative min-w-[80px] -ml-px inline-flex justify-center items-center rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-primary-300 focus:z-10"
				>Sweet</button
			>
		</span>
	</div>
	<!-- Crepes Grid -->
	<ul
		role="list"
		class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
	>
		{#each filtered_crepes as { name, type, image, ingredients, special, most_popular } (name)}
			<li id={name} animate:flip={{ duration: 250 }} class="relative">
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
					<Img
						src={image.src}
						alt={image.alt}
						class="pointer-events-none object-cover h-full group-hover:opacity-75"
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
