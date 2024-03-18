// Crepe data for kagenandco.com menu
export interface Crepe {
	name: string;
	description: string;
	type: 'savory' | 'sweet';
	most_popular: boolean;
	special: boolean;
	image: {
		src: string;
		alt: string;
		height: number;
		width: number;
	};
	price: {
		mini: string; // Consider using a number type for prices
		full: string;
	};
	ingredients: string[];
}

export const crepes: Crepe[] = [
	{
		name: 'The Breakfast in Bed',
		description: 'Egg, cheddar, bacon, maple sausage served with a side of maple syrup.',
		type: 'savory',
		most_popular: true,
		special: false,
		image: {
			src: 'Kagenandco/crepes/breakfast_in_bed_crepe_hrajur',
			alt: 'The Breakfast in Bed crepe',
			height: 600,
			width: 600
		},
		price: {
			mini: '8.50',
			full: '11.95'
		},
		ingredients: ['bacon', 'cheddar', 'maple sausage', 'maple syrup', 'eggs', 'dairy', 'flour']
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
			src: '/Kagenandco/crepes/the_monte_cristo_crepe_2_s9wodu',
			alt: 'A Montecristo crepe garnished with jam.',
			height: 600,
			width: 600
		},

		price: {
			mini: '8.50',
			full: '11.95'
		}
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
			src: '/Kagenandco/crepes/chicken_crepe_ela3qw',
			alt: 'The Chicken crepe',
			height: 600,
			width: 600
		}
	},
	{
		name: 'The Turkey Bacon',
		description: 'Turkey, bacon, provalone, tomato and spinach with a side of ranch.',
		type: 'savory',
		special: false,
		most_popular: false,
		image: {
			src: '/Kagenandco/crepes/turkey_bacon_crepe_kagen_coffee_and_crepes_awaovj',
			alt: 'The Turkey Bacon crepe',
			height: 600,
			width: 600
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
			src: '/Kagenandco/crepes/the_all_american_a83cx7',
			alt: 'The  All American crepe',
			height: 720,
			width: 1080
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
			src: '/Kagenandco/crepes/the_chipotle_chicken_hjwbay',
			alt: 'The Chipotle Chicken crepe',
			height: 721,
			width: 1080
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
			src: '/Kagenandco/crepes/the_caprese_bulong',
			alt: 'A Caprese crepe garnished with balsamic glaze.',
			height: 1440,
			width: 1440
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
			src: '/Kagenandco/crepes/black_bean_crepe_kagen_coffee_and_crepes_x1jebw',
			alt: 'The Black Bean crepe',
			height: 1350,
			width: 1080
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
			src: '/Kagenandco/crepes/lemon_crepe_k0wuvc',
			alt: 'A lemon crepe garnished with whipped crème',
			height: 600,
			width: 600
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
			src: '/Kagenandco/crepes/egg_crepe_csu3fo',
			alt: 'The Egg crepe',
			height: 600,
			width: 600
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
			src: '/Kagenandco/crepes/chocolate_crepe_tlrkcx',
			alt: 'A chocolate crepe garnished with whipped creme',
			height: 600,
			width: 600
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
			src: '/Kagenandco/crepes/peanut_butter_crepe_yhleuy',
			alt: 'A peanut butter crepe garnished with whipped crème and banana',
			height: 600,
			width: 600
		}
	},
	{
		name: 'The Nutella',
		description: 'Nutella and strawberry garnished with whipped cream.',
		most_popular: false,
		special: false,
		type: 'sweet',
		image: {
			src: '/Kagenandco/crepes/nutella_crepe_jshix5',
			alt: 'A Nutella crepe garnished with whipped crème',
			height: 600,
			width: 600
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
			src: '/Kagenandco/crepes/mixed_berry_crepe_2_udwvc6',
			alt: 'A mixed berry crepe garnished with whipped creme',
			height: 600,
			width: 600
		},

		price: {
			mini: '7.50',
			full: '9.00'
		},

		ingredients: ['cream cheese', 'strawberry', 'blueberry', 'eggs', 'dairy', 'flour']
	}
];
