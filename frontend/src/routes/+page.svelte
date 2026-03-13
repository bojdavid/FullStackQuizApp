<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import LightSwitch from "$lib/components/common/LightSwitch.svelte";
  import {
    BrainCircuit,
    FileText,
    Trophy,
    BarChart3,
    ArrowRight,
    Zap,
    ShieldCheck,
    Users,
  } from "@lucide/svelte";
  import { fly, fade } from "svelte/transition";
</script>

<svelte:head>
  <title>AI Quiz - Master Any Subject</title>
  <meta
    name="description"
    content="Generate AI-powered quizzes from your documents and compete with others."
  />
</svelte:head>

<div class="flex flex-col min-h-screen">
  <!-- Navbar -->
  <nav
    class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <BrainCircuit class="size-8 text-primary" />
        <span class="text-xl font-bold tracking-tight text-gradient"
          >AI Quiz</span
        >
      </div>

      <div class="hidden md:flex items-center gap-6">
        <a
          href="#features"
          class="text-sm font-medium hover:text-primary transition-colors"
          >Features</a
        >
        <a
          href="#how-it-works"
          class="text-sm font-medium hover:text-primary transition-colors"
          >How it Works</a
        >
        <a
          href="/dashboard"
          class="text-sm font-medium hover:text-primary transition-colors"
          >Dashboard</a
        >
      </div>

      <div class="flex items-center gap-4">
        <LightSwitch size={24} />
        <Button href="/auth">Login</Button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="relative pt-20 pb-32 overflow-hidden">
    <!-- Subtle Background Glows -->
    <div
      class="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"
    ></div>
    <div
      class="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"
    ></div>

    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div in:fly={{ y: 20, duration: 800 }}>
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6"
          >
            <Zap class="size-3" />
            <span>AI-POWERED LEARNING</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Turn Your Notes into <span class="text-gradient"
              >Interactive Quizzes</span
            >
          </h1>
          <p class="text-xl text-muted-foreground mb-10 max-w-xl">
            Upload your documents and let our AI generate personalized quizzes
            in seconds. Track your progress, earn rankings, and master any
            subject faster than ever.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <Button size="lg" href="/auth" class="px-8 h-12 text-lg">
              Get Started for Free
              <ArrowRight class="ml-2 size-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              href="/quiz"
              class="px-8 h-12 text-lg"
            >
              Try a Sample Quiz
            </Button>
          </div>

          <div
            class="mt-12 flex items-center gap-8 text-sm text-muted-foreground"
          >
            <div class="flex items-center gap-2">
              <ShieldCheck class="size-5 text-success" />
              <span>Secure Auth</span>
            </div>
            <div class="flex items-center gap-2">
              <Users class="size-5 text-primary" />
              <span>10k+ Learners</span>
            </div>
          </div>
        </div>

        <div class="relative lg:block" in:fade={{ duration: 1000, delay: 200 }}>
          <div
            class="relative z-10 glass-card p-4 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/hero-ai.png"
              alt="AI Quiz Visualization"
              class="w-full h-auto rounded-2xl transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          <!-- Decorative elements -->
          <div
            class="absolute -top-10 -right-10 size-32 bg-accent/20 rounded-full blur-3xl"
          ></div>
          <div
            class="absolute -bottom-10 -left-10 size-32 bg-primary/20 rounded-full blur-3xl"
          ></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section id="features" class="py-24 bg-muted/30">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2 class="text-3xl md:text-5xl font-bold mb-6">
          Powerful Features for Faster Learning
        </h2>
        <p class="text-lg text-muted-foreground">
          Everything you need to transform your study habits and achieve
          academic excellence.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div class="glass-card p-8 rounded-2xl">
          <div
            class="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
          >
            <FileText class="size-6 text-primary" />
          </div>
          <h3 class="text-2xl font-bold mb-4">Document Upload</h3>
          <p class="text-muted-foreground">
            Simply upload PDFs, Word docs, or images. Our AI analyzes the
            content and creates relevant questions instantly.
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="glass-card p-8 rounded-2xl">
          <div
            class="size-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6"
          >
            <Trophy class="size-6 text-accent" />
          </div>
          <h3 class="text-2xl font-bold mb-4">Global Rankings</h3>
          <p class="text-muted-foreground">
            Compete with students worldwide. Gain XP for every correct answer
            and climb the leaderboard.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="glass-card p-8 rounded-2xl">
          <div
            class="size-12 rounded-xl bg-success/10 flex items-center justify-center mb-6"
          >
            <BarChart3 class="size-6 text-success" />
          </div>
          <h3 class="text-2xl font-bold mb-4">Detailed Analytics</h3>
          <p class="text-muted-foreground">
            Visualize your strengths and weaknesses. Track your performance over
            time with deep learning insights.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-24">
    <div class="container mx-auto px-4">
      <div
        class="glass-card bg-gradient-to-br from-primary/20 via-background to-accent/20 p-12 md:p-20 rounded-[3rem] text-center border-primary/20"
      >
        <h2 class="text-4xl md:text-6xl font-black mb-8">
          Ready to Level Up Your Knowledge?
        </h2>
        <p class="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join thousands of learners who are already using AI to master their
          courses and pass their exams with flying colors.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <Button
            size="lg"
            href="/auth"
            class="px-12 h-14 text-xl rounded-full"
          >
            Join Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            href="/dashboard"
            class="px-12 h-14 text-xl rounded-full"
          >
            View Dashboard
          </Button>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="mt-auto py-12 border-t border-border/40">
    <div
      class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8"
    >
      <div class="flex items-center gap-2">
        <BrainCircuit class="size-6 text-primary" />
        <span class="text-lg font-bold">AI Quiz</span>
      </div>

      <div class="flex gap-8 text-sm text-muted-foreground">
        <a href="/quiz" class="hover:text-primary transition-colors"
          >Take a Quiz</a
        >
        <a href="/dashboard" class="hover:text-primary transition-colors"
          >Dashboard</a
        >
        <a href="/auth" class="hover:text-primary transition-colors"
          >Authentication</a
        >
      </div>

      <p class="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} AI Quiz App. All rights reserved.
      </p>
    </div>
  </footer>
</div>

<style>
  /* Custom scroll behavior */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
