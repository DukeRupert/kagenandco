<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';

	let className: string = '';
	export { className as class };
	export let src = '';
	export let alt = '';
	export let height = '';
	export let width = '';
	export let sizes = `(min-width: 1536px) 33vw, 
                        (min-width: 1280px) 30vw, 
                        (min-width: 1024px) 25vw, 
                        (min-width: 768px) 50vw, 
                        (min-width: 640px) 90vw,
                        100vw`;
	export let eager = false;
</script>

<CldImage
	{src}
	{alt}
	{height}
	{width}
	{sizes}
	class={className}
	loading={eager ? "eager" : "lazy"}
/>
