<script>
	const buttons = [
		{
			title: 'Our Stores',
			link: '/locations'
		}
	];
</script>

<!-- Hero card -->
<div class="relative h-[75vh]">
	<div class="max-w-7xl mx-auto h-full sm:px-6 lg:px-8">
		<div class="relative h-full flex justify-center items-center sm:overflow-hidden">
			<div class="absolute inset-0">
				<img
					class="h-full w-full object-cover"
					src="/latte_large.webp"
					alt="A steaming hot Kagen Coffee & Crepes mug sitting on a wooden table featuring a form art leaf"
				/>
			</div>
			<div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
				<div class="mt-10 max-w-sm mx-auto sm:flex sm:justify-center">
					<div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
						<a
							href={buttons[0].link}
							class="flex items-center justify-center px-4 py-3 border-2 text-base uppercase font-medium rounded-3xl shadow-sm text-white hover:bg-custard-500 hover:border-custard-500 transition-all ease-in sm:px-8"
						>
							{buttons[0].title}
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
