<script lang="ts">
	import Image from '$lib/components/cloudinary-image.svelte'
	import Seo from '$lib/components/SEO.svelte';
	import PageWrapper from '$lib/components/PageWrapper.svelte';
	
	const eyebrow = "About Us"
	const title = "Our Story"
	const description = `Families and friends need a place to gather. A place to visit, catch up and simply enjoy life
			together. At KCC we believe in togetherness and community. My family’s best conversations
			growing up happened around a table while snacking on tasty food.`
	const seoData = {
		title: `Kagen Coffee & Crepes: ${title}`,
		description: description,
		url: 'https://www.kagenandco.com/about-us',
		og: {
			src: 'https://www.kagenandco.com/images/kagen_coffee_and_crepes_owner_og.jpg',
			alt: 'Kagen Coffee and Crepes landing page',
			mimeType: 'image/jpg',
			width: 1200,
			height: 630
		}
	};

	
	 
</script>

<Seo data={seoData} />
<PageWrapper {eyebrow} {title} {description}>
	<div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
		<div class="mt-10 max-w-2xl">
			<p>
				When my wife and I would travel our favorite thing to do was visit crepe shops. It was then
				that we realized what we wanted to create for our community - a gathering place. A fun place
				to visit a friend, a quiet place to do homework, a warm place to meet up with your small
				group. Here, we bring you our heart and passion through our love of crepes, coffee, locally
				sourced ciders and wine. So come on down, order a crepe and start making memories.
			</p>

			<p class="mt-8">
				Keep following us here, Facebook, and Instagram to see our future growth plans!
			</p>
		</div>
		<figure class="mt-16">
			<Image
				class="aspect-video rounded-xl bg-gray-50 object-cover"
				src="/Kagenandco/kagen_coffee_and_crepes_owner_ge3yhz"
				alt="Kagen Cox, owner of Kagen Coffee and Crepes"
				width="1310"
				height="863"
				sizes="(min-width: 1024px) 75vw, 100vw"
			/>
			<figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
				<strong class="font-semibold text-gray-900">Kagen Cox</strong> – Owner
			</figcaption>
		</figure>
	</div>
</PageWrapper>
