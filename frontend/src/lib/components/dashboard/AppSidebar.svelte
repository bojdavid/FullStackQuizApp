<script lang="ts">
  let { closeSideBar } = $props();
  import { X } from "@lucide/svelte";
  import { page } from "$app/state";

  interface sideBarRoutes {
    name: string;
    route: string;
  }
  let routes: sideBarRoutes[] = [
    { name: "Home", route: "/dashboard" },
    { name: "Resources", route: "/dashboard/resources" },
    { name: "Profile", route: "/dashboard/profile" },
  ];
</script>

<div class="flex w-full gap-0">
  <section
    class="xl:min-h-[832px] h-screen max-h-[1200px] w-full min-w-[200px] max-w-[400px] bg-light-bg dark:bg-dark-bg pr-5 relative shadow-lg p-3"
  >
    <p>Currently at {page.url.pathname}</p>

    {#if page.error}
      <span class="red">Problem detected</span>
    {:else}
      <span class="small">All systems operational</span>
    {/if}
    <button class="absolute right-2 md:hidden" onclick={closeSideBar}>
      <X size={40} />
    </button>
    <div class="text-2xl py-10 h-full flex flex-col">
      <header>header</header>
      <main class="flex flex-col gap-5 mt-20">
        {#each routes as route}
          <a href={route.route}>{route.name}</a>
        {/each}
      </main>
      <footer class="mt-auto">
        <a href="./" class="text-error">Logout</a>
      </footer>
    </div>
  </section>
  <!-- Overlay-->
  <div class=" bg-dark-bg/30 w-full md:hidden" onclick={closeSideBar}></div>
</div>
