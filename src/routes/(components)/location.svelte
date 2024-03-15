<script lang="ts" context="module">
	export interface Location {
		image: {
			alt: string;
			src: string;
			height: string;
			width: string;
		};
		address: {
			line1: string;
			line2: string;
		};
		locationUrl: string;
		orderUrl: string;
		hours: string[];
		name: string;
		phone: string;
		slug: {
			current: string;
			_type: 'slug';
		};
	}
</script>

<script lang="ts">
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	import LocationCard from './location-card.svelte';

	const title = 'Store Locations';
	const description =
		"Find our nearest location and come join us! It's hard to beat a delicious crepe paired with a strong, handcrafted coffee.";
	const location: Location = {
		image: {
			alt: 'Kagen Coffee and Crepes Richland Uptown location',
			src: '/Kagenandco/location_richland_g2q3b7',
			height: "995",
			width: "968"
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
	};
</script>

<PageWrapper {title} {description}>
	<!-- Location Cards -->
	<div class="bg-white px-6 pb-32 lg:px-8">
		<div class="max-w-6xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-5xl lg:px-8">
			<h2 id="products-heading" class="sr-only">Locations</h2>

			<div class="grid grid-cols-1 gap-y-14 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
				<LocationCard {location} />
			</div>
		</div>
	</div>
</PageWrapper>
