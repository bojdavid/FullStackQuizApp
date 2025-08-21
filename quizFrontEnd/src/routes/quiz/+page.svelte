<script lang="ts">
  import "../../styles/app.css";
  import QuizContainer from "$lib/components/quiz/QuizContainer.svelte";
  import QuestionsNavigation from "$lib/components/quiz/QuestionsNavigation.svelte";
  import { Progress } from "@skeletonlabs/skeleton-svelte";
  import EndQuiz from "$lib/components/quiz/EndQuiz.svelte";

  //SAMPLE DATA - FETCH JSON DATA AND REPLACE DATA.QUESTIONS WITH RESPONSE.JSON
  let { data } = $props();

  import {} from "./quizExports.svelte";
  import type { QuizQuestion } from "./page";

  let questions: QuizQuestion[] = data.questions;

  // QUIZ VARIABLES
  let questionNum: number = $state(0);
  let viewCorrect: boolean = $state(false);
  let selectedAns: boolean = $state(true);
  let animateEndQuizbtn: boolean = $state(false);
  let hideItem: string = "hidden";
  let noOfQuestion: number = questions.length;

  // ADDITIONAL PROPERTIES FOR MANIPULATING QUIZ UI BETTER
  for (let i: number = 0; i < noOfQuestion; i++) {
    questions[i].answered = false;
    questions[i].view_correct_ans = false;
    questions[i].choice = "";
    questions[i].id = i;
  }

  // Transition variables
  let changedQuestion: boolean = $state(false);

  //END QUIZ
  let stopQuiz: boolean = $state(false);

  const goToNextQuestion = (): void => {
    //Do not let the questions num go beyond the questions index as it increments
    if (questionNum < noOfQuestion - 1) {
      questionNum++;
      changedQuestion = true;
    }
    //Animate the end quiz button when the user gets to the last question so they can notice it.
    if (questionNum == noOfQuestion - 1) {
      animateEndQuizbtn = true;
      setTimeout(() => {
        animateEndQuizbtn = false;
      }, 3000);
    }
    viewCorrect = false;
  };

  const goToPrevQuestion = (): void => {
    //Do not let the questions num go beyond the questions index as it decrements
    if (questionNum >= 0) {
      questionNum--;
    }
    viewCorrect = false;
  };

  const viewCorrectAns = (question: QuizQuestion): void => {
    question.view_correct_ans = true;
    viewCorrect = true;
  };

  const goToQuestion = (id: number): void => {
    questionNum = id;
    viewCorrect = false;
  };

  const endQuiz = (): void => {
    stopQuiz = true;
  };

  let timeLeft = $state(0);
  let timer: number = $state(0);

  function startTimer() {
    clearInterval(timer);
    timeLeft = 0;
    timer = setInterval(() => {
      timeLeft++;
      if (timeLeft === 0) clearInterval(timer);
    }, 1000);
  }
  startTimer();
</script>

<main class="mx-auto min-h-screen flex flex-col items-center justify-center">
  {#if stopQuiz}
    <EndQuiz {noOfQuestion} {questions} />
  {:else}
    <div class="min-w-xs w-full max-w-2xl mx-2 px-2 mt-10">
      <div class="text-3xl font-bold mb-5">{timeLeft}</div>

      <div class="flex justify-end mb-5">
        <button
          class=" btn preset-filled-tertiary-500 {animateEndQuizbtn
            ? ' animate animate-spin '
            : ' '}"
          onclick={endQuiz}
        >
          End Quiz
        </button>
      </div>

      <div class="mb-5">
        <div>
          <h2 class="text-xl">
            {questionNum + 1}/{questions.length}
          </h2>
        </div>
        <Progress value={questionNum} max={questions.length - 1} />
      </div>

      <QuizContainer
        question={questions[questionNum]}
        {viewCorrect}
        {goToNextQuestion}
        {goToPrevQuestion}
        {questionNum}
        {selectedAns}
        {viewCorrectAns}
      />

      <QuestionsNavigation
        {questions}
        {questionNum}
        {goToQuestion}
        {viewCorrect}
      />
    </div>
  {/if}
</main>

<style>
</style>
