<script lang="ts">
  let { editProfile, userProfile = $bindable() } = $props();

  const inputClass = `
    w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-300
    bg-card/50 backdrop-blur-sm
    text-foreground placeholder-transparent
    focus:outline-none focus:ring-4 focus:ring-primary/10
    disabled:opacity-50 disabled:cursor-not-allowed
    peer
  `;

  const labelClass = `
    absolute left-4 -top-2.5 px-2 bg-card text-xs font-semibold tracking-wide
    text-muted-foreground transition-all duration-300
    peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent
    peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-card
  `;
</script>

<div class="w-full">
  <form onsubmit={(e) => e.preventDefault()} class="space-y-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- First Name -->
      <div class="relative">
        <input
          type="text"
          id="firstname"
          name="firstname"
          bind:value={userProfile.firstname}
          class="{inputClass} {editProfile
            ? 'border-primary/50'
            : 'border-border/50'}"
          disabled={!editProfile}
          placeholder="First Name"
        />
        <label for="firstname" class={labelClass}>First Name</label>
      </div>

      <!-- Last Name -->
      <div class="relative">
        <input
          type="text"
          id="lastname"
          name="lastname"
          bind:value={userProfile.lastname}
          class="{inputClass} {editProfile
            ? 'border-primary/50'
            : 'border-border/50'}"
          disabled={!editProfile}
          placeholder="Last Name"
        />
        <label for="lastname" class={labelClass}>Last Name</label>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Email -->
      <div class="relative">
        <input
          type="email"
          id="email"
          name="email"
          bind:value={userProfile.email}
          class="{inputClass} {editProfile
            ? 'border-primary/50'
            : 'border-border/50'}"
          disabled={!editProfile}
          placeholder="Email Address"
        />
        <label for="email" class={labelClass}>Email Address</label>
      </div>

      <!-- Gender -->
      <div class="relative">
        <select
          id="gender"
          name="gender"
          bind:value={userProfile.gender}
          class="{inputClass} {editProfile
            ? 'border-primary/50'
            : 'border-border/50'} appearance-none"
          disabled={!editProfile}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label for="gender" class={labelClass}>Gender</label>
      </div>
    </div>
  </form>
</div>
