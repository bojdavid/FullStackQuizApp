<script lang="ts">
  import { ChevronLeft } from "@lucide/svelte";
  import LightSwitch from "../common/LightSwitch.svelte";

  let iconSize: number = $state(40);
</script>

<div class="flex justify-between text-[36px] font-semibold">
  <div class="flex gap-5 text-light-main-text dark:text-dark-main-text">
    <button class="my-auto">
      <ChevronLeft size={iconSize} />
    </button>
    <h1>Practice Quiz</h1>
  </div>
  <div class="flex flex-col justify-center">
    <LightSwitch size={iconSize} />
  </div>
</div>
