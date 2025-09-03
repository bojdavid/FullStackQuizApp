<script lang="ts">
  import { EyeClosed, Eye } from "@lucide/svelte";

  let show: boolean = $state(false);

  const toggleshowPassword = () => {
    show = !show;
  };

  let {
    textValue = $bindable(),
    inputType,
    label,
    inputName,
    required = false,
  } = $props();

  const INPUTSTYLE = `
  w-full px-4 py-3 border border-light-tetiary-accent rounded-md
  bg-transparent                     
  text-gray-900 placeholder-gray-500
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
  dark:text-dark-main-text dark:placeholder-dark-main-text/50
  appearance-none peer block

  disabled:bg-gray-100 disabled:dark:bg-neutral-700
  disabled:text-gray-400 disabled:dark:text-neutral-500
  disabled:cursor-not-allowed
  disabled:border-gray-300 disabled:dark:border-neutral-600
`;

  const LabelStyle: string = `absolute text-sm text-light-secondary-text dark:text-light-tetiary-accent duration-300 
    transform -translate-y-4 scale-75 top-2 z-10 origin-[0] 
    dark:bg-dark-bg bg-light-bg px-2 
    peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`;
</script>

{#if inputType != "password"}
  <div class="relative w-full">
    <input
      type={inputType}
      id={label}
      name={inputName}
      bind:value={textValue}
      class={INPUTSTYLE}
      disabled={false}
      {required}
      placeholder=""
    />
    <label for="firstname" class={LabelStyle}>{label}</label>
  </div>
{:else}
  <div class="relative w-full">
    <input
      type={show ? "text" : "password"}
      id={label}
      name={inputName}
      bind:value={textValue}
      class={INPUTSTYLE}
      disabled={false}
      {required}
      placeholder=""
    />
    <label for="firstname" class={LabelStyle}>{label}</label>
    <button
      type="button"
      onclick={toggleshowPassword}
      class="absolute right-5 top-3"
    >
      {#if show}
        <Eye />
      {:else}
        <EyeClosed />
      {/if}
    </button>
  </div>
{/if}
