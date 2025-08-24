<script lang="ts">
  import favicon from "$lib/assets/BOJ.png";
  import "$lib/styles/app.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
