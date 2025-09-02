<script lang="ts">
  import { X } from "@lucide/svelte";
  let { cardData, viewProgressFunction, takeQuizFunction, deleteCard } =
    $props();
  let id: string = cardData.id;
  let title: string = cardData.quizTitle;
  let date: string = cardData.date;
  let accuracy: number = cardData.accuracy;
  let time: string = cardData.time;
</script>

<div
  class="relative flex flex-col w-[250px] h-fit rounded-lg bg-light-bg dark:bg-dark-bg shadow-lg p-4"
>
  <!-- Close button -->
  <button
    type="button"
    class="absolute right-2 top-2 text-error hover:text-error/80 transition-colors"
    aria-label="Close"
    onclick={() => deleteCard(id)}
  >
    <X size={20} />
  </button>

  <!-- Title -->
  <header class="text-2xl font-bold mb-5">{title}</header>

  <!-- Stats -->
  <section class="flex-1 text-sm">
    <h4 class="text-center text-lg font-bold mb-2">Last Attempt</h4>
    <ul class="space-y-1">
      <li>
        Date: <span class="font-bold">{date}</span>
      </li>
      <li>
        Accuracy: <span class="font-bold">{accuracy}%</span>
      </li>
      <li>
        Time: <span class="font-bold">{time}</span>
      </li>
    </ul>
  </section>

  <!-- Actions -->
  <div class="mt-4 flex justify-between items-center">
    <button
      onclick={() => viewProgressFunction(cardData.id)}
      type="button"
      class="text-sm font-medium text-primary hover:underline"
    >
      View Progress
    </button>
    <button
      onclick={() => takeQuizFunction(cardData.id)}
      type="button"
      class="rounded-md bg-success text-light-bg px-4 py-2 text-sm font-semibold hover:bg-success/90 transition-colors"
    >
      Take Quiz
    </button>
  </div>
</div>
