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
    "border-2 border-primary bg-primary/10 text-primary !shadow-[0_0_15px_rgba(var(--color-primary-500),0.3)] translate-x-2";
  const inactiveOptionStyle: string =
    "bg-background/50 border-2 border-border hover:border-primary/50 text-foreground";
</script>

<section class="min-h-[300px]">
  <div class="w-full my-auto glass-card rounded-2xl p-6 sm:p-8">
    <!-- Question-->
    <div class="text-[22px] sm:text-[24px] font-bold leading-tight mb-8">
      {question.prompt}
    </div>

    <!-- Options -->
    <div class="flex flex-col gap-4">
      {#each optionList as option, i}
        <button
          class="flex items-center justify-between px-6 py-4 text-lg sm:text-xl font-medium rounded-xl w-full transition-all duration-300
                  {question.choice == option.text
            ? activeOptionStyle
            : inactiveOptionStyle}
          "
          onclick={() => setActive(i)}
        >
          <!-- Option Text-->
          <p class="text-left flex-1">{option.text}</p>

          <!-- Check Box-->
          <span
            class="ml-4 flex-shrink-0 transition-transform duration-300 {question.choice == option.text
              ? 'text-primary scale-110'
              : 'text-muted-foreground'}"
          >
            {#if question.choice == option.text}
              <CircleCheckBig size={28} />
            {:else}
              <Circle size={28} />
            {/if}
          </span>
        </button>
      {/each}
    </div>
  </div>
</section>
