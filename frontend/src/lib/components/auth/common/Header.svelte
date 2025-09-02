<script lang="ts">
  let { authType, changeToLogin, changeToSignUp } = $props();
  //type can only be login or sign up

  type AuthType = "login" | "signup";
</script>

{#if authType == "login"}
  <div class="w-fit mx-auto text-center">
    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
      Sign Into Your Account
    </h1>
    <p class="mt-2">
      Don't have an account?
      <button class="text-light-primary-accent" onclick={changeToSignUp}
        >Sign Up</button
      >
    </p>
  </div>
{:else if authType == "signup"}
  <div class="w-fit mx-auto text-center">
    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
      Create an Account
    </h1>
    <p class="mt-2">
      Already have an account?
      <button class="text-light-primary-accent" onclick={changeToLogin}
        >Login</button
      >
    </p>
  </div>
{:else}
  value passed can only be "signup" or "login"
{/if}
