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

  import { saveQuizResult } from "$lib/api/quizResult";
  import { quizSession, stopTimer } from "$lib/store/quizSession.svelte";
  import type { Question, Quiz } from "$lib/types/quiz";
  import { goto } from "$app/navigation";

  //Shadcn components
  import AlertDialogue from "$lib/components/common/AlertDialogue.svelte";
  import { Progress } from "$lib/components/ui/progress/index.js";

  let { data } = $props();
  console.log(data);
  let questions: Question[] = $state(data.quiz.questions);
  let question_index: number = $state(0);
  let submit: boolean = $state(false);
  let hideQuestionNavigations = $state(true);

  const goToNextQuestion = () => {
    if (question_index < questions.length - 1) {
      question_index++;
    }
  };

  const goToPrevQuestion = () => {
    if (question_index > 0) {
      question_index = question_index - 1;
    }
  };

  const goToQuestion = (i: number) => {
    question_index = i;
    viewQuestions();
  };

  const submitQuiz = async () => {
    stopTimer();

    // Calculate final score
    const score = questions.reduce((acc, q) => {
      return q.choice === q.answer ? acc + 1 : acc;
    }, 0);

    // Save to simulated API
    await saveQuizResult({
      quizId: data.quiz.id || "current",
      score,
      totalQuestions: questions.length,
      timeSpentSeconds: quizSession.secondsElapsed,
      questions: JSON.parse(JSON.stringify(questions)), // Deep copy to avoid reference issues
      timestamp: new Date().toISOString(),
    });

    submit = true;
  };

  const quit_quiz = () => {
    stopTimer();
    goto("./dashboard");
  };

  const viewQuestions = () => {
    hideQuestionNavigations = !hideQuestionNavigations;
  };
</script>

<div class="w-full min-h-screen bg-background relative overflow-x-hidden">
  <div class="h-full">
    <!-- Overlay for Sidebar -->
    {#if !hideQuestionNavigations}
      <div
        class="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity"
        onclick={viewQuestions}
        onkeydown={(e) => e.key === "Escape" && viewQuestions()}
        role="button"
        tabindex="0"
        aria-label="Close navigation"
      ></div>
    {/if}

    <!-- Side Bar -->
    <aside
      class="fixed font-sans ease-in-out transform transition-all duration-300 h-screen w-80 max-w-[90vw] glass-card !border-y-0 !border-l-0 shadow-2xl {hideQuestionNavigations
        ? '-translate-x-full opacity-0'
        : 'translate-x-0 opacity-100'} z-50 top-0 left-0 overflow-y-auto"
    >
      <NavigateQuestions
        {questions}
        {goToQuestion}
        currentQuestion={question_index}
        {viewQuestions}
      />
    </aside>

    <div class="max-w-[800px] mx-auto px-4 py-8">
      <header class="mb-8">
        <NavBar title={data.quiz.title} />
        {#if !submit}
          <div class="mt-6 flex flex-col gap-2">
            <div class="flex justify-between items-end">
              <span
                class="text-sm font-semibold text-muted-foreground uppercase tracking-widest"
                >Progress</span
              >
              <span class="text-sm font-bold text-primary"
                >{Math.round(
                  ((question_index + 1) / questions.length) * 100,
                )}%</span
              >
            </div>
            <Progress
              value={((question_index + 1) / questions.length) * 100}
              class="h-2"
            />
          </div>
        {/if}
      </header>

      {#if submit}
        <Results quizId={data.quiz.id} />
      {:else}
        <div class="w-full flex flex-col min-h-[500px]">
          <!-- Top Controls (Timer, Nav Toggle) -->
          <div
            class="flex justify-between items-center mb-8 bg-muted/40 p-4 rounded-xl border border-border"
          >
            <Timer />
            <button
              class="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors bg-primary/10 px-4 py-2 rounded-lg"
              onclick={viewQuestions}
            >
              <i class="fa-solid fa-list-ul"></i>
              Question List
            </button>
          </div>

          <!-- Question Number and Quit button -->
          <div
            class="text-[16px] mb-6 flex justify-between items-center leading-none font-bold text-foreground"
          >
            <div class="flex items-center gap-3">
              <div
                class="bg-primary/20 text-primary w-10 h-10 rounded-full flex items-center justify-center border border-primary/30"
              >
                {question_index + 1}
              </div>
              <span class="text-muted-foreground font-medium"
                >of {questions.length}</span
              >
            </div>

            <div class="text-error">
              <AlertDialogue
                triggerText="Quit Session"
                title="End Quiz Early?"
                description="Your current progress will be lost. Are you sure you want to return to the dashboard?"
                action={quit_quiz}
              />
            </div>
          </div>

          <!-- Quiz container -->
          <div class="flex-grow">
            {#if questions[question_index].type == "mcq"}
              <MCQ question={questions[question_index]} />
            {:else if questions[question_index].type == "flashcard"}
              <FlashCard question={questions[question_index]} />
            {:else if questions[question_index].type == "true-false"}
              <MCQ question={questions[question_index]} />
            {:else}
              <div class="glass-card p-8 rounded-xl text-center">
                <i
                  class="fa-solid fa-triangle-exclamation text-4xl text-warning mb-4"
                ></i>
                <p class="font-bold">Unknown question type encountered.</p>
              </div>
            {/if}
          </div>

          <!-- Actions Footer -->
          <div
            class="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-border"
          >
            <div
              class="w-full sm:w-auto order-1 sm:order-none bg-success text-success-foreground font-bold py-3 rounded-xl text-center px-5 py-2 rounded-lg hover:-translate-y-[5px] transition duration-300 cursor-pointer ease-in-out group"
            >
              <AlertDialogue
                triggerText="Finish & Submit"
                title="Submit Your Quiz"
                action={submitQuiz}
                description="You are about to submit your quiz for grading."
              />
            </div>

            <!-- Navigation Box -->
            <div class="flex gap-3 w-full sm:w-auto">
              <button
                class="flex-1 sm:flex-none flex justify-center items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all {question_index ===
                0
                  ? 'bg-muted text-muted-foreground/50 cursor-not-allowed'
                  : 'bg-muted text-foreground hover:bg-muted/80 border border-border'}"
                onclick={() => goToPrevQuestion()}
                disabled={question_index === 0}
              >
                <i class="fa-solid fa-arrow-left"></i> Previous
              </button>

              <button
                class="flex-1 sm:flex-none flex justify-center items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all {question_index ===
                questions.length - 1
                  ? 'bg-muted text-muted-foreground/50 cursor-not-allowed'
                  : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(var(--color-primary-500),0.3)]'}"
                onclick={() => goToNextQuestion()}
                disabled={question_index === questions.length - 1}
              >
                Next <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
