<script lang="ts">
  import LightSwitch from "../common/LightSwitch.svelte";
  import profile from "$lib/assets/profile.jpeg";
  import { userProfile as u } from "$lib/store/user.svelte";
  import { Bell } from "@lucide/svelte";

  function getGreeting(): string {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    return "Good evening";
  }

  const greeting = $derived(getGreeting());
</script>

<header class="flex items-center justify-between w-full py-4">
  <div class="hidden sm:block">
    <h2 class="text-xl font-bold text-foreground">{greeting}, <span class="text-primary">{u.firstname}</span></h2>
    <p class="text-xs text-muted-foreground font-medium uppercase tracking-wider">Welcome back to your dashboard</p>
  </div>
  
  <div class="flex items-center gap-3 sm:gap-6 ml-auto">
    <button class="p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors relative hidden sm:block">
      <Bell size={20} />
      <span class="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background"></span>
    </button>

    <div class="flex items-center gap-3 pl-3 sm:pl-6 sm:border-l border-border/50">
      <div class="text-right hidden sm:block">
        <p class="text-sm font-bold text-foreground">{u.firstname} {u.lastname}</p>
        <p class="text-xs text-muted-foreground">Premium Account</p>
      </div>
      <div class="relative group">
        <div class="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
           <img src={profile} alt="Profile" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <div class="pl-2 border-l border-border/50">
       <LightSwitch size={32} />
    </div>
  </div>
</header>
