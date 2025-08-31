<script lang="ts">
  import LightSwitch from "../common/LightSwitch.svelte";
  import profile from "$lib/assets/profile.jpeg";
  import { userProfile as u } from "$lib/shared/shared.svelte";

  function getGreeting(): string {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour < 17) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }

  const greeting: string = getGreeting();
</script>

<section class="flex justify-between w-full py-5">
  <p class="text-5xl my-auto">{greeting}, {u.firstname} {u.lastname}</p>
  <div class="flex gap-5">
    <div
      class="bg-light-tetiary-accent/30 dark:bg-dark-secondary-accent my-auto flex gap-2 item-center h-full rounded-lg py-auto h-15 px-2 py-1"
    >
      <div class=" my-auto h-15">
        <!-- Profile placeholder-->
        <img src={profile} alt="" class=" h-full w-auto rounded-lg my-auto" />
      </div>
      <div class="my-auto text-2xl">{u.firstname} {u.lastname}</div>
    </div>
    <LightSwitch size={40} />
  </div>
</section>
