<script lang="ts">
  import AppSidebar from "$lib/components/dashboard/AppSidebar.svelte";
  import NavBar from "$lib/components/dashboard/NavBar.svelte";
  import { Menu } from "@lucide/svelte";
  import { fade, fly } from "svelte/transition";

  let { children } = $props();

  let isSidebarOpen = $state(false);

  const toggleSidebar = () => {
    isSidebarOpen = !isSidebarOpen;
  };

  const closeSidebar = () => {
    isSidebarOpen = false;
  };
</script>

<div class="flex h-screen bg-background text-foreground overflow-hidden">
  <!-- Mobile Sidebar Overlay -->
  {#if isSidebarOpen}
    <div
      role="button"
      tabindex="0"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
      onclick={closeSidebar}
      onkeydown={(e) => e.key === "Escape" && closeSidebar()}
      transition:fade={{ duration: 200 }}
    ></div>
  {/if}

  <!-- Sidebar Container -->
  <aside
    class="fixed inset-y-0 left-0 bottom-0 z-50 w-72 transform transition-transform duration-300 ease-in-out
    md:sticky md:top-0 md:translate-x-0 md:h-screen md:shrink-0 overflow-y-auto
    {isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}"
  >
    <AppSidebar closeSideBar={closeSidebar} />
  </aside>

  <!-- Main Content Area -->
  <div class="flex flex-col flex-1 min-w-0 relative h-full">
    <!-- Top Navigation with Menu Toggle for Mobile -->
    <header
      class="h-16 flex items-center px-4 md:px-8 bg-background/80 backdrop-blur-md sticky top-0 z-30 border-b border-border/50 shrink-0"
    >
      <button
        onclick={toggleSidebar}
        class="p-2 mr-2 rounded-lg hover:bg-muted md:hidden text-muted-foreground transition-colors"
        aria-label="Toggle Menu"
      >
        <Menu size={24} />
      </button>
      <div class="flex-1">
        <NavBar />
      </div>
    </header>

    <!-- Scrollable content area -->
    <main class="flex-1 overflow-y-auto p-4 md:p-8">
      <div class="max-w-[1400px] mx-auto w-full">
        {@render children?.()}
      </div>
    </main>
  </div>
</div>

<style>
  /* Ensure smooth transitions for sidebar */
  aside {
    box-shadow: 4px 0 24px -12px rgba(0, 0, 0, 0.1);
  }
</style>
