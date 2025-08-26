<script lang="ts">
  import LightSwitch from "$lib/components/common/LightSwitch.svelte";
</script>

<div class="text-light-main-text dark:text-dark-main-text px-2 max-w-[1024px]">
  <LightSwitch size={40} />
  <div class=" flex justify-center gap-5 mx-auto text-xl">
    <a href="./quiz"> quiz</a>
    <a href="./dashboard"> dashboard</a>
    <a href="./auth"> auth</a>
  </div>
</div>
