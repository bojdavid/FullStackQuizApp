<script lang="ts">
  import { X, CheckCircle2, Circle } from "@lucide/svelte";
  import { type Question } from "$lib/types/quiz";

  interface Props {
    questions: Question[];
    goToQuestion: (index: number) => void;
    currentQuestion: number;
    viewQuestions: () => void;
  }

  let { questions, goToQuestion, currentQuestion, viewQuestions }: Props =
    $props();

  const answeredCount = $derived(
    questions.filter(
      (q) => q.choice !== undefined && q.choice !== "" && q.choice !== null,
    ).length,
  );
</script>

<div class="h-full flex flex-col bg-background/50 backdrop-blur-xl">
  <!-- Header -->
  <div class="p-6 border-b border-border flex justify-between items-center">
    <div>
      <h2 class="text-xl font-bold text-foreground">Questions</h2>
      <p class="text-sm text-muted-foreground">
        {answeredCount} of {questions.length} answered
      </p>
    </div>
    <button
      onclick={viewQuestions}
      class="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground"
      aria-label="Close"
    >
      <X size={20} />
    </button>
  </div>

  <!-- Progress Tracking -->
  <div class="px-6 py-4 bg-muted/20">
    <div
      class="flex justify-between items-center mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
    >
      <span>Progress</span>
      <span>{Math.round((answeredCount / questions.length) * 100)}%</span>
    </div>
    <div class="h-1.5 w-full bg-muted rounded-full overflow-hidden">
      <div
        class="h-full bg-primary transition-all duration-500 ease-out"
        style="width: {(answeredCount / questions.length) * 100}%"
      ></div>
    </div>
  </div>

  <!-- Question List -->
  <div class="flex-1 overflow-y-auto p-4 custom-scrollbar">
    <div class="grid grid-cols-1 gap-2">
      {#each questions as question, index (question.id)}
        {@const isCurrent = currentQuestion === index}
        {@const isAnswered = !!(
          question.choice !== undefined &&
          question.choice !== "" &&
          question.choice !== null
        )}

        <button
          onclick={() => {
            goToQuestion(index);
          }}
          class="group relative flex items-center gap-4 p-3 rounded-xl transition-all duration-200 text-left
            {isCurrent
            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]'
            : isAnswered
              ? 'bg-success/10 hover:bg-success/20 border-success/20'
              : 'hover:bg-muted/80 text-muted-foreground hover:text-foreground border-transparent'} border"
        >
          <!-- Number/Status Circle -->
          <div
            class="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-all
            {isCurrent
              ? 'bg-white text-primary'
              : isAnswered
                ? 'bg-success text-white'
                : 'bg-muted text-muted-foreground'} group-hover:scale-110"
          >
            {index + 1}
          </div>

          <!-- Snippet -->
          <div class="flex-1 min-w-0">
            <p
              class="text-sm font-medium truncate {isCurrent
                ? 'text-white'
                : isAnswered
                  ? 'text-success-foreground'
                  : 'text-foreground'}"
            >
              {question.prompt}
            </p>
          </div>

          <!-- Status Icon -->
          {#if isAnswered}
            <CheckCircle2
              size={16}
              class={isCurrent ? "text-white" : "text-success"}
            />
          {:else}
            <div
              class="w-1.5 h-1.5 rounded-full {isCurrent
                ? 'bg-white'
                : 'bg-muted-foreground/30'}"
            ></div>
          {/if}

          <!-- Active Indicator -->
          {#if isCurrent}
            <div
              class="absolute left-0 w-1 h-6 bg-white rounded-r-full shadow-[0_0_10px_white]"
            ></div>
          {/if}
        </button>
      {/each}
    </div>
  </div>

  <!-- Footer Legend -->
  <div class="p-6 border-t border-border bg-muted/5 mt-auto">
    <div
      class="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-3"
    >
      Legend
    </div>
    <div class="grid grid-cols-2 gap-y-3 gap-x-4">
      <div class="flex items-center gap-2 text-xs">
        <div class="w-4 h-4 rounded bg-primary"></div>
        <span class="text-muted-foreground">Current</span>
      </div>
      <div class="flex items-center gap-2 text-xs">
        <div class="w-4 h-4 rounded bg-success"></div>
        <span class="text-muted-foreground">Answered</span>
      </div>
      <div class="flex items-center gap-2 text-xs">
        <div class="w-4 h-4 rounded bg-muted"></div>
        <span class="text-muted-foreground">Remaining</span>
      </div>
    </div>
  </div>
</div>

<style>
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(var(--color-primary-500), 0.1);
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(var(--color-primary-500), 0.2);
  }
</style>
