<script lang="ts">
  import SummaryCard from "$lib/components/dashboard/home/SummaryCard.svelte";
  import UserStats from "$lib/components/dashboard/home/UserStats.svelte";
  import RankingsPreview from "$lib/components/dashboard/home/RankingsPreview.svelte";
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
    data = data.filter((card) => card.id !== id);
  };
</script>

<div class="px-4 pb-12 max-w-[1400px] mx-auto min-h-screen">
  <!-- Top section: Stats & Rankings -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
    <section class="h-full">
      <UserStats />
    </section>

    <section class="h-[450px]">
      <RankingsPreview />
    </section>
  </div>

  <!-- Bottom section: Available Quizzes -->
  <section class="mt-16">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-2xl font-bold flex items-center gap-2">
          <i class="fa-solid fa-layer-group text-primary"></i>
          Your Quizzes
        </h2>
        <p class="text-sm text-muted-foreground mt-1">Generated quizzes ready to be taken.</p>
      </div>
      
      <a href="/dashboard/upload" class="glass-card bg-primary/20 hover:bg-primary/30 text-primary border-primary/30 px-4 py-2 rounded-lg font-medium flex items-center gap-2">
        <i class="fa-solid fa-plus"></i>
        New Custom Quiz
      </a>
    </div>

    {#if data.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {#each data as card}
          <SummaryCard
            cardData={card}
            {viewProgressFunction}
            {takeQuizFunction}
            {deleteCard}
          />
        {/each}
      </div>
    {:else}
      <div class="glass-card rounded-xl border border-dashed border-border p-12 flex flex-col items-center justify-center text-center">
        <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <i class="fa-solid fa-folder-open text-2xl text-primary"></i>
        </div>
        <h4 class="text-xl font-bold mb-2">No Quizzes Found</h4>
        <p class="text-muted-foreground mb-6 max-w-sm">
          You haven't generated any quizzes yet. Upload your notes to get started!
        </p>
        <a href="/dashboard/upload" class="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors">
          Upload Notes
        </a>
      </div>
    {/if}
  </section>
</div>
