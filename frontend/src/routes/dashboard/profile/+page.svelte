<script lang="ts">
  import ProfileForm from "$lib/components/dashboard/profile/ProfileForm.svelte";
  import ProfileSummary from "$lib/components/dashboard/profile/ProfileSummary.svelte";
  import { buttonClass } from "$lib/config/config";
  import type { Profile } from "$lib/types/profile";
  import { userProfile } from "$lib/shared/shared.svelte";
  import { fade, slide } from "svelte/transition";
  import { Save, UserCog, Lock, Trash2 } from "@lucide/svelte";

  let tempProfile: Profile = $state({
    firstname: userProfile.firstname,
    lastname: userProfile.lastname,
    email: userProfile.email,
    gender: userProfile.gender,
    profilePicture: userProfile.profilePicture,
  });

  const now = new Date();
  let editProfile = $state(false);

  const saveProfileData = () => {
    userProfile.firstname = tempProfile.firstname;
    userProfile.lastname = tempProfile.lastname;
    userProfile.email = tempProfile.email;
    userProfile.gender = tempProfile.gender;
    editProfile = false;
  };
</script>

<div class="max-w-5xl mx-auto space-y-8" in:fade>
  <!-- Header & Date -->
  <header class="flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div>
      <h1 class="text-4xl font-extrabold text-gradient tracking-tight">
        User Profile
      </h1>
      <p class="text-muted-foreground font-medium mt-1">
        Manage your account settings and preferences.
      </p>
    </div>
    <div
      class="px-4 py-2 rounded-xl bg-card border border-border/50 text-sm font-semibold text-muted-foreground shadow-sm"
    >
      {now.toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </div>
  </header>

  <div class="glass-card rounded-[2.5rem] overflow-hidden">
    <!-- Hero Background -->
    <div
      class="h-32 w-full bg-gradient-to-r from-primary/80 via-accent/80 to-primary/80"
    ></div>

    <div class="px-6 md:px-12 pb-12 -mt-16">
      <!-- Profile Header Area -->
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12"
      >
        <ProfileSummary />

        <div class="w-full md:w-auto flex flex-col gap-3">
          {#if editProfile}
            <button
              class="{buttonClass(
                'success',
              )} w-full md:min-w-[140px] flex items-center justify-center gap-2 shadow-lg shadow-success/20"
              onclick={saveProfileData}
              transition:slide
            >
              <Save size={20} />
              Save Changes
            </button>
            <button
              class="px-6 py-2 rounded-xl border border-border hover:bg-muted font-bold transition-colors"
              onclick={() => (editProfile = false)}
            >
              Cancel
            </button>
          {:else}
            <button
              class="{buttonClass(
                'primaryAccent',
              )} w-full md:min-w-[140px] flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              onclick={() => (editProfile = true)}
            >
              <UserCog size={20} />
              Edit Profile
            </button>
          {/if}
        </div>
      </div>

      <!-- Settings Sections -->
      <div class="grid grid-cols-1 gap-12 pt-8 border-t border-border/50">
        <div>
          <h3
            class="text-xl font-bold text-foreground mb-6 flex items-center gap-2"
          >
            Personal Information
          </h3>
          <ProfileForm {editProfile} bind:userProfile={tempProfile} />
        </div>

        <div
          class="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border/50"
        >
          <div class="space-y-1 text-center md:text-left">
            <h4 class="font-bold text-foreground">Account Actions</h4>
            <p class="text-sm text-muted-foreground">
              Manage your sensitive account data and security.
            </p>
          </div>

          <div class="flex flex-wrap justify-center gap-4">
            <button
              class="px-6 py-2.5 rounded-xl border border-border hover:bg-muted font-bold text-foreground flex items-center gap-2 transition-all"
            >
              <Lock size={18} />
              Change Password
            </button>
            <button
              class="{buttonClass(
                'error',
              )} flex items-center gap-2 shadow-lg shadow-error/20"
            >
              <Trash2 size={18} />
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
