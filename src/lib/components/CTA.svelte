<script lang="ts">
	import coffee_cup from '/src/lib/assets/coffee_cup_with_coffee_beans_kagen_coffee_and_crepes_square.jpg?enhanced';
	import { Button } from "$lib/components/ui/button/index.js";
</script>

<div id="cta-coffee-club" class="relative isolate bg-white pb-32 pt-24 sm:pt-32">
	<div class="relative bg-secondary-900">
		<div class="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
			<enhanced:img
				class="h-full w-full object-cover"
				src={coffee_cup}
				alt="A Kagen Coffee and Crepes mug with whole coffee beans sitting on the table in front of it."
			/>
			<svg
				viewBox="0 0 926 676"
				aria-hidden="true"
				class="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
			>
				<path
					fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
					fill-opacity=".4"
					d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
				/>
				<defs>
					<linearGradient
						id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
						x1="926.392"
						x2="-109.635"
						y1=".176"
						y2="321.024"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#776FFF" />
						<stop offset="1" stop-color="#FF4694" />
					</linearGradient>
				</defs>
			</svg>
		</div>
		<div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
			<div class="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
				<h2 class="text-base font-semibold leading-7 text-primary-500">Kagen's Coffee Club</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
					Enjoy a cup at home.
				</p>
				<p class="mt-6 text-base leading-7 text-gray-300">
					For those who are up with the sun and ready to control the day and not let the day control
					you. Yea we got you! Order a bag or join our coffee club today.
				</p>
				<div class="mt-8">
					<Button href="/products/the-rooster" >Shop Coffee</Button>
				</div>
			</div>
		</div>
	</div>
</div>
