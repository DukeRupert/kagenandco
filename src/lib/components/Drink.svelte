<script lang="ts">
	export let name;
	export let price;
</script>

<div class="group relative">
	<div class="mt-4 flex flex-col justify-between">
		<div class="text-center">
			<h3 class="text-lg text-gray-900">
				{name}
			</h3>
		</div>
		<div class="mt-4 flex justify-around">
			<p class="text-sm font-medium text-gray-500">${price}</p>
		</div>
	</div>
</div>
