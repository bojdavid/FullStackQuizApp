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

  let data = $state([...summaryCardData]);
  const deleteCard = (id: string) => {
    //data = data.filter((card) => (card.id === id ? false : true));

    setTimeout(() => {
      // Update the state with the filtered data
      data = data.filter((card) => card.id !== id);
      console.log(id);
    }, 2000); // Simulate a 2-second delay

    console.log(id);
  };
</script>

<div>
  <!-- Summary-->
  <section class="mt-10">
    <h2 class="">Summary</h2>
    <!-- Summary cards-->
    <div class="flex flex-wrap mt-10 gap-5">
      {#each data as card}
        <SummaryCard
          cardData={card}
          {viewProgressFunction}
          {takeQuizFunction}
          {deleteCard}
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
