<script lang="ts">
    import { goto } from "$app/navigation";
    import "../../styles/app.css";
    import Login from "$lib/components/auth/Login.svelte";
    import SignUp from "$lib/components/auth/SignUp.svelte";

    let auth : string[] = ["Login", "SignUp"];
    let active : string = $state("Login");


    const setActive = (item: string) =>{
        active = item;
    }

    const next = () =>{
        goto("./quizSelection");
    }
</script>

<main class="flex min-h-screen items-center justify-center">
    <div class="w-full max-w-md p-6 bg-white dark:bg-surface-900 rounded-lg shadow-md">
        <button onclick={next}>
            Got to app selection
        </button><br>
        <div class="text-center">
            {#each auth as a}
                <button class="p-4 
                                {active == a? " text-secondary-300 font-bold":"text-primary-800"} 
                                hover:underline 
                                transition duration-700 ease-in-out
                                "
                        onclick={() => setActive(a)}>
                    {a}
                </button>
            {/each}
        </div>
        {#if active == "Login"}
            <Login />
        {:else if active == "SignUp"}
            <SignUp />
        {/if}
    </div>
</main>

<style>

</style>