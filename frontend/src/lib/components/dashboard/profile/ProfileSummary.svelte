<script lang="ts">
  import { userProfile as u } from "$lib/store/user.svelte";
  import { Camera, Trash2, Calendar, Mail } from "@lucide/svelte";
  import profile from "$lib/assets/profile.jpeg";

  let imgSrc: string = profile;
  let lastUpdated: string = "March 5, 2026";
</script>

<div class="flex flex-col md:flex-row items-center md:items-start gap-8 w-full">
  <!-- Profile Picture and profle picture actions -->
  <div class="relative group">
    <div
      class="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden ring-4 ring-primary/20 p-1 bg-gradient-to-br from-primary via-accent to-primary/50"
    >
      <div
        class="w-full h-full rounded-2xl overflow-hidden bg-card flex items-center justify-center"
      >
        {#if !imgSrc}
          <em class="text-5xl md:text-7xl font-bold text-gradient not-italic">
            {u.firstname[0]}{u.lastname[0]}
          </em>
        {:else}
          <img
            src={imgSrc}
            alt="profile"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        {/if}
      </div>

      <!-- Overlay for upload -->
      <div
        class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
      >
        <Camera size={32} class="text-white" />
      </div>
    </div>

    <!-- Floating action buttons -->
    <div class="absolute -bottom-2 -right-2 flex gap-1">
      <button
        class="p-2 bg-card border border-border rounded-xl text-error hover:bg-error/10 transition-colors shadow-lg"
        title="Delete Pattern"
      >
        <Trash2 size={16} />
      </button>
    </div>
  </div>

  <!-- Summary :name, email, last updated-->
  <div class="flex-1 text-center md:text-left pt-2">
    <h3
      class="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-2"
    >
      {u.firstname}
      {" "}{u.lastname}
    </h3>

    <div class="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
      <div
        class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
      >
        <Mail size={14} />
        {u.email}
      </div>

      <div
        class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium"
      >
        <Calendar size={14} />
        Updated {lastUpdated}
      </div>
    </div>

    <div
      class="mt-6 flex justify-center md:justify-start gap-8 border-t border-border/50 pt-6"
    >
      <div class="text-center md:text-left">
        <p class="text-2xl font-bold text-foreground">24</p>
        <p class="text-xs text-muted-foreground font-semibold uppercase">
          Quizzes Taken
        </p>
      </div>
      <div class="text-center md:text-left">
        <p class="text-2xl font-bold text-success">88%</p>
        <p class="text-xs text-muted-foreground font-semibold uppercase">
          Avg Score
        </p>
      </div>
      <div class="text-center md:text-left">
        <p class="text-2xl font-bold text-primary">12</p>
        <p class="text-xs text-muted-foreground font-semibold uppercase">
          Resources
        </p>
      </div>
    </div>
  </div>
</div>
