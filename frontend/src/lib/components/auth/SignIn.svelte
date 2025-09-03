<script lang="ts">
  import ProgressIndicator from "./common/ProgressIndicator.svelte";
  import Success from "./common/Success.svelte";
  import EmailStep from "./multistep/EmailStep.svelte";
  import PasswordStep from "./multistep/PasswordStep.svelte";

  import type { LoginFormData } from "$lib/types/auth";
  import { goto } from "$app/navigation";

  import {
    buttonStyle,
    values,
    increaseSteps,
    decreaseSteps,
    loginSubmit as submit,
  } from "./authfunctions.svelte";

  values.currentStep = 1;

  const stepLabels: string[] = [
    "Enter your email",
    "enter your password",
    "success",
  ];
  const steps: number[] = [1, 2, 3];

  let formData: LoginFormData = $state({
    email: "",
    password: "",
  });
</script>

<section class=" w-full p-6">
  <ProgressIndicator currentStep={values.currentStep} {stepLabels} {steps} />
  <!-- Error Message -->
  <div class="{values.isError ? '' : 'hidden'} text-error text-lg">
    {values.errorMessage}
  </div>
  <!-- End of error message-->
  <form
    method="POST"
    class="space-y-5"
    novalidate={false}
    onsubmit={(e) => {
      e.preventDefault();
      submit(e);
    }}
  >
    {#if values.currentStep == 1}
      <EmailStep {buttonStyle} bind:data={formData} />
    {:else if values.currentStep == 2}
      <PasswordStep {decreaseSteps} {buttonStyle} bind:data={formData} />
    {:else if values.currentStep == 3}
      <Success />
    {:else}
      something went wrong
    {/if}
  </form>
</section>
