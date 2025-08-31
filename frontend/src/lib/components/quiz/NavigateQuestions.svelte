<script lang="ts">
  let { questions, goToQuestion, currentQuestion, viewQuestions } = $props();
  import { X } from "@lucide/svelte";
</script>

<section
  class="h-screen w-full max-w-[900px] bg-light-bg/90 dark:bg-dark-bg/80 pr-5 relative"
>
  <button class="absolute right-2" onclick={() => viewQuestions()}>
    <X size={40} />
  </button>
  <div class="text-3xl py-10">
    Something should be here e.g Pagination or filter
  </div>
  <div class=" overflow-y-scroll h-5/6">
    <div class="flex flex-col gap-5 justify-center">
      {#each questions as question, index}
        <button
          onclick={() => goToQuestion(index)}
          class="rounded-md min-h-[50px] text-xl text-left px-2 {currentQuestion ==
          index
            ? 'bg-warning'
            : question.choice
              ? 'bg-light-tetiary-accent dark:bg-dark-secondary-text'
              : 'border-2 border-light-tetiary-accent bg-light-bg dark:bg-dark-bg dark:border-dark-main-text'}"
        >
          {index + 1}.)
          {question.prompt}
        </button>
      {/each}
    </div>
  </div>
</section>
