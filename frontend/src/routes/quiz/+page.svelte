<script lang="ts">
  import MCQ from "$lib/components/quiz/MCQ.svelte";
  import Results from "$lib/components/quiz/Results.svelte";
  import FlashCard from "$lib/components/quiz/FlashCard.svelte";

  import Navigation from "$lib/components/quiz/Navigation.svelte";
  import ProgressBar from "$lib/components/quiz/ProgressBar.svelte";
  import Timer from "$lib/components/quiz/Timer.svelte";

  import { buttonClass } from "$lib/config/config";
  import { submitQuiz, goToPrevQuestion } from "$lib/utils/quiz";

  import { questions } from "$lib/api/data";
  import type { Question } from "$lib/types/quiz";

  let question_index: number = $state(0);

  const goToNextQuestion = () => {
    question_index = question_index + 1;
  };
</script>

<div>
  <Navigation />
  <ProgressBar />

  <div
    class="max-w-[596px] mx-auto text-light-secondary-text dark:text-dark-main-text"
  >
    <Timer />
    <div class="w-full flex justify-end mb-[20.37px]">
      <button class="text-[16px] font-semibold"> View Questions </button>
    </div>

    <!-- Question Number and Quit button -->
    <div
      class="text-[16px] mb-[20.57px] flex justify-between leading-none font-semibold"
    >
      Question 1 of 10

      <button class="text-error"> Quit </button>
    </div>

    <!--    Quiz container-->

    {#if questions[question_index].type == "mcq"}
      <MCQ />
    {:else if questions[question_index].type == "flashcard"}
      <FlashCard />
    {:else if questions[question_index].type == "true-false"}
      <MCQ />
    {:else}
      "Well, something is wrong here...."
    {/if}

    <!--   Actions -->
    <div class="flex justify-between mt-[15px]">
      <button class={buttonClass("success")} onclick={submitQuiz}>
        Submit
      </button>

      <!-- Navigation-->
      <div class="flex justify-between w-[215px]">
        <button
          class={buttonClass("ordinary")}
          onclick={() => goToPrevQuestion(question_index)}>Prev</button
        >
        <button
          class={buttonClass("ordinary")}
          onclick={() => goToNextQuestion()}>Next</button
        >
      </div>
    </div>
  </div>
</div>
