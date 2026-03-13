<script lang="ts">
  import {
    X,
    LogOut,
    Home,
    FileText,
    User,
    Trophy,
    LayoutDashboard,
  } from "@lucide/svelte";
  import { page } from "$app/state";

  let { closeSideBar } = $props();

  interface sideBarRoutes {
    name: string;
    route: string;
    icon: any;
  }

  let routes: sideBarRoutes[] = [
    { name: "Home", route: "/dashboard", icon: LayoutDashboard },
    { name: "Resources", route: "/dashboard/resources", icon: FileText },
    { name: "Profile", route: "/dashboard/profile", icon: User },
    { name: "Rankings", route: "/dashboard/rankings", icon: Trophy },
  ];
</script>

<aside
  class="flex flex-col h-full bg-card border-r border-border/50 text-card-foreground p-6"
>
  <!-- Brand / Header -->
  <div class="flex items-center justify-between mb-8">
    <div class="flex items-center gap-2">
      <div
        class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground"
      >
        <LayoutDashboard size={24} />
      </div>
      <span class="text-2xl font-bold tracking-tight text-gradient">QuizAI</span
      >
    </div>

    <button
      class="p-2 hover:bg-muted rounded-lg md:hidden text-muted-foreground transition-colors"
      onclick={closeSideBar}
      aria-label="Close Sidebar"
    >
      <X size={24} />
    </button>
  </div>

  <!-- Navigation -->
  <nav class="flex-1 space-y-2">
    {#each routes as route}
      <a
        href={route.route}
        onclick={closeSideBar}
        class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
        {page.url.pathname === route.route
          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
          : 'hover:bg-muted text-muted-foreground hover:text-foreground'}"
      >
        <div
          class="{page.url.pathname === route.route
            ? 'text-primary-foreground'
            : 'text-muted-foreground group-hover:text-primary'} transition-colors"
        >
          <route.icon size={20} />
        </div>
        <span class="font-medium">{route.name}</span>
      </a>
    {/each}
  </nav>

  <!-- Footer / Logout -->
  <div class="pt-6 border-t border-border/50">
    <a
      href="/"
      class="flex items-center gap-3 px-4 py-3 rounded-xl text-error hover:bg-error/10 transition-colors group"
    >
      <LogOut
        size={20}
        class="group-hover:translate-x-1 transition-transform"
      />
      <span class="font-medium">Logout</span>
    </a>
  </div>
</aside>
