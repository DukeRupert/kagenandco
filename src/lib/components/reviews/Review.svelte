<script lang="ts">
	import StarRating from './StarRating.svelte';
	import type { Testimonial } from './reviews';
	export let data: Testimonial;
	export let className = '';
	const { rating, title, body, author, src } = data;

	function calculateAnimationDelay() {
		let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s'];
		return possibleAnimationDelays[Math.floor(Math.random() * possibleAnimationDelays.length)];
	}
	let animationDelay = calculateAnimationDelay();
</script>

<figure
	class="flex flex-col animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5 {className}"
	style="animation-delay: {animationDelay}"
>
	<blockquote class="">
		<StarRating {rating} />
		<p class="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
			{title}
		</p>
		<p class="mt-3 text-base leading-7">{body}</p>
	</blockquote>

	<figcaption class="mt-3 w-full flex-1 flex justify-center items-center gap-x-4 text-sm">
		<img class="h-10 w-10 rounded-full bg-gray-50" {src} alt={author} loading="lazy" />
		<div class="before:content-['–_']">{author}</div>
	</figcaption>
</figure>
