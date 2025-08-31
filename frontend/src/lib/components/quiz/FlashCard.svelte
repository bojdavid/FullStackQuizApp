<script lang="ts">
  import type { Question } from "$lib/types/quiz";
  import { buttonClass } from "$lib/config/config";

  let { question } = $props();
  let checkAnswer: boolean = $state(false);

  const viewAnswer = () => {
    checkAnswer = !checkAnswer;
  };
</script>

<section class="w-full">
  <div
    class="w-full bg-light-bg dark:bg-dark-bg
             min-h-[150px]
            text-[22px] font-semibold text-light-main-text dark:text-dark-main-text
            text-center flex flex-col justify-center
            drop-shadow-xl/20 drop-shadow-dark-bg dark:drop-shadow-dark-main-text
            "
  >
    {!checkAnswer ? question.prompt : question.answer}
  </div>
  <div class="flex justify-end mt-[27px]">
    <button class={buttonClass("primaryAccent")} onclick={viewAnswer}>
      Answer
    </button>
  </div>
</section>
