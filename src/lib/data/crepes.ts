//@ts-nocheck
import the_egg_crepe from '/src/lib/assets/crepes/egg_crepe.jpg?enhanced&w=400;280';
import the_bib_crepe from '/src/lib/assets/crepes/breakfast_in_bed_crepe.jpg?enhanced&w=400;280';
import the_chicken_crepe from '/src/lib/assets/crepes/chicken_crepe.jpg?enhanced&w=400;280';
import the_turkey_bacon_crepe from '/src/lib/assets/crepes/turkey_bacon_crepe_2.jpg?enhanced&w=400;280';
import the_all_american_crepe from '/src/lib/assets/crepes/the_all_american.jpg?enhanced&w=400;280';
import the_chipotle_chicken_crepe from '/src/lib/assets/crepes/the_chipotle_chicken.jpg?enhanced&w=400;280';
import the_montecristo_crepe from '/src/lib/assets/crepes/the_monte_cristo_crepe_2.jpg?enhanced&w=400;280';
import the_black_bean_crepe from '/src/lib/assets/crepes/black_bean_crepe_2.jpg?enhanced&w=400;280';
import the_lemon_crepe from '/src/lib/assets/crepes/lemon_crepe.jpg?enhanced&w=400;280';
import the_chocolate_crepe from '/src/lib/assets/crepes/chocolate_crepe.jpg?enhanced&w=400;280';
import the_peanut_butter_crepe from '/src/lib/assets/crepes/peanut_butter_crepe.jpg?enhanced&w=400;280';
import the_nutella_crepe from '/src/lib/assets/crepes/nutella_crepe.jpg?enhanced&w=400;280';
import the_mixed_berry_crepe from '/src/lib/assets/crepes/mixed_berry_crepe_2.jpg?enhanced&w=400;280';
import the_caprese_crepe from '/src/lib/assets/crepes/the_caprese.jpg?enhanced&w=400;280';

export const crepes: Crepe[] = [	
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
	// {
	// 	name: 'The Cookie Monster',
	// 	description:
	// 		'Milk chocolate chips tucked inside a warm crepe, topped with crushed pretzels and homemade edible cookie dough.',
	// 	most_popular: false,
	// 	special: true,
	// 	type: 'sweet',
	// 	image: {
	// 		src: the_cookie_monster,
	// 		alt: 'A cookie monster crepe garnished with pretzels'
	// 	},
	// 	price: {
	// 		mini: '6.00',
	// 		full: '7.00'
	// 	},
	// 	ingredients: ['lemon', 'sugar', 'eggs', 'dairy', 'flour']
	// },
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
