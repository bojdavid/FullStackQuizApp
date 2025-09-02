<script lang="ts">
  import ProgressIndicator from "./common/ProgressIndicator.svelte";
  // --- State ---
  let step = $state(1);

  let form = $state({
    email: "",
    password: "",
    remember: false,
  });

  interface Errors {
    email?: string;
    password?: string;
  }
  let errors: Errors = $state({});

  let stepLabels: string[] = $state([]);

  function next() {
    step += 1;
  }
  function back() {
    step -= 1;
  }

  // --- Submit ---
</script>

<!-- Container -->
<div class="w-full p-6">
  <!-- Progress -->
  <ProgressIndicator {stepLabels} currentStep={step} steps={[1, 2, 3, 4, 5]} />

  <button onclick={back}> Prev </button>
  <button onclick={next}> Next </button>
</div>
