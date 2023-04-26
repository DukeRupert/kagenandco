<script lang="ts">
	import type { Reviews, Testimonial } from './reviews';
	import Column from './Column.svelte';

	const reviews: Testimonial[] = [
		{
			title: 'What a great little treasure Richland has.',
			body: 'They make these right in front of you they know what they are doing and are very fast a efficient.',
			author: 'Carol Simmons',
			rating: 5,
			src: '/reviewers/carol_simmons.webp'
		},
		{
			title: 'The restaurant is beautiful.',
			body: 'The employees are almost to nice. The Crepes are exquisite...',
			author: 'Benjamin Inglis',
			rating: 4,
			src: '/reviewers/benjamin_inglis.webp'
		},
		{
			title: 'Both were very tasty.',
			body: 'The inside was clean and nicely decorated. My fiancée got the breakfast in bed crepe and I got the monthly special, peaches and creame. Both were very tasty.',
			author: 'Andrew Brasser',
			rating: 4,
			src: '/reviewers/andrew_brasser.webp'
		},
		{
			title: 'This is a hidden gem',
			body: 'the crepes are fantastic,  savory or sweet, delicious, coffees excellent too, service was fast and courteous, cute setup and will go again!',
			author: 'Anna Christopher',
			rating: 5,
			src: '/reviewers/anna_christopher.webp'
		},
		{
			title: 'Sooooo good',
			body: "I have been back twice now, and have tried 3 different savory crepes. My fave is the one with the sausage and gravy. Next time I plan on trying one of their sweet crepes. Can't wait!",
			author: "Drita D'Alessandro",
			rating: 5,
			src: '/reviewers/drita_dalessandro.webp'
		},
		{
			title: "It's such a cute spot to chat.",
			body: "I always come for a girl's brunch date! It's such a cute spot to chat. A very warm and cozy aesthetic, and the crepes are delicious!",
			author: 'Meriah Rodriguez',
			rating: 5,
			src: '/reviewers/meriah_rodriguez.webp'
		},
		{
			title: 'Great service as well.',
			body: 'Thanks so much for the wonderful crepes ! I have been meaning to visit your store for a while . I shared a Breakfast in Bed savory crepe and a Mixed berry sweet crepe with my daughter.',
			author: 'Rebecca Bagley',
			rating: 5,
			src: '/reviewers/rebecca_bagley.webp'
		},
		{
			title: 'I love their pesto so much!',
			body: "Came here with hubby , so glad we did. His fave & now my kiddo's fave as well, is the Monte Cristo, it comes with a side of raspberry jam. Will come back again & again. The atmosphere, the music, lovely. Super friendly employees. Love this place!",
			author: 'Rachel P',
			rating: 5,
			src: '/reviewers/rachel_p.webp'
		},
		{
			title: 'The turkey bacon is my FAVORITE',
			body: 'Love this place ! Been here on and off since they opened here in Tri. Amazing family and I couldn’t be more happier to support this place. We have family breakfast here weekends sometimes and no matter when we go amazing service from the front staff.',
			author: 'Jmacc',
			rating: 5,
			src: '/reviewers/jmacc.webp'
		},
		{
			title: 'Sooooo good!!!',
			body: 'I got strawberry paradise with boba and it was amazing. Tasted like a Starbucks pink drink but so much better and locally owned 😍 Workers were so friendly as well, overall great experience. Definitely coming back.',
			author: 'Ellasyn Noack (Ellasyngrace)',
			rating: 5,
			src: '/reviewers/ellasyn_noack.webp'
		},
		{
			title: 'Friendly service too!',
			body: 'One of the best and affordable mochas I’ve had and their default is 4 shots! I had the chipotle chicken crepe and it was delicious and very filling.',
			author: 'Matthew Dullea',
			rating: 5,
			src: '/reviewers/matthew_dullea.webp'
		},
		{
			title: 'They even do gluten free!',
			body: 'Love the coffee and crepes! They even do gluten free! Came here every day while we were in town! Yum!!',
			author: 'Breanne Sims',
			rating: 5,
			src: '/reviewers/breanne_sims.webp'
		},
		{
			title: 'The absolute best place!!!!!',
			body: 'They make a lovely traditional cappuccino. The crepes are always delicious. And Hot Mess Baking treats in the pastry case are pretty tasty too. If they have butterbeer cookies, try one. They are amazing.',
			author: 'Kassandra Bell',
			rating: 5,
			src: '/reviewers/kassandra_bell.webp'
		},
		{
			title: 'Absolutely massive crepes.',
			body: 'Honestly was not expecting a full meal but was happily surprised. Tasted amazing and the syrup they have his delightful. Just an all around great shop to stop in at.',
			author: 'Chancey Hiatt',
			rating: 5,
			src: '/reviewers/chancey_hiatt.webp'
		},
		{
			title: 'So damn good.',
			body: 'In town for work and most cafes with food were closed until 11am. I rolled in here at 8 ordered a mocha and All American Crepe. So damn good. My mouth is watering just thinking about it.',
			author: 'Logan Walters',
			rating: 5,
			src: '/reviewers/logan_walters.webp'
		},
		{
			title: 'Fun place to visit.',
			body: "On top of all the amazing food and drinks. Kagen held a 20th anniversary day for Harry Potter complete with Butter beer crepes and Pumpkin juice. Other goodies we're available as well. It was fun to see everyone dressing up in their favorite HP theme.",
			author: 'Dana Langheid',
			rating: 5,
			src: '/reviewers/dana_langheid.webp'
		}
	];

	function splitArray(array: Testimonial[], numParts: number) {
		let result: Reviews[] = [];
		for (let i = 0; i < array.length; i++) {
			let index = i % numParts;
			if (!result[index]) {
				result[index] = [];
			}
			result[index].push(array[i]);
		}
		return result;
	}

	let columns: Reviews[] = splitArray(reviews, 2);
</script>

<section id="reviews" aria-labelledby="reviews-title" class="relative">
	<div class="mx-auto max-w-7xl lg:gap-x-8 lg:px-8 text-center">
		<div class="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-24 lg:pb-56 xl:col-span-6">
			<h2 class="unstyled text-lg font-semibold leading-8 tracking-tight text-primary-600">
				Reviews
			</h2>
			<p class="unstyled mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				What Our Customers Think
			</p>
			<p class="unstyled mt-6 text-lg leading-8 text-gray-600">
				We love hearing how we have made your day better :)
			</p>

			<!-- Review Grid -->
			<div
				class="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2"
			>
				<!-- Review Columns -->
				<Column reviews={[...columns[0], ...columns[1]]} msPerPixel={10} />
				<!-- <ReviewColumn
					reviews={[...columns[1], ...columns[2][1]]}
					className="hidden md:block"
					reviewClassName={(reviewIndex) => reviewIndex >= columns[1].length && 'lg:hidden'}
					msPerPixel={15}
				/> -->
				<Column
					reviews={[...columns[1], ...columns[0]]}
					className="hidden md:block"
					msPerPixel={15}
				/>

				<div
					class="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-surface-50"
				/>
				<div
					class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface-50"
				/>
			</div>
		</div>
	</div>
</section>
