<script lang="ts">
  import Button from "../common/Button.svelte";
  import Navigation from "./Navigation.svelte";
  import ProgressBar from "./ProgressBar.svelte";
  import Timer from "./Timer.svelte";

  import { CircleCheckBig, Circle } from "@lucide/svelte";
  import type { Question, Options } from "$lib/types/quiz";
  import {
    goToNextQuestion,
    submitQuiz,
    goToPrevQuestion,
  } from "$lib/utils/quiz";

  const sampleQuestion: Question = {
    no: 1,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
    option1: "Earth",
    option2: "Mars",
    option3: "Jupiter",
    option4: "Venus",
  };

  let options = [
    sampleQuestion.option1,
    sampleQuestion.option2,
    sampleQuestion.option3,
    sampleQuestion.option4,
  ];

  let optionList: Options[] = options.map((opt) => ({
    text: opt,
    active: false,
  }));

  let selectedIndex = $state(-1);

  const setActive = (i: number) => {
    selectedIndex = i;
  };

  const activeOptionStyle: string =
    " border-1 border-light-primary-accent bg-light-tetiary-accent dark:text-light-primary-accent ";
  const inactiveOptionStyle: string =
    " bg-light-bg dark:bg-dark-bg border-1 border-light-tetiary-accent dark:border-light-tetiary-accent";
</script>

<section>
  <Navigation />
  <ProgressBar />

  <!-- MCQ container -->
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
      Question {sampleQuestion.no} of 10

      <button class="text-error"> Quit </button>
    </div>

    <!-- Question-->
    <div class="text-[22px] font-semibold leading-none">
      {sampleQuestion.question}
    </div>

    <!-- Option -->
    {#each optionList as option, i}
      <button
        class=" flex justify-between px-[10px] py-[11px] text-[20px] mt-[15px] font-light rounded-[9px] w-full hover:bg-light-tetiary-accent/40 transition ease-in-out duration-300
                {i === selectedIndex ? activeOptionStyle : inactiveOptionStyle}
        "
        onclick={() => setActive(i)}
      >
        <!--    Option Text-->
        <p>{option.text}</p>

        <!-- Check Box-->
        <span
          class={i === selectedIndex
            ? "text-light-primary-accent"
            : "text-light-tetiary-accent"}
        >
          {#if i !== selectedIndex}
            <Circle size={30} />
          {:else}
            <CircleCheckBig size={30} />
          {/if}
        </span>
      </button>
    {/each}

    <!--   Actions -->
    <div class="flex justify-between mt-[15px]">
      <Button text={"Submit"} color="success" func={submitQuiz} />

      <!-- Navigation-->
      <div class="flex justify-between w-[215px]">
        <Button text="Prev" func={goToPrevQuestion} />
        <Button text="Next" func={goToNextQuestion} />
      </div>
    </div>
  </div>
</section>
