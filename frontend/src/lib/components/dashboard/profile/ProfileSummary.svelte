<script lang="ts">
  import profile from "$lib/assets/profile.jpeg";
  import { userProfile as u } from "$lib/shared/shared.svelte";

  let imgSrc: string = ""; //profile;
  let fn: string = $state(u.firstname);
  let ln: string = $state(u.lastname);
  let email: string = $state(u.email);
  let lastUpdated: string = "23 of jan 2025";
</script>

<div class="flex flex-col">
  <div class="flex gap-10">
    <!-- Profile Picture and profle picture actions -->
    <div>
      <div
        class="rounded-full w-30 h-30 bg-light-primary-accent overflow-hidden flex items-center justify-center"
      >
        {#if imgSrc == ""}
          <!-- Display Initials-->
          <em class="text-7xl font-semibold">
            {fn[0]}
            {ln[0]}
          </em>
        {:else}
          <!-- Display Profile-->
          <img src={imgSrc} alt="profilePicture" />
        {/if}
      </div>
      <!-- Actions: edit, delete profile picture-->
      <div class="flex flex-col items-center">
        <button class="text-warning">Edit Picture</button>
        <button class="text-error"> Delete Picture</button>
      </div>
    </div>

    <!-- Summary :name, email, last updated-->
    <div class="flex flex-col">
      <h3 class="text-5xl font-semibold">{fn} {ln}</h3>
      <p
        class="mt-1 text-lg text-light-main-text/50 dark:text-dark-main-text/50"
      >
        {email}
      </p>
      <p class="text-light-main-text/50 dark:text-dark-main-text/50">
        Last Updated: {lastUpdated}
      </p>
    </div>
  </div>
</div>
