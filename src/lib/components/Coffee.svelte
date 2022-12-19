<script lang="ts">
	export let portableText;
	const { name, price } = portableText.value;
</script>

<div class="group relative">
	<div class="mt-4 flex flex-col justify-between">
		<div class="text-center">
			<h3 class="text-lg text-gray-900">
				{name}
			</h3>
		</div>
		<div class="mt-4 flex justify-around">
			<p class="text-sm font-medium text-gray-500">Large ${price.large}</p>
			<p class="text-sm font-medium text-gray-500">Medium ${price.medium}</p>
			<p class="text-sm font-medium text-gray-500">Small ${price.small}</p>
		</div>
	</div>
</div>
