<script lang="ts">
	import PrimaryBanner from '$lib/components/PrimaryBanner.svelte';
	import LocationsBanner from '$lib/components/LocationsBanner.svelte';
	import ModalLocation from '$lib/components/ModalLocation.svelte';

	let active = false;
	let type = 'order';

	function closeModal() {
		active = false;
	}

	function openModal(event) {
		active = true;
		type = event.detail;
	}
</script>

<ModalLocation on:close={closeModal} {active} {type} />
<PrimaryBanner on:active={openModal} />
<LocationsBanner />
