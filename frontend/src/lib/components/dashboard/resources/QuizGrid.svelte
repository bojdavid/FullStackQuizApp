<script lang="ts">
  import type { Quiz } from "$lib/types/quiz";
  import QuizCard from "./QuizCard.svelte";
  import { Search, SlidersHorizontal } from "@lucide/svelte";

  interface Props {
    quizzes: Quiz[];
    attempts: Record<string, number>; // quizId -> count
  }

  let { quizzes, attempts }: Props = $props();
  let searchQuery = $state("");

  let filteredQuizzes = $derived(
    quizzes.filter(q => q.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleTakeQuiz = (id: string) => {
    console.log("Taking quiz:", id);
    // Navigation logic would go here
  };

  const handleDelete = (id: string) => {
    console.log("Deleting quiz:", id);
    // Delete logic would go here
  };
</script>

<div class="space-y-6">
  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
    <h2 class="text-2xl font-bold text-foreground">My Quizzes</h2>
    
    <div class="flex items-center gap-2">
      <div class="relative flex-1 md:flex-none md:w-64">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <input 
          type="text" 
          bind:value={searchQuery}
          placeholder="Search quizzes..." 
          class="w-full pl-10 pr-4 py-2 rounded-xl border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
        />
      </div>
      <button class="p-2 border border-border rounded-xl hover:bg-muted transition-colors text-muted-foreground">
        <SlidersHorizontal size={20} />
      </button>
    </div>
  </div>

  {#if filteredQuizzes.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each filteredQuizzes as quiz (quiz.id)}
        <QuizCard 
          {quiz} 
          attemptCount={attempts[quiz.id] || 0}
          onTakeQuiz={handleTakeQuiz}
          onDelete={handleDelete}
        />
      {/each}
    </div>
  {:else}
    <div class="glass-card rounded-3xl p-12 text-center">
      <div class="bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-muted-foreground">
        <Search size={32} />
      </div>
      <h3 class="text-xl font-semibold mb-2">No quizzes found</h3>
      <p class="text-muted-foreground">Try adjusting your search or upload a new resource to generate a quiz.</p>
    </div>
  {/if}
</div>
