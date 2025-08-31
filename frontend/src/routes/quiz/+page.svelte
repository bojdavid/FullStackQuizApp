<script lang="ts">
  import type { PageProps } from "./$types";

  import MCQ from "$lib/components/quiz/MCQ.svelte";
  import Results from "$lib/components/quiz/Results.svelte";
  import FlashCard from "$lib/components/quiz/FlashCard.svelte";
  import NavigateQuestions from "$lib/components/quiz/NavigateQuestions.svelte";

  import NavBar from "$lib/components/quiz/NavBar.svelte";
  import ProgressBar from "$lib/components/quiz/ProgressBar.svelte";
  import Timer from "$lib/components/quiz/Timer.svelte";

  import { buttonClass } from "$lib/config/config";

  import { quiz1 as q } from "$lib/api/data";
  import type { Question, Quiz } from "$lib/types/quiz";
  import { goto } from "$app/navigation";

  //Shadcn components
  import AlertDialogue from "$lib/components/common/AlertDialogue.svelte";
  import { Progress } from "$lib/components/ui/progress/index.js";

  let { data } = $props();
  console.log(data);
  let questions: Question[] = data.quiz.questions;
  let question_index: number = $state(0);
  let submit: boolean = $state(false);
  let hideQuestionNavigations = $state(true);

  const goToNextQuestion = () => {
    if (question_index < questions.length - 1) {
      question_index++;
    }
    //console.log(questions[question_index]);
  };

  const goToPrevQuestion = () => {
    if (question_index > 0) {
      question_index = question_index - 1;
      //console.log(questions[question_index]);
    }
  };

  const goToQuestion = (i: number) => {
    question_index = i;
    viewQuestions();
    //console.log(questions[i]);
  };

  const submitQuiz = () => {
    submit = true;
  };

  const quit_quiz = () => {
    goto("./");
  };

  const viewQuestions = () => {
    hideQuestionNavigations = !hideQuestionNavigations;
    console.log("working");
  };
</script>

<div class="w-full px-2 py-4 max-w-[800px] mx-auto relative overflow-x-hidden">
  <div class=" h-screen">
    <!-- Side Bar -->
    <aside
      class="ease-in-out transform transition-all duration-500 h-screen {hideQuestionNavigations
        ? ' -translate-x-full opacity-0  '
        : ' translate-x-0 opacity-100'} absolute overflow-y-auto z-50"
    >
      <NavigateQuestions
        {questions}
        {goToQuestion}
        currentQuestion={question_index}
        {viewQuestions}
      />
    </aside>
    <header class="mx-auto mb-5">
      <NavBar title={data.quiz.title} />
      {#if !submit}
        <Progress value={question_index + 1} max={questions.length} class="" />
        <ProgressBar />
      {/if}
    </header>
    {#if submit}
      <Results {questions} />
    {:else}
      <div
        class="max-w-[596px] mx-auto text-light-secondary-text dark:text-dark-main-text"
      >
        <!-- Timer -->
        <Timer />
        <div class="w-full flex justify-end mb-[20.37px]">
          <button class="text-[16px] font-semibold" onclick={viewQuestions}>
            View Questions
          </button>
        </div>

        <!-- Question Number and Quit button -->
        <div
          class="text-[16px] mb-[20.57px] flex justify-between leading-none font-semibold"
        >
          Question {question_index + 1} of {questions.length}

          <div class="text-error">
            <AlertDialogue
              triggerText="Quit"
              title="Are you sure you want to quit"
              description="Your current Progress will not be saved."
              action={quit_quiz}
            />
          </div>
        </div>

        <!--    Quiz container-->
        {#if questions[question_index].type == "mcq"}
          <MCQ question={questions[question_index]} />
        {:else if questions[question_index].type == "flashcard"}
          <FlashCard question={questions[question_index]} />
        {:else if questions[question_index].type == "true-false"}
          <MCQ question={questions[question_index]} />
        {:else}
          "Well, something is wrong here...."
        {/if}

        <!--   Actions -->
        <div class="flex justify-between mt-[15px]">
          <button class={buttonClass("success")} onclick={submitQuiz}>
            Submit
          </button>
          <AlertDialogue
            triggerText="Submit"
            title="Submit Your Quiz"
            action={submitQuiz}
            description="Make sure you have attempted all questions"
          />

          <!-- Navigation-->
          <div class="flex justify-between w-[215px]">
            <button
              class={buttonClass("ordinary")}
              onclick={() => goToPrevQuestion()}
              disabled={question_index === 0}>Prev</button
            >
            <button
              class={buttonClass("ordinary")}
              onclick={() => goToNextQuestion()}
              disabled={question_index === questions.length - 1}>Next</button
            >
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
