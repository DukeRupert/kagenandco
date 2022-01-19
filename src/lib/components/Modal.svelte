<script lang="ts">
	import { clickOutside, touchOutside } from '$lib/clickOutside';
	import { modal, modalAction, siteData } from '$lib/stores';

	function closeModal() {
		modal.set(false);
	}
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div
	class="fixed {$modal ? 'z-10' : '-z-10'} inset-0 overflow-y-auto"
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
>
	<div
		class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
	>
		<div
			class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity {$modal
				? 'ease-out duration-300 opacity-100'
				: 'ease-in duration-200 opacity-0'}"
			aria-hidden="true"
		/>
		<!-- This element is to trick the browser into centering the modal contents. -->
		<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
			>&#8203;</span
		>
		<div
			class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 {$modal
				? 'ease-out duration-300 opacity-100 translate-y-0 sm:scale-100'
				: 'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}"
			use:clickOutside
			use:touchOutside
			on:click_outside={closeModal}
		>
			<div>
				<div class="mt-3 text-center sm:mt-5">
					<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
						Select a location
					</h3>
				</div>
			</div>

			{#each $siteData.order as order}
				<div class="mt-5 sm:mt-6">
					<a
						href={$modalAction == 'order' ? order.url : `/menu/${order.name.toLowerCase()}`}
						on:click={closeModal}
						class="inline-flex justify-center w-full rounded-3xl border border-transparent shadow-sm px-4 py-2 bg-custard-500 text-base font-medium text-black hover:bg-custard-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custard-300 sm:text-sm"
					>
						{order.name}
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>
