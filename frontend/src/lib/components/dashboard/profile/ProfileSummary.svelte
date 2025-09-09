<script lang="ts">
  import { userProfile as u } from "$lib/store/user.svelte";

  let imgSrc: string = ""; //profile;
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
            {u.firstname[0]}
            {u.lastname[0]}
          </em>
        {:else}
          <!-- Display Profile-->
          <img src={imgSrc} alt="profilePicture" />
        {/if}
      </div>
      <!-- Actions: edit, delete profile picture-->
      <div class="flex flex-col items-center">
        <button class="text-warning">Edit Picture</button>
        {#if imgSrc == ""}
          <button class="text-success"> Delete Picture</button>
        {:else}
          <button class="text-error"> Delete Picture</button>
        {/if}
      </div>
    </div>

    <!-- Summary :name, email, last updated-->
    <div class="flex flex-col">
      <h3 class="text-5xl font-semibold">{u.firstname} {u.lastname}</h3>
      <p
        class="mt-1 text-lg text-light-main-text/50 dark:text-dark-main-text/50"
      >
        {u.email}
      </p>
      <p class="text-light-main-text/50 dark:text-dark-main-text/50">
        Last Updated: {lastUpdated}
      </p>
    </div>
  </div>
</div>
