<script lang="ts">
  import auth from "$lib/assets/auth.jpeg";
  import SignIn from "$lib/components/auth/SignIn.svelte";
  import Signup from "$lib/components/auth/Signup.svelte";
  import Header from "$lib/components/auth/common/Header.svelte";

  import LightSwitch from "$lib/components/common/LightSwitch.svelte";
  const actionAlert = () => {};
  let oAuthButtons = [
    {
      text: "Sign In with google",
      icon: "G",
      action: actionAlert,
      buttonColor: "",
    },
    {
      text: "Sign In with Apple",
      icon: "A",
      action: actionAlert,
      buttonColor: "",
    },
    {
      text: "Sign In with Facebook",
      icon: "F",
      action: actionAlert,
      buttonColor: "",
    },
  ];

  let authType = $state("signup");
  const changeToLogin = () => {
    authType = "login";
  };
  const changeToSignUp = () => {
    authType = "signup";
  };
</script>

<section class="flex flex-col lg:flex-row min-h-screen">
  <!-- text / form side ----------------------------------------------------->
  <div class="flex-1 bg-light-bg dark:bg-dark-bg px-4 py-8 sm:px-8 lg:px-12">
    <LightSwitch size={30} />

    <Header {authType} {changeToSignUp} {changeToLogin} />

    <div class="max-w-[700px] mx-auto mt-8 md:mt-12">
      {#if authType == "login"}
        <SignIn />
      {:else if authType == "signup"}
        <Signup />
      {/if}

      <div
        class="flex w-full items-center justify-center text-light-tetiary-accent text-2xl md:text-3xl lg:text-4xl font-bold gap-2 md:gap-5 mt-8 md:mt-10"
      >
        <span class="flex-1 h-px bg-light-tetiary-accent"></span>
        OR
        <span class="flex-1 h-px bg-light-tetiary-accent"></span>
      </div>

      <!-- OAuth actions -->
      <div class="mt-8 md:mt-10">
        {#each oAuthButtons as oauth}
          <button
            onclick={oauth.action}
            class="w-full text-light-bg bg-light-primary-accent mb-4 rounded-lg p-3 font-bold flex-1"
          >
            {oauth.text} - {oauth.icon}
          </button>
        {/each}
      </div>
    </div>
  </div>

  <!-- image side ----------------------------------------------------------->
  <div
    class="hidden lg:block lg:w-1/2 h-screen min-h-[500px] overflow-hidden flex-1"
  >
    <img src={auth} alt="" class="w-full object-cover" />
  </div>
</section>
