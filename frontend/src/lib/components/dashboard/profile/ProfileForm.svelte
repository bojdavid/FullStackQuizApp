<script lang="ts">
  let { editProfile, userProfile = $bindable() } = $props();

  const INPUTSTYLE: string = `w-full px-4 py-3 border border-light-tetiary-accent rounded-md
                 text-gray-900 placeholder-gray-500
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 dark:text-dark-main-text dark:placeholder-dark-main-text/50 
                 
                  disabled:bg-gray-100 disabled:dark:bg-neutral-700
                  disabled:text-gray-400 disabled:dark:text-neutral-500
                  disabled:cursor-not-allowed
                  disabled:border-gray-300 disabled:dark:border-neutral-600
                 `;
</script>

<div class="w-full">
  <form action="">
    <div class="flex justify-between gap-10">
      <!-- First Name -->
      <div class="flex flex-col w-full">
        <label for="firstname" class="text-xl">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          bind:value={userProfile.firstname}
          class={INPUTSTYLE}
          disabled={!editProfile}
        />
      </div>

      <!-- Last Name -->
      <div class="flex flex-col w-full">
        <label for="lastname" class="text-xl">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          bind:value={userProfile.lastname}
          class={INPUTSTYLE}
          disabled={!editProfile}
        />
      </div>
    </div>

    <div class="flex justify-between gap-10 mt-10">
      <!-- Email -->
      <div class="flex flex-col w-full">
        <label for="email" class="text-xl">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          bind:value={userProfile.email}
          class={INPUTSTYLE}
          disabled={!editProfile}
        />
      </div>

      <!-- Gender -->
      <div class="flex flex-col w-full">
        <label for="gender" class="text-xl">Gender</label>
        <input
          type="text"
          id="gender"
          name="gender"
          bind:value={userProfile.gender}
          class={INPUTSTYLE}
          disabled={!editProfile}
        />
      </div>
    </div>
  </form>
</div>
