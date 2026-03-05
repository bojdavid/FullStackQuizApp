<script lang="ts">
  import { getRankings } from "$lib/api/ranking";
  
  let rankings = getRankings();
</script>

<div class="max-w-[1000px] mx-auto min-h-[calc(100vh-100px)] py-12 px-4">
  <div class="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
    <div>
      <a href="/dashboard" class="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 w-fit mb-6">
        <i class="fa-solid fa-arrow-left"></i> Back to Dashboard
      </a>
      <h1 class="text-4xl font-bold mb-2 flex items-center gap-4">
        <i class="fa-solid fa-trophy text-warning"></i>
        Global Rankings
      </h1>
      <p class="text-muted-foreground text-lg">
        Compete against other learners and climb the AI Intelligence leaderboard!
      </p>
    </div>
    
    <div class="glass-card px-6 py-4 rounded-xl flex items-center gap-4 border-primary/20 bg-primary/5">
      <div class="text-4xl">😎</div>
      <div>
        <p class="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Your Rank</p>
        <p class="text-2xl font-bold text-primary">#5 <span class="text-sm font-normal text-foreground">/ 11,200 pts</span></p>
      </div>
    </div>
  </div>

  <div class="glass-card rounded-2xl overflow-hidden">
    <div class="bg-muted/50 p-4 grid grid-cols-12 gap-4 font-bold text-sm text-muted-foreground uppercase tracking-wider border-b border-border">
      <div class="col-span-2 text-center">Rank</div>
      <div class="col-span-7">User</div>
      <div class="col-span-3 text-right pr-4">Score</div>
    </div>
    
    <div class="divide-y divide-border/50">
      {#each rankings as user}
        <div class="p-4 grid grid-cols-12 gap-4 items-center transition-colors hover:bg-muted/20 {user.isCurrentUser ? 'bg-primary/10 border-l-4 border-l-primary' : 'border-l-4 border-l-transparent'}">
          
          <div class="col-span-2 flex justify-center items-center">
            {#if user.rank === 1}
              <div class="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center border border-warning">
                <i class="fa-solid fa-crown text-warning"></i>
              </div>
            {:else if user.rank === 2}
              <div class="w-10 h-10 rounded-full bg-slate-300/20 flex items-center justify-center border border-slate-400">
                <span class="font-bold text-slate-300">2</span>
              </div>
            {:else if user.rank === 3}
              <div class="w-10 h-10 rounded-full bg-orange-300/20 flex items-center justify-center border border-orange-400">
                <span class="font-bold text-orange-300">3</span>
              </div>
            {:else}
              <span class="font-bold text-xl text-muted-foreground">{user.rank}</span>
            {/if}
          </div>
          
          <div class="col-span-7 flex items-center gap-4">
            <span class="text-3xl bg-background w-12 h-12 rounded-full flex items-center justify-center border border-border shadow-sm">{user.avatar}</span>
            <div>
              <p class="font-bold text-lg {user.isCurrentUser ? 'text-primary' : ''}">
                {user.username} {user.isCurrentUser ? '(You)' : ''}
              </p>
              <p class="text-xs text-muted-foreground">Joined Oct 2025</p>
            </div>
          </div>
          
          <div class="col-span-3 text-right pr-4">
            <span class="font-mono font-bold text-lg">{user.score.toLocaleString()}</span>
            <span class="text-xs text-muted-foreground ml-1">pts</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
