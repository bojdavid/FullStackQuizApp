<script lang="ts">
  import type { Quiz } from "$lib/types/quiz";
  import { FileText, Play, History, MoreVertical, Trash2 } from "@lucide/svelte";
  import { buttonClass } from "$lib/config/config";
  import { fade } from "svelte/transition";

  interface Props {
    quiz: Quiz;
    attemptCount: number;
    onTakeQuiz: (id: string) => void;
    onDelete: (id: string) => void;
  }

  let { quiz, attemptCount, onTakeQuiz, onDelete }: Props = $props();

  let showMenu = $state(false);
</script>

<div class="glass-card p-6 rounded-2xl flex flex-col gap-4 relative group" in:fade>
  <div class="flex justify-between items-start">
    <div class="p-3 bg-primary/10 rounded-xl text-primary">
      <FileText size={24} />
    </div>
    
    <div class="relative">
      <button 
        onclick={() => showMenu = !showMenu}
        class="p-1 hover:bg-muted rounded-lg transition-colors text-muted-foreground"
      >
        <MoreVertical size={20} />
      </button>
      
      {#if showMenu}
        <div 
          class="absolute right-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-xl z-10 py-2"
          onmouseleave={() => showMenu = false}
        >
          <button 
            onclick={() => { onDelete(quiz.id); showMenu = false; }}
            class="w-full text-left px-4 py-2 text-sm text-destructive hover:bg-destructive/10 flex items-center gap-2 transition-colors"
          >
            <Trash2 size={16} />
            Delete Quiz
          </button>
        </div>
      {/if}
    </div>
  </div>

  <div>
    <h3 class="text-xl font-bold text-foreground line-clamp-1 mb-1">{quiz.title}</h3>
    <p class="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
      {quiz.description || 'No description available for this quiz.'}
    </p>
  </div>

  <div class="flex items-center gap-4 py-2 border-y border-border/50">
    <div class="flex flex-col">
      <span class="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Questions</span>
      <span class="font-medium text-foreground">{quiz.questions.length}</span>
    </div>
    <div class="w-px h-8 bg-border/50"></div>
    <div class="flex flex-col">
      <span class="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Attempts</span>
      <span class="font-medium text-foreground">{attemptCount}</span>
    </div>
  </div>

  <div class="flex gap-2 mt-auto pt-2">
    <button 
      onclick={() => onTakeQuiz(quiz.id)}
      class="flex-1 {buttonClass('primaryAccent')} !text-sm flex items-center justify-center gap-2 group/btn"
    >
      <Play size={16} class="group-hover/btn:scale-110 transition-transform" />
      Take Quiz
    </button>
  </div>
</div>
