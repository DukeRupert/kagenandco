<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import Link from './Link.svelte';
	export let portableText;
	const { body } = portableText.value;
</script>

<PortableText value={body} components={{ marks: { link: Link } }} />
