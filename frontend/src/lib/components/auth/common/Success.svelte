<script lang="ts">
  import { goto } from "$app/navigation";
</script>

<div class="mx-auto">
  <div class="text-xl">Signed In Successfully</div>
  <button
    onclick={() => goto("/dashboard")}
    class="btn px-5 py-2 text-xl mx-auto text-white bg-light-primary-accent rounded-lg"
  >
    Go to Dashboard
  </button>
</div>
