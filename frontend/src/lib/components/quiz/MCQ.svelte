<script lang="ts">
  import { CircleCheckBig, Circle } from "@lucide/svelte";
  import type { Question, Options } from "$lib/types/quiz";

  let sampleQuestion: Question = {
    id: "q1",
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
    type: "mcq",
  };

  let optionList: Options[] = sampleQuestion.options.map((opt) => ({
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
  <div class="w-full">
    <!-- Question-->
    <div class="text-[22px] font-semibold leading-none">
      {sampleQuestion.question}
    </div>

    <!-- Option -->
    {#each optionList as option, i}
      <button
        class=" flex justify-between px-[10px] py-[11px] text-[20px] mt-[15px] font-light rounded-[9px] w-full hover:bg-light-tetiary-accent/40 transition ease-in-out duration-100
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
  </div>
</section>
