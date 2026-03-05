<script lang="ts">
  import { Clock, CheckCircle2, AlertCircle, Calendar, Trophy, ChevronRight } from "@lucide/svelte";
  import { fade, slide } from "svelte/transition";

  interface Attempt {
    id: string;
    quizTitle: string;
    score: number;
    totalQuestions: number;
    date: string;
    timeSpent: string;
    status: 'completed' | 'failed' | 'in-progress';
  }

  interface Props {
    attempts: Attempt[];
  }

  let { attempts }: Props = $props();

  function getStatusColor(status: Attempt['status']) {
    switch (status) {
      case 'completed': return 'text-success bg-success/10';
      case 'failed': return 'text-destructive bg-destructive/10';
      case 'in-progress': return 'text-warning bg-warning/10';
      default: return 'text-muted-foreground bg-muted';
    }
  }

  function getScoreColor(score: number, total: number) {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'text-success';
    if (percentage >= 50) return 'text-warning';
    return 'text-destructive';
  }
</script>

<div class="space-y-6">
  <div class="flex items-center justify-between">
    <h2 class="text-2xl font-bold text-foreground">Recent Activity</h2>
    <button class="text-sm font-medium text-primary hover:underline">View all</button>
  </div>

  <div class="glass-card rounded-3xl overflow-hidden border border-border/50">
    {#if attempts.length > 0}
      <div class="divide-y divide-border/50">
        {#each attempts as attempt (attempt.id)}
          <div 
            class="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-muted/30 transition-colors group"
            in:fade
          >
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <Trophy size={24} />
              </div>
              <div>
                <h4 class="font-bold text-foreground group-hover:text-primary transition-colors">{attempt.quizTitle}</h4>
                <div class="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                  <span class="flex items-center gap-1">
                    <Calendar size={12} />
                    {attempt.date}
                  </span>
                  <span class="flex items-center gap-1">
                    <Clock size={12} />
                    {attempt.timeSpent}
                  </span>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between sm:justify-end gap-6">
              <div class="text-right">
                <p class="text-sm font-medium text-foreground">Score</p>
                <p class="text-lg font-bold {getScoreColor(attempt.score, attempt.totalQuestions)}">
                  {attempt.score}/{attempt.totalQuestions}
                </p>
              </div>
              
              <div class="flex items-center gap-2">
                <span class="px-3 py-1 rounded-full text-xs font-semibold capitalize {getStatusColor(attempt.status)}">
                    {#if attempt.status === 'completed'}
                        <CheckCircle2 size={12} class="inline mr-1" />
                    {:else if attempt.status === 'failed'}
                        <AlertCircle size={12} class="inline mr-1" />
                    {/if}
                    {attempt.status.replace('-', ' ')}
                </span>
                <ChevronRight size={18} class="text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="p-12 text-center text-muted-foreground">
        <p>No attempts recorded yet. Take a quiz to see your progress!</p>
      </div>
    {/if}
  </div>
</div>
