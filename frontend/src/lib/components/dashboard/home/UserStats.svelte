<script lang="ts">
  import { onMount } from "svelte";

  let stats = $state<any>(null);

  onMount(async () => {
    const res = await fetch("/api/user");
    stats = await res.json();
  });
</script>

<div class="glass-card rounded-xl p-6 h-full flex flex-col justify-between">
  <div>
    <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
      <i class="fa-solid fa-chart-pie text-primary"></i>
      Your AI Readiness
    </h3>
    <p class="text-sm text-muted-foreground mb-6">
      Analyzing your performance across all generated quizzes to determine your
      learning pulse.
    </p>
  </div>

  <div class="grid grid-cols-2 gap-4">
    <div
      class="bg-primary/10 rounded-lg p-4 flex flex-col items-center justify-center border border-primary/20"
    >
      <span class="text-3xl font-bold text-primary"
        >{stats?.averageScore || 0}%</span
      >
      <span class="text-xs text-muted-foreground text-center mt-1"
        >Avg. Accuracy</span
      >
    </div>

    <div
      class="bg-accent/10 rounded-lg p-4 flex flex-col items-center justify-center border border-accent/20"
    >
      <span class="text-3xl font-bold text-accent"
        >{stats?.totalQuizzesTaken || 0}</span
      >
      <span class="text-xs text-muted-foreground text-center mt-1"
        >Quizzes Taken</span
      >
    </div>

    <div
      class="bg-success/10 rounded-lg p-4 flex flex-col items-center justify-center border border-success/20"
    >
      <span class="text-3xl font-bold text-success"
        >{stats?.correctAnswers || 0}</span
      >
      <span class="text-xs text-muted-foreground text-center mt-1"
        >Correct Answers</span
      >
    </div>

    <div
      class="bg-warning/10 rounded-lg p-4 flex flex-col items-center justify-center border border-warning/20"
    >
      <span class="text-3xl font-bold text-warning"
        >{stats?.totalQuestionsAnswered || 0}</span
      >
      <span class="text-xs text-muted-foreground text-center mt-1"
        >Questions Faced</span
      >
    </div>
  </div>

  <button
    class="w-full mt-6 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium py-2 rounded-lg transition-colors border border-border"
  >
    View Detailed Analytics
  </button>
</div>
