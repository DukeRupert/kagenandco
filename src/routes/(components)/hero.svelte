<script lang="ts">
	import Image from '$lib/components/cloudinary-image.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { SITE_DATA } from '$lib/constants';

	const heroData = {
		title: 'Kagen Coffee & Crepes',
		subtext:
			'Coffee, crepes, and good company – the perfect recipe for lasting memories. Savor handcrafted coffee and delicious crepes while creating unforgettable moments with friends and family.'
	};
</script>

<div id="hero" class="relative isolate overflow-hidden pt-14">
	<!-- <div class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96" aria-hidden="true"></div> -->
	<div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
		<div
			class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
		>
			<h1
				class="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto"
			>
				{heroData.title}
			</h1>
			<div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
				<p class="text-lg leading-8 text-gray-600">{heroData.subtext}</p>
				<div class="mt-10 flex items-center gap-x-6">
					<Button variant="default" href={SITE_DATA.online_order_url}>Order Online</Button>
					<Button variant="outline" href="/menu">View menu</Button>
				</div>
			</div>
			<Image
				src="/Kagenandco/cgyc92xr8gqna2fw5mlw"
				alt="A delicous crepe with banana, strawberies and blueberries."
				eager={true}
				width="7360"
				height="4912"
				sizes="(min-width: 1536px) 33vw, 
						(min-width: 1280px) 33vw, 
						(min-width: 1024px) 50vw, 
						(min-width: 640px) 90vw,
						100vw"
				class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
			/>
		</div>
	</div>
	<div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
</div>
