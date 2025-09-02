<script lang="ts">
  import InputField from "$lib/components/common/InputField.svelte";

  let { buttonStyle, decreaseSteps, data = $bindable() } = $props();
</script>

<div class="w-full">
  <div class="flex mb-10">
    <InputField
      inputName="password"
      label="Enter Password"
      inputType="password"
      bind:textValue={data.password}
      required={true}
    />
  </div>
  <div class="flex gap-5 mt-5">
    <button
      type="button"
      class=" flex-1 bg-light-primary-accent hover:bg-blue-600 {buttonStyle}"
      onclick={decreaseSteps}
    >
      Previous
    </button>
    <button
      type="submit"
      class=" flex-1 bg-success hover:bg-success/90 {buttonStyle}"
    >
      Sign In >>
    </button>
  </div>
</div>
