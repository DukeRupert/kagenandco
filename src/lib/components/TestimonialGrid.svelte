<script>
	import StarRating from './reviews/StarRating.svelte';
</script>

<div id="reviews" class="relative isolate bg-white pb-32 pt-24 sm:pt-32">
	<div
		class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
		aria-hidden="true"
	>
		<div
			class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#fcc24c] to-[#fef0d2]"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		/>
	</div>
	<div
		class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
		aria-hidden="true"
	>
		<div
			class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#fcc24c] to-[#fef0d2] xl:ml-0 xl:mr-[calc(50%-12rem)]"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		/>
	</div>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-xl text-center">
			<h2 class="text-lg font-semibold leading-8 tracking-tight text-primary-600">Reviews</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				We love hearing that we have made a customer's day better
			</p>
		</div>
		<div
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
		>
			<figure
				class="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1"
			>
				<blockquote class="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
					<p>
						“Sooooo good! I have been back twice now, and have tried 3 different savory crepes. My
						fave is the one with the sausage and gravy. Next time I plan on trying one of their
						sweet crepes. Can't wait!”
					</p>
				</blockquote>
				<figcaption class="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
					<img
						class="h-10 w-10 flex-none rounded-full bg-gray-50"
						src="/reviewers/drita_dalessandro.webp"
						alt="drita dalessandro icon"
					/>
					<div class="flex-auto">
						<div class="font-semibold">Drita D'Alessandro</div>
						<div class="text-gray-600"><StarRating rating={5} /></div>
					</div>
				</figcaption>
			</figure>
			<div class="space-y-8 xl:contents xl:space-y-0">
				<div class="space-y-8 xl:row-span-2">
					<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
						<blockquote class="text-gray-900">
							<p>
								“What a great little treasure Richland has. They make these right in front of you
								they know what they are doing and are very fast a efficient.”
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img
								class="h-10 w-10 rounded-full bg-gray-50"
								src="/reviewers/carol_simmons.webp"
								alt="Carol Simmons icon"
							/>
							<div>
								<div class="font-semibold">Carol Simmons</div>
								<div class="text-gray-600"><StarRating rating={5} /></div>
							</div>
						</figcaption>
					</figure>
				</div>
				<div class="space-y-8 xl:row-start-1">
					<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
						<blockquote class="text-gray-900">
							<p>
								“This is a hidden gem. The crepes are fantastic, savory or sweet, delicious, coffees
								excellent too, service was fast and courteous, cute setup and will go again!”
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img
								class="h-10 w-10 rounded-full bg-gray-50"
								src="/reviewers/anna_christopher.webp"
								alt="Anna Christopher icon"
							/>
							<div>
								<div class="font-semibold">Anna Christopher</div>
								<div class="text-gray-600"><StarRating rating={5} /></div>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
			<div class="space-y-8 xl:contents xl:space-y-0">
				<div class="space-y-8 xl:row-start-1">
					<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
						<blockquote class="text-gray-900">
							<p>
								“I got strawberry paradise with boba and it was amazing. Tasted like a Starbucks
								pink drink but so much better and locally owned 😍 Workers were so friendly as well,
								overall great experience. Definitely coming back.”
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img
								class="h-10 w-10 rounded-full bg-gray-50"
								src="/reviewers/ellasyn_noack.webp"
								alt="Ellasyn Noack icon"
							/>
							<div>
								<div class="font-semibold">Ellasyn Noack (Ellasyngrace)</div>
								<div class="text-gray-600"><StarRating rating={5} /></div>
							</div>
						</figcaption>
					</figure>
				</div>
				<div class="space-y-8 xl:row-span-2">
					<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
						<blockquote class="text-gray-900">
							<p>
								“Love the coffee and crepes! They even do gluten free! Came here every day while we
								were in town! Yum!!”
							</p>
						</blockquote>
						<figcaption class="mt-6 flex items-center gap-x-4">
							<img
								class="h-10 w-10 rounded-full bg-gray-50"
								src="/reviewers/breanne_sims.webp"
								alt="Breanne Sims"
							/>
							<div>
								<div class="font-semibold">Breanne Sims</div>
								<div class="text-gray-600"><StarRating rating={5} /></div>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
	</div>
</div>
