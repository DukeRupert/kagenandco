//@ts-nocheck
import richland_location from '/static/images/location_richland.png?enhanced';
import kennewick_shop from '/static/images/IMG_4900.jpg?enhanced';

export type Location = {
	image: {
		alt: string;
		src: any;
	};
	address: {
		line2: string;
		line1: string;
	};
	locationUrl: string;
	orderUrl: string;
	hours: string[];
	name: string;
	phone: string;
	slug: {
		current: string;
		_type: string;
	};
};

export const locations: Location[] = [
	{
		image: {
			alt: 'Kagen Coffee and Crepes Richland Uptown location',
			src: richland_location
		},
		address: {
			line2: 'Richland, WA 99354',
			line1: '270 Williams Blvd'
		},
		locationUrl: 'https://www.google.com/maps/place/270+Williams+Blvd,+Richland,+WA+99354/',

		orderUrl: 'https://www.toasttab.com/kagen-coffee-crepes-270-williams-blvd/v3/?mode=fulfillment',

		hours: ['Monday-Saturday: 7am-2pm', 'Sunday : 9am-2pm'],
		name: 'Richland Uptown',

		phone: '509-851-7186',
		slug: {
			current: 'tri-cities',
			_type: 'slug'
		}
	},
	{
		image: {
			alt: 'Kagen Coffee and Crepes Kennewick location',
			src: kennewick_shop
		},
		address: {
			line2: 'Kennewick, WA 99336',
			line1: '308 W Kennewick Ave'
		},
		locationUrl: '',
		orderUrl: 'https://www.toasttab.com/kagen-coffee-crepes-308-w-kennewick-ave',
		hours: ['Tuesday-Saturday: 7am-2pm', 'Sunday-Monday : Closed'],
		name: 'Kennewick',
		phone: '509-851-7186',
		slug: {
			current: 'kennewick',
			_type: 'slug'
		}
	}
];
