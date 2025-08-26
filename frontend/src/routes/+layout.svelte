<script lang="ts">
  import favicon from "$lib/assets/BOJ.png";
  import "$lib/styles/app.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div
  class=" bg-gradient-to-b from-light-bg to-light-tetiary-accent dark:from-dark-bg dark:to-dark-secondary-accent h-screen"
>
  {@render children?.()}
</div>
