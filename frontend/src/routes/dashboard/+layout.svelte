<script lang="ts">
  import AppSidebar from "$lib/components/dashboard/AppSidebar.svelte";

  let { children } = $props();
</script>

<section class=" relative max-w-[1280px] mx-auto overflow-x-hidden">
  {@render children?.()}
</section>
