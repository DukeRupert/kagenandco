<script lang="ts">
  import { createDialog, melt } from '@melt-ui/svelte';
  /** Internal helpers */
  import { X } from 'lucide-svelte';
  import { fly, fade } from 'svelte/transition';
 
  const {
    elements: {
      trigger,
      overlay,
      content,
      title,
      description,
      close,
      portalled,
    },
    states: { open },
  } = createDialog({
    forceVisible: true,
  });
</script>

<button on:m-click={() => console.log("click")} use:melt={$trigger}> Open Dialog </button>
 
<div use:melt={$portalled}>
  {#if $open}
    <div class="bg-red-500" use:melt={$overlay} />
    <div use:melt={$content}>
      <h2 use:melt={$title}>Dialog Title</h2>
      <p use:melt={$description}>Dialog description</p>
      <button use:melt={$close}> Close Dialog </button>
    </div>
  {/if}
</div>