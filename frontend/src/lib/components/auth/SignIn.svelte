<script lang="ts">
  import { authState } from "$lib/store/user.svelte";
  import {
    loginSubmit,
    buttonStyle,
    inputStyle,
    labelStyle,
  } from "./authfunctions.svelte";
  import { Loader2 } from "@lucide/svelte";
  import { fly } from "svelte/transition";

  let formData = $state({
    email: "",
    password: "",
  });

  const handleSubmit = (e: Event) => {
    loginSubmit(e, formData.email, formData.password);
  };
</script>

<div class="w-full" in:fly={{ x: -20, duration: 400, delay: 100 }}>
  <!-- Error Message -->
  {#if authState.error}
    <div
      class="mb-6 p-4 rounded-lg bg-error/10 border border-error/20 text-error flex items-center gap-3"
      in:fly={{ y: -10, duration: 300 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 flex-shrink-0"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="text-sm font-medium">{authState.error}</span>
    </div>
  {/if}

  <form method="POST" class="space-y-5 relative" onsubmit={handleSubmit}>
    <!-- Loading Overlay -->
    {#if authState.isLoading}
      <div
        class="absolute inset-0 z-10 bg-light-bg/50 dark:bg-dark-bg/50 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center m-0"
        in:fly={{ y: 5, duration: 200 }}
      >
        <Loader2 class="size-10 animate-spin text-primary mb-4" />
        <p
          class="text-lg font-semibold text-light-tetiary-accent dark:text-dark-text animate-pulse"
        >
          Signing in...
        </p>
      </div>
    {/if}

    <div class="space-y-4">
      <div>
        <label for="email" class={labelStyle}>Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="name@example.com"
          bind:value={formData.email}
          class={inputStyle}
        />
      </div>

      <div>
        <div class="flex items-center justify-between mb-1.5">
          <label
            for="password"
            class="block text-sm font-medium text-light-tetiary-accent dark:text-dark-tetiary-accent/80"
            >Password</label
          >
          <a
            href="#forgot"
            class="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >Forgot password?</a
          >
        </div>
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="••••••••"
          bind:value={formData.password}
          class={inputStyle}
        />
      </div>
    </div>

    <button
      type="submit"
      class="{buttonStyle} bg-light-primary-accent hover:opacity-90 mt-6"
      disabled={authState.isLoading}
    >
      {#if authState.isLoading}
        <Loader2 class="size-5 animate-spin" />
        Processing...
      {:else}
        Sign In
      {/if}
    </button>
  </form>
</div>
