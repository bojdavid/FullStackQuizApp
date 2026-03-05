<script lang="ts">
  import { onMount } from "svelte";
  import {
    CircleCheckBig,
    CircleX,
    CircleXIcon,
    ChevronDown,
    Loader2,
  } from "@lucide/svelte";
  import { getQuizResult, type QuizResult } from "$lib/api/quizResult";
  import { formatTime } from "$lib/store/quizSession.svelte";

  let { quizId } = $props();

  let result = $state<QuizResult | null>(null);
  let isLoading = $state(true);

  onMount(async () => {
    try {
      const res = await getQuizResult(quizId);
      result = res;
    } catch (error) {
      console.error(error);
    } finally {
      isLoading = false;
    }
  });

  let accuracyPercentage = $derived.by(() => {
    if (result) {
      return result.totalQuestions > 0
        ? Math.round((result.score / result.totalQuestions) * 100)
        : 0;
    }
    return 0;
  });
</script>

{#snippet answer(
  question: string,
  answer: string | boolean,
  choice: string | boolean | undefined,
  index: number,
)}
  <div
    class="max-w-[800px] mx-auto text-lg flex flex-col sm:flex-row gap-4 sm:gap-6 border-l-4 {answer ===
    choice
      ? 'border-l-success bg-success/5'
      : 'border-l-error bg-error/5'} mb-6 rounded-r-xl rounded-l-md px-6 py-6 relative glass-card !border-y-border !border-r-border"
  >
    <div
      class="flex-shrink-0 flex items-start justify-center pt-1 {answer ===
      choice
        ? 'text-success'
        : 'text-error'}"
    >
      {#if answer === choice}
        <CircleCheckBig size={32} />
      {:else}
        <CircleXIcon size={32} />
      {/if}
    </div>

    <div class="flex-grow">
      <p class="font-bold text-xl mb-4 text-foreground flex items-start gap-2">
        <span class="text-muted-foreground">{index + 1}.</span>
        {question}
      </p>

      <div
        class="bg-background/50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <p
            class="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1"
          >
            Your Answer
          </p>
          <p
            class="font-medium {answer === choice
              ? 'text-success'
              : 'text-error'}"
          >
            {choice !== undefined ? String(choice) : "Skipped / No Answer"}
          </p>
        </div>

        {#if answer !== choice}
          <div>
            <p
              class="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1"
            >
              Correct Answer
            </p>
            <p class="font-medium text-success">
              {String(answer)}
            </p>
          </div>
        {/if}
      </div>

      <div class="flex justify-end mt-4">
        <button
          class="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 group"
        >
          View Explanation <span
            class="group-hover:translate-y-0.5 transition-transform"
            ><ChevronDown size={16} /></span
          >
        </button>
      </div>
    </div>
  </div>
{/snippet}

{#if isLoading}
  <div class="h-[60vh] flex flex-col items-center justify-center gap-4">
    <Loader2 size={48} class="animate-spin text-primary" />
    <p class="text-xl font-bold text-muted-foreground">
      Calculating your results...
    </p>
  </div>
{:else if result}
  <section class="max-w-[1000px] mx-auto py-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-2">Quiz Summary</h2>
      <p class="text-muted-foreground">
        Here's how you performed on this AI generated quiz.
      </p>
    </div>

    <!-- Score Section -->
    <div
      class="flex flex-col md:flex-row justify-center items-center gap-8 mb-16"
    >
      <div
        class="glass-card w-48 h-48 rounded-full flex flex-col justify-center items-center relative shadow-[0_0_30px_rgba(var(--color-primary-500),0.15)] border-4 border-primary"
      >
        <div
          class="absolute inset-0 rounded-full border-[12px] border-primary/20"
        ></div>
        <p
          class="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1 shadow-sm relative z-10"
        >
          Accuracy
        </p>
        <p class="text-5xl font-extrabold text-primary relative z-10">
          {accuracyPercentage}%
        </p>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div
          class="bg-background border border-border rounded-xl p-6 text-center shadow-sm"
        >
          <p
            class="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2"
          >
            Score
          </p>
          <p class="text-3xl font-bold text-foreground">
            {result.score}
            <span class="text-lg text-muted-foreground font-medium"
              >/ {result.totalQuestions}</span
            >
          </p>
        </div>
        <div
          class="bg-background border border-border rounded-xl p-6 text-center shadow-sm"
        >
          <p
            class="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2"
          >
            Time spent
          </p>
          <p class="text-3xl font-bold text-foreground">
            {formatTime(result.timeSpentSeconds)}
          </p>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-4 mb-8">
      <div class="h-[1px] bg-border flex-1"></div>
      <span class="text-sm text-foreground font-bold uppercase tracking-widest"
        >Question Breakdown</span
      >
      <div class="h-[1px] bg-border flex-1"></div>
    </div>

    <!-- Answers List -->
    <div class="space-y-6">
      {#each result.questions as question, i}
        {@render answer(question.prompt, question.answer, question.choice, i)}
      {/each}
    </div>

    <div class="mt-12 flex justify-center">
      <a
        href="/dashboard"
        class="bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-primary/90 transition-all hover:-translate-y-1"
      >
        Return to Dashboard
      </a>
    </div>
  </section>
{:else}
  <div class="text-center py-20 flex flex-col items-center gap-4">
    <p class="text-xl font-bold">No result found.</p>
    <a
      href="/dashboard"
      class="bg-primary text-primary-foreground font-bold px-6 py-2 rounded-lg hover:bg-primary/90"
    >
      Go back to Dashboard
    </a>
  </div>
{/if}
