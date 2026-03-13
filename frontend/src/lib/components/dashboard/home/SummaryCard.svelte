<script lang="ts">
  import { X, Calendar, Clock, Target, Play, BarChart2 } from "@lucide/svelte";
  let { cardData, viewProgressFunction, takeQuizFunction, deleteCard } =
    $props();

  let id: string = cardData.id;
  let title: string = cardData.quizTitle;
  let date: string = cardData.date;
  let accuracy: number = cardData.accuracy;
  let time: string = cardData.time;

  // Visual helper for accuracy color based on performance
  const getAccuracyColor = (val: number) => {
    if (val >= 85) return "text-success";
    if (val >= 70) return "text-primary";
    if (val >= 50) return "text-warning";
    return "text-error";
  };
</script>

<div
  class="glass-card group relative flex flex-col w-full min-h-[320px] rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
>
  <!-- Decorative Background Glow -->
  <div
    class="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"
  ></div>

  <!-- Delete Action -->
  <button
    type="button"
    class="absolute right-3 top-3 p-1.5 rounded-full text-muted-foreground/30 hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 cursor-pointer"
    aria-label="Delete quiz"
    onclick={() => deleteCard(id)}
  >
    <X size={16} />
  </button>

  <!-- Card Header -->
  <div class="mb-6">
    <div class="flex items-center gap-2 mb-2">
      <span
        class="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest"
      >
        Quiz Module
      </span>
      {#if accuracy >= 90}
        <span
          class="px-2 py-0.5 rounded-md bg-success/10 text-success text-[10px] font-bold uppercase tracking-widest"
        >
          Mastered
        </span>
      {/if}
    </div>
    <h4
      class="font-bold text-xl leading-snug line-clamp-2 text-foreground group-hover:text-primary transition-colors duration-300"
    >
      {title}
    </h4>
  </div>

  <!-- Performance Stats -->
  <div class="flex-1 space-y-5">
    <div class="grid grid-cols-2 gap-3">
      <!-- Accuracy Stat -->
      <div
        class="flex flex-col p-3 rounded-xl bg-muted/20 border border-border/40 backdrop-blur-sm"
      >
        <div class="flex items-center gap-1.5 text-muted-foreground mb-1">
          <Target size={14} class="opacity-70" />
          <span
            class="text-[10px] font-bold uppercase tracking-tight opacity-70"
            >Accuracy</span
          >
        </div>
        <div class="flex items-baseline gap-0.5">
          <span
            class="text-2xl font-black tracking-tight {getAccuracyColor(
              accuracy,
            )}">{accuracy}</span
          >
          <span class="text-xs font-bold opacity-40">%</span>
        </div>
      </div>

      <!-- Time Stat -->
      <div
        class="flex flex-col p-3 rounded-xl bg-muted/20 border border-border/40 backdrop-blur-sm"
      >
        <div class="flex items-center gap-1.5 text-muted-foreground mb-1">
          <Clock size={14} class="opacity-70" />
          <span
            class="text-[10px] font-bold uppercase tracking-tight opacity-70"
            >Time</span
          >
        </div>
        <div class="flex items-baseline">
          <span class="text-xl font-bold text-foreground truncate">{time}</span>
        </div>
      </div>
    </div>

    <!-- Timeline Info -->
    <div class="flex items-center gap-3 px-1">
      <div
        class="w-8 h-8 rounded-lg bg-secondary/40 border border-border/20 flex items-center justify-center"
      >
        <Calendar size={16} class="text-muted-foreground" />
      </div>
      <div class="flex flex-col">
        <span
          class="text-[9px] uppercase font-bold tracking-wider text-muted-foreground/60 leading-none"
          >Last Attempt</span
        >
        <span class="text-xs font-semibold text-foreground/80 mt-1">{date}</span
        >
      </div>
    </div>
  </div>

  <!-- Primary Actions -->
  <div class="mt-8 flex gap-3">
    <button
      onclick={() => takeQuizFunction(id)}
      type="button"
      class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer"
    >
      <Play size={16} fill="currentColor" />
      <span>Retake</span>
    </button>

    <button
      onclick={() => viewProgressFunction(id)}
      type="button"
      class="p-2.5 rounded-xl border border-border hover:bg-muted/50 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all cursor-pointer group/btn"
      title="View analytics"
    >
      <BarChart2
        size={20}
        class="group-hover/btn:scale-110 transition-transform"
      />
    </button>
  </div>
</div>
