<script lang="ts">
  import ResourceUpload from "$lib/components/dashboard/resources/ResourceUpload.svelte";
  import QuizGrid from "$lib/components/dashboard/resources/QuizGrid.svelte";
  import AttemptHistory from "$lib/components/dashboard/resources/AttemptHistory.svelte";
  import type { Quiz } from "$lib/types/quiz";
  import { fade } from "svelte/transition";

  // Mock data for demonstration
  const mockQuizzes: Quiz[] = [
    {
      id: "1",
      title: "Introduction to Biology",
      description: "A comprehensive quiz covering cell structure, genetics, and evolution based on your uploaded textbook.",
      questions: Array(25).fill({}),
    },
    {
      id: "2",
      title: "Modern UI Design Patterns",
      description: "Testing your knowledge on glassmorphism, accessibility, and responsive layouts.",
      questions: Array(15).fill({}),
    },
    {
      id: "3",
      title: "JavaScript Advanced Concepts",
      description: "Closures, prototypes, and asynchronous programming quiz from your lecture notes.",
      questions: Array(20).fill({}),
    }
  ];

  const mockAttempts = {
    "1": 3,
    "2": 1,
    "3": 0
  };

  const mockHistory = [
    {
      id: "h1",
      quizTitle: "Introduction to Biology",
      score: 22,
      totalQuestions: 25,
      date: "2024-03-04",
      timeSpent: "15m 30s",
      status: 'completed' as const
    },
    {
      id: "h2",
      quizTitle: "Modern UI Design Patterns",
      score: 12,
      totalQuestions: 15,
      date: "2024-03-03",
      timeSpent: "8m 45s",
      status: 'completed' as const
    },
    {
      id: "h3",
      quizTitle: "Introduction to Biology",
      score: 18,
      totalQuestions: 25,
      date: "2024-03-02",
      timeSpent: "14m 20s",
      status: 'completed' as const
    }
  ];
</script>

<div class="p-6 lg:p-10 space-y-12 max-w-[1400px] mx-auto" in:fade>
  <!-- Header Section -->
  <header>
    <h1 class="text-4xl font-extrabold text-gradient mb-2 tracking-tight">Resources & Quizzes</h1>
    <p class="text-muted-foreground text-lg">Manage your study materials and track your quiz performance.</p>
  </header>

  <!-- Upload Section -->
  <section class="grid grid-cols-1 gap-8">
    <ResourceUpload />
  </section>

  <!-- Content Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
    <!-- Quiz List (Main Column) -->
    <div class="lg:col-span-2 space-y-10">
      <QuizGrid quizzes={mockQuizzes} attempts={mockAttempts} />
    </div>

    <!-- History (Sidebar Column) -->
    <aside class="space-y-10">
      <AttemptHistory attempts={mockHistory} />
      
      <!-- Quick Stats / Secondary Card -->
      <div class="glass-card p-6 rounded-3xl bg-primary/5 border border-primary/20">
        <h3 class="font-bold text-lg mb-4 text-foreground">Quick Insights</h3>
        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-muted-foreground text-sm">Total Quizzes</span>
            <span class="font-bold text-primary">12</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-muted-foreground text-sm">Avg. Accuracy</span>
            <span class="font-bold text-success">84%</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-muted-foreground text-sm">Study Streak</span>
            <span class="font-bold text-warning">5 Days</span>
          </div>
        </div>
      </div>
    </aside>
  </div>
</div>

<style>
  /* Page specific layout adjustments if any */
</style>
