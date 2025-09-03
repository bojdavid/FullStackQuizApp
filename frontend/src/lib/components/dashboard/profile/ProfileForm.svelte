<script lang="ts">
  let { editProfile, userProfile = $bindable() } = $props();

  const INPUTSTYLE: string = `w-full px-4 py-3 border border-light-tetiary-accent rounded-md
                 text-gray-900 placeholder-gray-500
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 dark:text-dark-main-text dark:placeholder-dark-main-text/50 
                 
                  disabled:bg-light-tetiary-accent/50 disabled:dark:bg-light-tetiary-accent/20
                  disabled:text-gray-400 disabled:dark:text-neutral-500
                  disabled:cursor-not-allowed
                  disabled:border-gray-300 disabled:dark:border-neutral-600
                  bg-transparent  appearance-none  peer block
                 `;

  const LabelStyle = `absolute text-sm text-gray-500 dark:text-gray-400 duration-300 
    transform -translate-y-4 scale-75 top-2 z-10 origin-[0] 
    dark:bg-dark-bg bg-light-bg px-2 
    peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`;
</script>

<div class="w-full">
  <form action="">
    <div class="flex justify-between gap-10">
      <!-- First Name -->
      <div class="relative w-full">
        <input
          type="text"
          id="firstname"
          name="firstname"
          bind:value={userProfile.firstname}
          class={INPUTSTYLE}
          disabled={!editProfile}
          placeholder=""
        />
        <label for="firstname" class={LabelStyle}>First Name</label>
      </div>

      <!-- Last Name -->
      <div class="relative w-full">
        <input
          type="text"
          id="lastname"
          name="lastname"
          bind:value={userProfile.lastname}
          class={INPUTSTYLE}
          disabled={!editProfile}
          placeholder=""
        />
        <label for="lastname" class={LabelStyle}>Last Name</label>
      </div>
    </div>

    <div class="flex justify-between gap-10 mt-10">
      <!-- Email -->
      <div class="relative w-full">
        <input
          type="email"
          id="email"
          name="email"
          bind:value={userProfile.email}
          class={INPUTSTYLE}
          disabled={!editProfile}
          placeholder=" "
        />
        <label for="email" class={LabelStyle}>Email</label>
      </div>

      <!-- Gender -->
      <div class="relative w-full">
        <input
          type="text"
          id="gender"
          name="gender"
          bind:value={userProfile.gender}
          class={INPUTSTYLE}
          disabled={!editProfile}
          placeholder=""
        />
        <label for="gender" class={LabelStyle}>Gender</label>
      </div>
    </div>
  </form>
</div>
