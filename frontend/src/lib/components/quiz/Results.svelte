<script lang="ts">
  import {
    CircleCheckBig,
    CircleX,
    CircleXIcon,
    ChevronDown,
  } from "@lucide/svelte";
  let { questions } = $props();
</script>

{#snippet answer(
  question: string,
  answer: string,
  choice: string,
  index: number
)}
  <div
    class=" max-w-[872px] mx-auto text-[20px] flex flex-col border-1 {answer ==
    choice
      ? 'border-success'
      : 'border-error'} mb-[27px] rounded-[10px] px-3 py-3 relative"
  >
    <div
      class="absolute right-3 {answer == choice
        ? 'text-success'
        : 'text-error'}"
    >
      {#if answer == choice}
        <CircleCheckBig size={40} />
      {:else}
        <CircleXIcon size={40} />
      {/if}
    </div>
    <p class="font-bold">
      {index + 1}: {question}
    </p>

    <div>
      <p class="font-bold pl-4">Answer:</p>
      <p class="font-light pl-10">
        {answer}
      </p>
    </div>
    <div class="flex justify-end">
      <button
        class="border-b-2 font-light text-16 text-light-primary-accent flex leading-none"
      >
        View Reason <span class="my-auto"><ChevronDown /></span>
      </button>
    </div>
  </div>
{/snippet}

<section class="text-light-secondary-text dark:text-dark-main-text">
  <!-- Score-->
  <div
    class="text-dark-secondary-text dark:text-light-secondary-text border-[16px] border-light-primary-accent bg-dark-bg dark:bg-light-bg w-[300px] h-[300px] flex flex-col justify-center items-center mx-auto rounded-full mb-[27px]"
  >
    <p class="text-[29px]">Your score</p>
    <p class="text-[60px] font-bold">15/20</p>
    <p class="text-[32px] font-semibold">30mins</p>
  </div>

  <!-- Answers -->
  <div>
    {#each questions as question, i}
      {@render answer(question.prompt, question.answer, question.choice, i)}
    {/each}
  </div>
</section>
