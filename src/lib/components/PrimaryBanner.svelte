<script lang="ts">
	import { siteData } from '$lib/stores';
</script>

<!-- Hero card -->
<div class="relative h-[35vh] md:h-[95vh] overflow-hidden">
	<div class="w-full mx-auto h-full">
		<div class="relative bg-black h-full flex justify-center items-center sm:overflow-hidden">
			<div class="absolute inset-0 bg-blend-overlay">
				<img
					class="h-full w-full object-cover bg-blend-overlay"
					src="/crepe_strawberry.webp"
					alt="A strawberry crepe wtih chocoalte sauce and whipped cream"
				/>
			</div>

			<div class="relative mr-32 px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
				<div class="w-full mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
					<a
						href={$siteData.order[0].url}
						class="flex items-center justify-center px-4 py-3 border-2 text-base md:text-xl uppercase font-medium rounded-3xl shadow-sm text-white hover:bg-custard-500 hover:border-custard-500 transition-all ease-in sm:px-8"
					>
						Order Now
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
