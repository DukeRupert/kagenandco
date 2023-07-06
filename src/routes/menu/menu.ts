interface Coffee {
	price: CoffeePrice;
	name: string;
}

interface CoffeePrice {
	small: string;
	large: string;
	medium: string;
}

interface Drink {
	price: number;
	name: string;
}

export interface Crepe {
	name: string;
	description?: string;
	special: boolean;
	type: string;
	image: Image;
	price: Price;
	ingredients: string[];
}

interface Image {
	src: Object[];
	alt: string;
}

interface Price {
	mini: string;
	full: string;
}

const coffees: Coffee[] = [
	{
		price: {
			small: '2.00',
			large: '2.50',
			medium: '2.25'
		},
		name: 'Drip Coffee'
	},
	{
		price: {
			medium: '3.75',
			small: '3.25',
			large: '4.25'
		},

		name: 'Americano'
	},
	{
		name: 'Latte',

		price: {
			large: '5.00',
			medium: '4.50',
			small: '4.00'
		}
	},
	{
		name: 'Mocha',

		price: {
			small: '4.50',
			large: '5.50',
			medium: '5.00'
		}
	},
	{
		name: 'Chai Tea Latte',

		price: {
			large: '5.50',
			medium: '5.00',
			small: '4.50'
		}
	},
	{
		name: 'Hot Chocolate',

		price: {
			small: '3.25',
			large: '4.25',
			medium: '3.75'
		}
	},
	{
		price: {
			large: '5.50',
			medium: '5.00',
			small: '4.50'
		},

		name: 'Blended Drink'
	}
];

const drinks: Drink[] = [
	{
		price: 2,

		name: 'Bottled Soda'
	},
	{
		price: 2,

		name: 'Mineral Water'
	},
	{
		name: 'Redbull',

		price: 2
	},
	{
		price: 5,

		name: 'Italian Soda 12oz'
	}
];
