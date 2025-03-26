<script lang="ts">
import "../../styles/app.css";
import { goto } from "$app/navigation";

 let link_style : string = "btn preset-filled-primary-500 mb-4 p-5 text-xl font-bold w-md";

 const startQuiz = () =>{
    
 }
</script>

<div class="m-2 p-5 w-full">
    <header class=" max-w-5xl w-full min-w-[300px] h-40 
                    dark:bg-surface-950  
                    mx-auto 
                    shadow-lg dark:shadow-primary-900 p-5">
        <h1 class="text-4xl">
            Welcome User
        </h1>
    </header>
    <main class="flex justify-center items-center h-[700px]">
        <div class="flex flex-col items-start">
            <a href="./quizSelection" class="{link_style}"> Start Quiz </a>
            <a href="./quizSelection" class="{link_style}"> View Rankings </a>
            <a href="./quizSelection" class="{link_style}"> User Stats </a>
        </div>
    
    </main>
</div>

<style>

</style>