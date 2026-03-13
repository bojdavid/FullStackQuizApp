<script lang="ts">
  import { ChevronLeft, GraduationCap, Timer } from "@lucide/svelte";
  import LightSwitch from "../common/LightSwitch.svelte";
  import { goto } from "$app/navigation";
  import { fade } from "svelte/transition";

  let { title } = $props();

  const goToDashboard = () => {
    goto("/dashboard");
  };
</script>

<nav class="w-full flex items-center justify-between py-6 mb-2" in:fade>
  <div class="flex items-center gap-2 md:gap-4">
    <button
      onclick={goToDashboard}
      class="p-2 hover:bg-muted rounded-xl transition-all duration-300 group flex items-center gap-1 text-muted-foreground hover:text-foreground"
      aria-label="Back to Dashboard"
    >
      <ChevronLeft
        size={24}
        class="group-hover:-translate-x-1 transition-transform"
      />
      <span class="hidden sm:inline font-medium text-sm">Dashboard</span>
    </button>

    <div class="h-8 w-[1px] bg-border mx-1 hidden sm:block"></div>

    <div class="flex flex-col">
      <div class="flex items-center gap-2">
        <div
          class="bg-primary/10 text-primary p-1 rounded-md hidden md:flex items-center justify-center"
        >
          <GraduationCap size={14} />
        </div>
        <span
          class="text-[10px] font-bold text-primary uppercase tracking-widest leading-none"
          >Quiz Session</span
        >
      </div>
      <h1
        class="text-lg md:text-2xl font-bold text-foreground truncate max-w-[150px] sm:max-w-[300px] md:max-w-md"
      >
        {title}
      </h1>
    </div>
  </div>

  <div class="flex items-center gap-3">
    <div
      class="hidden md:flex items-center gap-2 px-4 py-2 bg-muted/40 rounded-full border border-border/50"
    >
      <div class="relative flex h-2 w-2">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
        ></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"
        ></span>
      </div>
      <span
        class="text-[11px] font-medium text-muted-foreground uppercase tracking-tight"
        >Focus Mode</span
      >
    </div>

    <div
      class="flex items-center justify-center p-1.5 hover:bg-muted rounded-xl transition-colors text-muted-foreground hover:text-foreground"
    >
      <LightSwitch size={20} />
    </div>
  </div>
</nav>
