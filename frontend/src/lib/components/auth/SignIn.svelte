<script lang="ts">
  import ProgressIndicator from "./common/ProgressIndicator.svelte";
  import Success from "./common/Success.svelte";
  import EmailStep from "./multistep/EmailStep.svelte";
  import PasswordStep from "./multistep/PasswordStep.svelte";

  import type { LoginFormData } from "$lib/types/auth";
  import { goto } from "$app/navigation";

  let currentStep: number = $state(1);
  const stepLabels: string[] = [
    "Enter your email",
    "enter your password",
    "success",
  ];
  const steps: number[] = [1, 2, 3];

  let buttonStyle: string =
    "w-full py-3 rounded-md  text-white text-xl font-semibold  transition duration-200";

  let redirectSuccessLoader = $state(false);
  const increaseSteps = () => {
    if (currentStep < 3) {
      currentStep += 1;
    } else {
      currentStep = 1;
    }
  };
  const decreaseSteps = () => {
    if (currentStep > 1) {
      currentStep -= 1;
    } else {
      currentStep = 1;
    }
  };

  const submit = (event: any) => {
    // 1. Let the browser validate
    if (!event.currentTarget.checkValidity()) {
      return; // invalid → stop, browser shows tooltip
    }
    event.preventDefault(); // stop real submission
    // 2. Decide what to do
    if (currentStep === 1) {
      increaseSteps(); // move to password step
    } else if (currentStep === 2) {
      increaseSteps();
      redirectSuccessLoader = true;
    }
    //3. Send data to server and wait for success
    if (redirectSuccessLoader) {
      console.log(formData);
      //goto("./dashboard");
    }
  };

  let formData: LoginFormData = $state({
    email: "",
    password: "",
  });
</script>

<section class=" w-full p-6">
  <ProgressIndicator {currentStep} {stepLabels} {steps} />
  <form
    method="POST"
    class="space-y-5"
    novalidate={false}
    onsubmit={(e) => {
      e.preventDefault();
      submit(e);
    }}
  >
    {#if currentStep == 1}
      <EmailStep {buttonStyle} bind:data={formData} />
    {:else if currentStep == 2}
      <PasswordStep {decreaseSteps} {buttonStyle} bind:data={formData} />
    {:else if currentStep == 3}
      <Success />
    {:else}
      something went wrong
    {/if}
  </form>
</section>
