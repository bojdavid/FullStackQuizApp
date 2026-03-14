<script lang="ts">
  import authImg from "$lib/assets/auth.jpeg";
  import SignIn from "$lib/components/auth/SignIn.svelte";
  import Signup from "$lib/components/auth/Signup.svelte";
  import LightSwitch from "$lib/components/common/LightSwitch.svelte";
  import { BrainCircuit } from "@lucide/svelte";
  import { fly } from "svelte/transition";

  let authType = $state("login");

  const oAuthButtons = [
    {
      text: "Google",
      icon: `<svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>`,
    },
    {
      text: "Apple",
      icon: `<svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 21.492c-1.353 1.353-2.848 1.402-4.305.656-1.554-.75-2.903-.75-4.408 0-1.503.799-2.952.656-4.256-.656-4.56-4.204-6.315-10.457-2.505-14.717 1.604-1.804 3.458-2.454 5.263-2.454 1.554 0 2.952.75 4.106.75 1.152 0 2.752-.8 4.507-.8 2.254 0 4.058 1.05 5.16 2.802-4.458 2.353-3.707 8.36 1.053 10.163-1.053 2.053-2.605 4.105-4.615 4.256zM15.463 6.033c.852-1.05.952-2.553.802-3.803-1.152.15-2.753.85-3.605 1.85-.75.85-1.102 2.102-.952 3.353 1.303.152 2.654-.5 3.755-1.4z" /></svg>`,
    },
  ];
</script>

<svelte:head>
  <title>{authType === 'login' ? 'Sign In' : 'Create Account'} - AI Quiz</title>
</svelte:head>

<section class="flex flex-col lg:flex-row min-h-screen bg-light-bg dark:bg-dark-bg">
  <!-- Interactive Form Side -->
  <div class="flex-1 flex flex-col px-6 py-8 sm:px-12 lg:px-16 xl:px-24 justify-center relative relative">
    
    <!-- Top Nav -->
    <div class="absolute top-8 left-6 sm:left-12 lg:left-16 right-6 sm:right-12 lg:right-16 flex justify-between items-center">
      <a href="/" class="flex items-center gap-2 group">
        <div class="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <BrainCircuit class="size-6 text-primary" />
        </div>
        <span class="text-xl font-bold tracking-tight text-gradient">AI Quiz</span>
      </a>
      <LightSwitch size={24} />
    </div>

    <!-- Main Auth Content -->
    <div class="max-w-[420px] w-full mx-auto mt-16 lg:mt-0">
      
      <!-- Header Area -->
      <div class="text-center mb-8" in:fly={{ y: 20, duration: 400 }}>
        <h1 class="text-3xl font-bold tracking-tight mb-2 text-light-text dark:text-dark-text">
          {authType === "login" ? "Welcome back" : "Create an account"}
        </h1>
        <p class="text-sm text-muted-foreground">
          {authType === "login" 
            ? "Enter your credentials to access your account" 
            : "Join thousands of learners mastering their subjects"}
        </p>
      </div>

      <!-- Toggle Switcher -->
      <div class="bg-light-secondary-bg dark:bg-dark-secondary-bg p-1 rounded-xl flex items-center mb-8" in:fly={{ y: 20, duration: 400, delay: 50 }}>
        <button
          class="flex-1 py-2 text-sm font-medium rounded-lg transition-all {authType === 'login' ? 'bg-light-bg dark:bg-dark-bg shadow-sm text-light-text dark:text-dark-text' : 'text-muted-foreground hover:text-light-text dark:hover:text-dark-text'}"
          onclick={() => authType = "login"}
        >
          Sign In
        </button>
        <button
          class="flex-1 py-2 text-sm font-medium rounded-lg transition-all {authType === 'signup' ? 'bg-light-bg dark:bg-dark-bg shadow-sm text-light-text dark:text-dark-text' : 'text-muted-foreground hover:text-light-text dark:hover:text-dark-text'}"
          onclick={() => authType = "signup"}
        >
          Sign Up
        </button>
      </div>

      <!-- Form Area -->
      <div class="min-h-[300px]">
        {#if authType === "login"}
          <SignIn />
        {:else}
          <Signup />
        {/if}
      </div>

      <div class="relative py-6">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t border-light-secondary-accent/20 dark:border-dark-secondary-accent/20"></span>
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-light-bg dark:bg-dark-bg px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      <!-- OAuth actions -->
      <div class="grid grid-cols-2 gap-4">
        {#each oAuthButtons as oauth}
          <button
            onclick={() => {}}
            class="flex items-center justify-center py-2.5 px-4 rounded-lg border border-light-secondary-accent/20 dark:border-dark-secondary-accent/20 hover:bg-light-secondary-bg dark:hover:bg-dark-secondary-bg transition-colors text-sm font-medium text-light-text dark:text-dark-text"
          >
            {@html oauth.icon}
            {oauth.text}
          </button>
        {/each}
      </div>
      
      <!-- Footer terms -->
      <p class="mt-8 text-center text-xs text-muted-foreground">
        By clicking continue, you agree to our <br class="hidden sm:block" />
        <a href="#terms" class="underline underline-offset-4 hover:text-primary">Terms of Service</a> and 
        <a href="#privacy" class="underline underline-offset-4 hover:text-primary">Privacy Policy</a>.
      </p>

    </div>
  </div>

  <!-- Graphic / Image Side -->
  <div class="hidden lg:flex lg:w-1/2 p-4">
    <div class="w-full h-full relative rounded-3xl overflow-hidden glass-card bg-primary/5 border border-primary/10">
      <!-- Decorative background elements -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 mix-blend-overlay"></div>
      
      <div class="absolute inset-0 flex flex-col justify-end p-12 text-white bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10">
        <div class="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold w-fit">
          <BrainCircuit class="size-4" />
          <span>JOIN 10K+ STUDENTS</span>
        </div>
        <h2 class="text-4xl font-bold mb-4 leading-tight">Master your subjects<br/>with AI-powered quizzes.</h2>
        <p class="text-slate-300 text-lg max-w-md">Transform your study materials into interactive learning experiences in seconds.</p>
      </div>

      <img src={authImg} alt="Authentication Graphic" class="w-full h-full object-cover object-center absolute inset-0 -z-10" />
    </div>
  </div>
</section>
