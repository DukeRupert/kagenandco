<script lang="ts">
	import { crossfade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { flip } from 'svelte/animate';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import type { Crepe } from '../menu';
	import the_egg_crepe from '$lib/assets/crepes/egg_crepe.jpg?run';
	import the_bib_crepe from '$lib/assets/crepes/breakfast_in_bed_crepe.jpg?run';
	import the_chicken_crepe from '$lib/assets/crepes/chicken_crepe.jpg?run';
	import the_turkey_bacon_crepe from '$lib/assets/crepes/turkey_bacon_crepe_2.jpg?run';
	import the_all_american_crepe from '$lib/assets/crepes/chicken_crepe.jpg?run';
	import the_chipotle_chicken_crepe from '$lib/assets/crepes/chicken_crepe.jpg?run';
	import the_montecristo_crepe from '$lib/assets/crepes/the_monte_cristo_crepe_2.jpg?run';
	import the_black_bean_crepe from '$lib/assets/crepes/black_bean_crepe_2.jpg?run';
	import the_lemon_crepe from '$lib/assets/crepes/lemon_crepe.jpg?run';
	import the_chocolate_crepe from '$lib/assets/crepes/chocolate_crepe.jpg?run';
	import the_peanut_butter_crepe from '$lib/assets/crepes/peanut_butter_crepe.jpg?run';
	import the_nutella_crepe from '$lib/assets/crepes/nutella_crepe.jpg?run';
	import the_mixed_berry_crepe from '$lib/assets/crepes/mixed_berry_crepe_2.jpg?run';
	import Img from '@zerodevx/svelte-img';
	import Seo from '$lib/components/SEO.svelte';
	const seoData = {
		title: 'Kagen Coffee & Crepes - Menu - Richland',
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
			type: 'savory',
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
			type: 'savory',
			image: {
				src: the_bib_crepe,
				alt: 'The Breakfast in Bed crepe'
			},
			price: {
				mini: '8.50',
				full: '11.95'
			},

			name: 'The Breakfast in Bed',

			ingredients: ['bacon', 'cheddar', 'maple sausage', 'maple syrup', 'eggs', 'dairy', 'flour']
		},
		{
			name: 'The Chicken',
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
			type: 'savory',
			image: {
				src: the_turkey_bacon_crepe,
				alt: 'The Turkey Bacon crepe'
			},
			price: {
				full: '11.95',
				mini: '8.50'
			},

			name: 'The Turkey Bacon',
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
			name: 'The Black Bean',
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
			type: 'sweet',
			image: {
				src: the_lemon_crepe,
				alt: 'A lemon crepe garnished with whipped crème'
			},
			price: {
				mini: '6.00',
				full: '7.00'
			},

			name: 'The Lemon',

			ingredients: ['lemon', 'sugar', 'eggs', 'dairy', 'flour']
		},
		{
			name: 'The Chocolate',
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
		console.log('Filter crepes');
		// If no filter param exists return full array
		if (param == null) {
			console.log('Return all crepes');
			return crepes;
		} else {
			console.log('Filter crepes and return');
			const result = crepes.filter((crepe) => crepe.type == param);
			return result;
		}
	}

	const remove = (event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) => {
		// Get id of element to remove
		const target = event.target as HTMLButtonElement;
		const id = target.id;
	};

	const update_crepes = (
		event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
	) => {
		console.log('Sort');
		const target = event.target as HTMLButtonElement;
		const crepe_type = target.id;
		id = crepe_type;
		if (id && id !== 'all') {
			filtered_crepes = filter_crepes(all_crepes, crepe_type);
		} else {
			filtered_crepes = all_crepes;
		}
	};
</script>

<!-- Hero -->
<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
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
					: undefined} relative min-w-[80px] inline-flex justify-center items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-primary-300 focus:z-10"
				>All</button
			>
			<button
				id="savory"
				on:click={update_crepes}
				type="button"
				class="{id == 'savory'
					? 'bg-primary-400'
					: undefined} relative min-w-[80px] -ml-px inline-flex justify-center items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-primary-300 focus:z-10"
				>Savory</button
			>
			<button
				id="sweet"
				on:click={update_crepes}
				type="button"
				class="{id == 'sweet'
					? 'bg-primary-400'
					: undefined} relative min-w-[80px] -ml-px inline-flex justify-center items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-primary-300 focus:z-10"
				>Sweet</button
			>
		</span>
	</div>
	<!-- Crepes Grid -->
	<ul
		role="list"
		class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
	>
		{#each filtered_crepes as { name, type, image, ingredients } (name)}
			<li id={name} animate:flip={{ duration: 250 }} class="relative">
				<div
					class="group aspect-h-4 aspect-w-5 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
				>
					<Img
						src={image.src}
						alt={image.alt}
						class="pointer-events-none object-cover group-hover:opacity-75"
					/>
					<button
						on:click={remove}
						id={name}
						type="button"
						class="absolute inset-0 focus:outline-none"
					>
						<span class="sr-only">View details for IMG_4985.HEIC</span>
					</button>
				</div>
				<p class="pointer-events-none mt-2 block truncate text-lg font-medium text-gray-900">
					{name}
				</p>
			</li>
		{/each}
	</ul>
</div>
