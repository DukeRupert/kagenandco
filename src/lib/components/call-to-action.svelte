<script lang="ts">
	import { SITE_DATA } from '$lib/constants';
    import { Button } from "$lib/components/ui/button/index.js";
</script>
<div class="bg-white">
	<div
		class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8"
	>
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
			Need some coffee?<br /> It pairs great with a crepe.
		</h2>
		<div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
			<Button href={SITE_DATA.online_order_url} variant="default">Order online</Button>
			<Button href={SITE_DATA.gmap} variant="outline"
				>Get directions <span aria-hidden="true">→</span></Button
			>
		</div>
	</div>
</div>