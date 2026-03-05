<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import {
    quizSession,
    startTimer,
    stopTimer,
    resetTimer,
    formatTime,
  } from "$lib/store/quizSession.svelte";

  onMount(() => {
    resetTimer();
    startTimer();
  });

  onDestroy(() => {
    stopTimer();
  });
</script>

<section>
  <div
    class="px-[23px] py-1 text-[22px] border-2 rounded-lg w-fit font-bold text-warning border-warning bg-warning/5"
  >
    {formatTime(quizSession.secondsElapsed)}
  </div>
</section>
