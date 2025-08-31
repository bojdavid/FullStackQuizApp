<script lang="ts">
  import SummaryCard from "$lib/components/dashboard/home/SummaryCard.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { summaryCardData } from "$lib/api/summaryData";
  import { goto } from "$app/navigation";
  import { quizGlobal } from "$lib/shared/shared.svelte";

  const takeQuizFunction = (id: string) => {
    quizGlobal.id = id;
    goto("./quiz");
  };
  const viewProgressFunction = (id: string) => {
    console.log(id);
  };
</script>

<div>
  <!-- Summary-->
  <section class="mt-10">
    <h1 class="text-3xl">Summary</h1>
    <!-- Summary cards-->
    <div class="flex flex-wrap mt-10 gap-5">
      {#each summaryCardData as card}
        <SummaryCard
          cardData={card}
          {viewProgressFunction}
          {takeQuizFunction}
        />
      {/each}
    </div>
  </section>

  <div class="flex gap-5 justify-evenly">
    <!-- Dunno what is here-->
    <section class=" ">
      <Skeleton class="h-4 w-full" />
    </section>

    <!-- Rankings coming soon-->
    <section>
      <Skeleton class="h-[200px] w-full" />
    </section>
  </div>
</div>
