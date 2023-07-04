<script lang="ts">
	import richland_location from '$lib/assets/location_richland.png?run';
	import Img from '@zerodevx/svelte-img';
	import Seo from '$lib/components/SEO.svelte';
	const seoData = {
		title: 'Kagen Coffee & Crepes - Locations',
		description:
			"Find our nearest location and come join us! It's hard to beat a delicous crepe paired with a strong, handcrafted coffee.",
		url: 'https://www.kagenandco.com/locations',
		og: {
			src: 'https://www.kagenandco.com/images/coffee_cup_with_coffee_beans_kagen_coffee_and_crepes_square.webp',
			alt: 'Kagen Coffee and Crepes coffee cup with coffee beans scattered around.',
			mimeType: 'image/webp',
			width: 650,
			height: 619
		}
	};

	const locations = {
		richland: {
			image: {
				alt: 'Kagen Coffee and Crepes Richland Uptown location',
				src: richland_location
			},
			address: {
				line2: 'Richland, WA 99354',
				line1: '270 Williams Blvd'
			},
			locationUrl: 'https://www.google.com/maps/place/270+Williams+Blvd,+Richland,+WA+99354/',

			orderUrl:
				'https://www.toasttab.com/kagen-coffee-crepes-270-williams-blvd/v3/?mode=fulfillment',

			hours: ['Monday-Saturday: 7am-2pm', 'Sunday : Closed'],
			name: 'Richland Uptown',

			phone: '509-851-7186',
			slug: {
				current: 'tri-cities',
				_type: 'slug'
			}
		}
	};
</script>

<Seo data={seoData} />
<!-- Hero -->
<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Locations</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			Find our nearest location and come join us! It's hard to beat a delicous crepe paired with a
			strong, handcrafted coffee.
		</p>
	</div>
</div>

<!-- Location Cards -->
<div class="bg-white px-6 pb-32 lg:px-8">
	<div class="max-w-6xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-5xl lg:px-8">
		<h2 id="products-heading" class="sr-only">Locations</h2>

		<div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
			<!-- Richland Location -->
			<div
				class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3"
			>
				<Img
					src={locations.richland.image.src}
					alt={locations.richland.image.alt}
					class="w-full h-full object-center object-cover group-hover:opacity-75"
				/>
			</div>
			<div class="flex-1 p-4 flex flex-col">
				<div class="flex-1 flex flex-col space-y-4">
					<h3 class="text-2xl font-medium text-gray-900">
						{locations.richland.name}
					</h3>
					<a href={locations.richland.locationUrl}>
						<p class="text-base text-gray-600">
							{locations.richland.address.line1}
						</p>
						<p class="text-base text-gray-600">{locations.richland.address.line2}</p>
					</a>
					<div class="flex flex-col">
						{#each locations.richland.hours as hour}
							<p class="text-base text-gray-600">{hour}</p>
						{/each}
					</div>
					<p class="text-base text-gray-800">
						Opening times may vary, please call to check, we always love hearing from you!
					</p>
				</div>
				<div class="flex-1">
					<div class="mt-4 sm:mt-6">
						<a href={locations.richland.orderUrl} class="btn variant-filled-primary min-w-[150px]">
							Order Online
						</a>
					</div>
					<div class="mt-4 sm:mt-6">
						<a
							href={`/menu/${locations.richland.slug.current}`}
							class="btn variant-ringed-primary min-w-[150px]"
						>
							View Menu
						</a>
					</div>
					<div class="mt-4 sm:mt-6">
						<a
							href={locations.richland.locationUrl}
							class="btn variant-ringed-primary min-w-[150px]"
						>
							Get Directions
						</a>
					</div>
					<div class="mt-4 sm:mt-6">
						<a
							href={`tel:${locations.richland.phone}`}
							class="btn variant-ringed-primary min-w-[150px]"
						>
							Call Us
						</a>
					</div>
				</div>
			</div>
			<!-- Next Location -->
		</div>
	</div>
</div>
