<script lang="ts">
  import { CircleCheckBig, Circle } from "@lucide/svelte";
  import type { Question, Options } from "$lib/types/quiz";

  let { question } = $props();

  let optionList: Options[] = $state([]);

  $effect(() => {
    optionList = question.options.map((opt: string) => ({
      text: opt,
      active: false,
    }));
  });

  const setActive = (i: number) => {
    // reset all to false
    optionList = optionList.map((opt, idx) => ({
      ...opt,
      active: idx === i, // only the clicked index becomes true
    }));

    question.choice = optionList[i].text;
  };

  const activeOptionStyle: string =
    " border-1 border-light-primary-accent bg-light-tetiary-accent dark:text-light-primary-accent ";
  const inactiveOptionStyle: string =
    " bg-light-bg dark:bg-dark-bg border-1 border-light-tetiary-accent dark:border-light-tetiary-accent";
</script>

<section class="min-h-[300px]">
  <div class="w-full my-auto">
    <!-- Question-->
    <div class="text-[22px] font-semibold leading-none">
      {question.question}
    </div>

    <!-- Option -->
    {#each optionList as option, i}
      <button
        class=" flex justify-between px-[10px] py-[11px] text-[20px] mt-[15px] font-light rounded-[9px] w-full hover:bg-light-tetiary-accent/40 transition ease-in-out duration-100
                {question.choice == option.text
          ? activeOptionStyle
          : inactiveOptionStyle}
        "
        onclick={() => setActive(i)}
      >
        <!--    Option Text-->
        <p>{option.text}</p>

        <!-- Check Box-->
        <span
          class={question.choice == option.text
            ? "text-light-primary-accent"
            : "text-light-tetiary-accent"}
        >
          {#if question.choice == option.text}
            <CircleCheckBig size={30} />
          {:else}
            <Circle size={30} />
          {/if}
        </span>
      </button>
    {/each}
  </div>
</section>
