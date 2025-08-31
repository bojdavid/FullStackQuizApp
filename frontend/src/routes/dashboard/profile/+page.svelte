<script lang="ts">
  import ProfileForm from "$lib/components/dashboard/profile/ProfileForm.svelte";
  import ProfileSummary from "$lib/components/dashboard/profile/ProfileSummary.svelte";
  import { buttonClass } from "$lib/config/config";
  import type { Profile } from "$lib/types/profile";
  import { userProfile } from "$lib/shared/shared.svelte";

  let tempProfile: Profile = $state({
    firstname: userProfile.firstname,
    lastname: userProfile.lastname,
    email: userProfile.email,
    gender: userProfile.gender,
    profilePicture: userProfile.profilePicture,
  });

  const now = new Date();
  let editProfile: boolean = $state(false);
  const changeEditProfileState = () => {
    editProfile = true;
  };

  const saveProfileData = () => {
    userProfile.firstname = tempProfile.firstname;
    userProfile.lastname = tempProfile.lastname;
    userProfile.email = tempProfile.email;
    userProfile.gender = tempProfile.gender;
    editProfile = false;
  };
</script>

<section>
  <!-- Date -->
  <div>
    {now.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric",
    })}
  </div>

  <div class="bg-light-bg dark:bg-dark-bg rounded-lg overflow-hidden mt-10">
    <!-- Empty colorful top-->
    <div
      class="bg-gradient-to-r from-light-primary-accent to-light-tetiary-accent h-20 w-full"
    ></div>
    <div class="px-4 py-10">
      <!-- Profile Container-->
      <div class="flex justify-between mb-10">
        <!-- Profile Summary and Edit button-->
        <ProfileSummary />
        {#if editProfile}
          <button
            class=" {buttonClass('primaryAccent')}"
            onclick={saveProfileData}
          >
            Save</button
          ><!-- saves profile data -->
        {:else}
          <button
            class=" {buttonClass('primaryAccent')} "
            onclick={changeEditProfileState}
          >
            Edit</button
          ><!-- saves profile data -->
        {/if}
      </div>

      <div class="mb-10">
        <!-- Profile Form-->
        <ProfileForm {editProfile} bind:userProfile={tempProfile} />
      </div>

      <div class="flex justify-end gap-10">
        <!-- Actions-->
        <button class={buttonClass("no_bg")}>Change Password</button>
        <button class={buttonClass("error")}> Delete Account </button>
      </div>
    </div>
  </div>
</section>
