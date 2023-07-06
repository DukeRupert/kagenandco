<script lang="ts">
	import type { Crepe } from '../menu';
	import kagen_cox_owner from '$lib/assets/kagen_coffee_and_crepes_owner.webp?run';
	import Img from '@zerodevx/svelte-img';
	import Seo from '$lib/components/SEO.svelte';
	const seoData = {
		title: 'Kagen Coffee & Crepes - Our Story',
		description:
			'When my wife and I would travel our favorite thing to do was visit crepe shops. It was then that we realized what we wanted to create for our community - a gathering place. Here, we bring you our heart and passion through our love of crepes, coffee, locally sourced ciders and wine.',
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
			name: 'The Egg',
			type: 'savory',
			image: {
				alt: 'The egg crepe'
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
				alt: 'The breakfast in bed crepe'
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
				alt: 'The Chicken crepe'
			}
		},
		{
			type: 'savory',
			image: {
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
			_type: 'crepe',
			ingredients: ['chicken', 'coleslaw', 'tomato', 'chipotle ranch', 'eggs', 'dairy', 'flour'],
			image: {
				alt: 'The Chipotle Chicken crepe'
			}
		},
		{
			type: 'savory',
			ingredients: ['ham', 'turkey', 'provolone', 'cheddar', 'raspberry', 'eggs', 'dairy', 'flour'],

			image: {
				alt: 'A Montecristo crepe garnished with jam.'
			},

			name: 'The Montecristo',

			price: {
				mini: '8.50',
				full: '11.95'
			},
			_createdAt: '2021-05-24T02:57:23Z'
		},
		{
			type: 'savory',
			image: {
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
			},

			name: 'The Black Bean'
		},
		{
			type: 'sweet',
			image: {
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
			type: 'sweet',
			ingredients: ['chocolate', 'raspberry', 'eggs', 'dairy', 'flour'],

			image: {
				alt: 'A chocolate crepe garnished with whipped creme'
			},
			price: {
				mini: '7.50',
				full: '9.00'
			},
			name: 'The Chocolate'
		},
		{
			type: 'sweet',
			price: {
				mini: '7.50',
				full: '9.00'
			},
			ingredients: ['peanut butter', 'banana', 'eggs', 'dairy', 'flour'],

			name: 'The Peanut Butter',

			image: {
				alt: 'A peanut butter crepe garnished with whipped crème and banana'
			}
		},
		{
			type: 'sweet',
			image: {
				alt: 'A Nutella crepe garnished with whipped crème'
			},
			price: {
				full: '9.00',
				mini: '7.50'
			},
			ingredients: ['Nutella', 'strawberry', 'eggs', 'dairy', 'flour'],

			name: 'The Nutella'
		},
		{
			type: 'sweet',
			image: {
				alt: 'A mixed berry crepe garnished with whipped creme',
				caption: 'The Mixed Berry crepe'
			},

			name: 'The Mixed Berry',

			price: {
				mini: '7.50',
				full: '9.00'
			},

			ingredients: ['cream cheese', 'strawberry', 'blueberry', 'eggs', 'dairy', 'flour']
		}
	];
</script>

<!-- Hero -->
<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{data.title}</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			Enjoy a fresh crepe today! We offer a variety of savory and sweet crepes that will satisfy any
			craving. Gluten-free is also available.
		</p>
	</div>
	<div class="bg-white" />
</div>
