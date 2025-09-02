<script lang="ts">
  let { currentStep, stepLabels, steps } = $props();
  /**
   * Current step : the active step that user is currently on
   * stepLabels: the labels of each step e.g step1 - enter email
   * steps : array of the number of steps [1,2,3,4]
   * step labels should be the same number as the number of steps
   * I should change stepLables and steps to a dictionary sometime sha - for future reference
   */
</script>

<div class="mb-8 w-full flex justify-center">
  <div class="flex items-center justify-evenly space-x-4 mb-4 w-full">
    {#each steps as step, index}
      <div class="{index < steps.length - 1 ? 'flex-1' : ''} flex gap-5">
        <div
          class=" relative w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all transition-discrete duration-1500 {currentStep >=
          step
            ? step === steps[steps.length - 1]
              ? 'bg-green-600 text-white'
              : 'bg-blue-600 text-white' // Completed steps are colored
            : 'bg-gray-200 text-gray-500'}"
        >
          {step === steps[steps.length - 1] ? "✓" : step}

          <div
            class="absolute -top-6 text-nowrap {currentStep >= step
              ? step === 3
                ? ' text-success'
                : ' text-light-main-text dark:text-dark-main-text' // Completed steps are colored
              : ' text-gray-500 '}"
          >
            {stepLabels[index]}
          </div>
        </div>
        {#if index < steps.length - 1}
          <!-- The indicator line -->
          <div
            class="h-2 w-8/10 transition-all duration-900 my-auto bg-gray-200 border border-2 border-gray-200"
          >
            <div
              class="h-1 w-0 transition-all duration-900 my-auto {currentStep >
              step
                ? step === steps[steps.length - 2]
                  ? 'bg-green-600 w-full'
                  : 'bg-blue-600 w-full' // Color completed connections
                : 'bg-gray-200 border border-2 border-gray-200'}"
            ></div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
