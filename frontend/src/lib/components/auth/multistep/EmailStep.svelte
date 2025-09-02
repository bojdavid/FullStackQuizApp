<script lang="ts">
  let { buttonStyle, data = $bindable() } = $props();
  import InputField from "$lib/components/common/InputField.svelte";
</script>

<div class="w-full">
  <InputField
    inputName="email"
    label="Enter email"
    inputType="email"
    bind:textValue={data.email}
    required={true}
  />
  <button
    type="submit"
    class="{buttonStyle} bg-light-primary-accent hover:bg-blue-600 mt-5"
  >
    Next
  </button>
</div>
