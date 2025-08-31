<script lang="ts">
  import AppSidebar from "$lib/components/dashboard/AppSidebar.svelte";
  import NavBar from "$lib/components/dashboard/NavBar.svelte";
  import { page } from "$app/state";

  let { children } = $props();

  let openSideBar = $state(true);

  const closeSideBar = () => {
    openSideBar = !openSideBar;
    console.log(openSideBar);
  };
  //  console.log(page);
</script>

<section
  class="max-w-[2000px] mx-auto overflow-x-hidden overflow-y-display xl:min-h-[832px] h-screen flex"
>
  <div class="relative flex w-full">
    <!-- Side Bar -->
    <div class="md:hidden">
      <aside
        class="w-full ease-in-out transform transition-all duration-500 {openSideBar
          ? ' -translate-x-full opacity-0  '
          : ' translate-x-0 opacity-100'} absolute overflow-y-auto z-50"
      >
        <AppSidebar {closeSideBar} />
      </aside>

      <button class="" onclick={closeSideBar}>Open</button>
    </div>
    <!-- End of side bar for small screens-->

    <!-- Side Bar-->
    <div class="hidden md:block w-[300px]">
      <AppSidebar {closeSideBar} />
    </div>
    <!-- End Of Sidebar-->

    <div class="flex flex-col w-full px-5">
      <NavBar />
      {@render children?.()}
    </div>
  </div>
</section>
