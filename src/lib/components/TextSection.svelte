<script lang="ts">
	import ContentBlocks from '@arzidava/svelte-portable-text';
	export let name;
	export let data;
</script>

<ContentBlocks blocks={data} serializers={{}} />
