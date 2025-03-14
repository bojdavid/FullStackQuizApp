<script>
import "../styles/app.css";
import QuizContainer from "$lib/components/QuizContainer.svelte";
import QuestionsNavigation from "$lib/components/QuestionsNavigation.svelte";

let { data } = $props();
let questions = data.questions
let questionNum = $state(0);
let viewCorrect = $state(false);
let selectedAns = $state(true);
let hideItem = "hidden";


//Add a property for when the question has been answered
for(let i = 0; i < questions.length; i++){
    questions[i].answered = false;
    console.log(questions[i])
}


const goToNextQuestion = () => {
    questionNum++;
    viewCorrect = false;
    }

const viewCorrectAns = () => {
    viewCorrect=true;
}

</script>

<main class="mx-auto min-h-screen flex flex-col items-center justify-center ">
    <div class="min-w-xs w-full max-w-2xl mx-2 px-2">
        <QuizContainer question = {questions[questionNum]} {viewCorrect} {goToNextQuestion} {selectedAns}/>

        
        <section class="mb-10">
            <div class="w-full flex justify-start mt-10" >
                <button type="button" class="btn preset-filled-secondary-500" onclick={viewCorrectAns}>
                    {#if  !viewCorrect}
                        View Correct Answer
                    {:else}
                        View Reason for Answer
                    {/if}
                </button>
            </div>
    
            <!--
            <div class:hidden={!viewCorrect}>
                {questions[questionNum].CorrectOption}
            </div>
            -->
        </section>

        <QuestionsNavigation  {questions}/>
    </div>
        
</main>

<style>
    .hidden{
        display: none;
    }
</style>