<script lang="ts">
  import { onMount } from "svelte";

  let rankings = $state<any[]>([]);
  let topThree = $derived(rankings.slice(0, 3));
  let others = $derived(rankings.slice(3, 7));

  onMount(async () => {
    const res = await fetch("/api/ranking");
    rankings = await res.json();
  });
</script>

<div class="glass-card rounded-xl p-6 h-full flex flex-col">
  <div class="flex justify-between items-center mb-6">
    <h3 class="text-xl font-bold flex items-center gap-2">
      <i class="fa-solid fa-trophy text-warning"></i>
      Global Leaderboard
    </h3>
    <a href="/dashboard/rankings" class="text-sm text-primary hover:underline"
      >View All</a
    >
  </div>

  <!-- Podium for Top 3 -->
  {#if topThree.length > 0}
    <div class="flex justify-center items-end gap-2 mb-8 h-32">
      <!-- 2nd Place -->
      <div class="flex flex-col items-center w-1/3">
        <div class="text-2xl mb-1">{topThree[1]?.avatar || ""}</div>
        <div class="text-xs font-semibold truncate w-full text-center">
          {topThree[1]?.username || ""}
        </div>
        <div
          class="w-full bg-slate-200 dark:bg-slate-700 h-16 rounded-t-md border-t-4 border-slate-400 flex justify-center items-center flex-col mt-2"
        >
          <span class="font-bold text-lg">2</span>
          <span
            class="text-[10px] text-muted-foreground max-w-[80px] break-words text-center leading-tight"
            >{topThree[1]?.score || 0} pts</span
          >
        </div>
      </div>

      <!-- 1st Place -->
      <div class="flex flex-col items-center w-1/3 relative z-10 -ml-2 -mr-2">
        <i class="fa-solid fa-crown text-warning absolute -top-4 text-xs"></i>
        <div class="text-3xl mb-1">{topThree[0]?.avatar || ""}</div>
        <div class="text-xs font-bold text-warning truncate w-full text-center">
          {topThree[0]?.username || ""}
        </div>
        <div
          class="w-full bg-warning/20 dark:bg-warning/30 h-24 rounded-t-lg border-t-4 border-warning flex justify-center items-center flex-col mt-2 shadow-[0_0_15px_rgba(255,193,7,0.3)]"
        >
          <span class="font-bold text-2xl text-warning">1</span>
          <span
            class="text-[10px] text-muted-foreground font-semibold max-w-[80px] break-words text-center leading-tight"
            >{topThree[0]?.score || 0} pts</span
          >
        </div>
      </div>

      <!-- 3rd Place -->
      <div class="flex flex-col items-center w-1/3">
        <div class="text-2xl mb-1">{topThree[2]?.avatar || ""}</div>
        <div class="text-xs font-semibold truncate w-full text-center">
          {topThree[2]?.username || ""}
        </div>
        <div
          class="w-full bg-orange-200/50 dark:bg-orange-900/40 h-12 rounded-t-md border-t-4 border-orange-400 flex justify-center items-center flex-col mt-2"
        >
          <span class="font-bold text-lg">3</span>
          <span
            class="text-[10px] text-muted-foreground max-w-[80px] break-words text-center leading-tight"
            >{topThree[2]?.score || 0} pts</span
          >
        </div>
      </div>
    </div>
  {/if}

  <!-- Runner ups List -->
  <div class="flex flex-col gap-3 overflow-y-auto flex-1 pr-2">
    {#each others as user}
      <div
        class="flex items-center justify-between p-2 rounded-lg w-full
                  {user.isCurrentUser
          ? 'bg-primary/20 border border-primary/30'
          : 'hover:bg-muted/50 transition-colors'}"
      >
        <div class="flex items-center gap-3 min-w-0">
          <span
            class="w-4 text-center font-bold text-muted-foreground text-sm flex-shrink-0"
            >{user.rank}</span
          >
          <span class="text-xl flex-shrink-0">{user.avatar}</span>
          <span
            class="font-medium truncate text-sm {user.isCurrentUser
              ? 'text-primary'
              : ''}"
          >
            {user.username}
            {user.isCurrentUser ? "(You)" : ""}
          </span>
        </div>
        <span
          class="font-bold text-sm bg-background px-2 py-1 rounded text-muted-foreground flex-shrink-0 ml-2"
        >
          {user.score}
        </span>
      </div>
    {/each}
  </div>
</div>
