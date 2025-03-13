<script>
import "../styles/app.css";
import QuizContainer from "$lib/components/QuizContainer.svelte";

let { data } = $props();
let questions = data.questions
let questionNum = $state(0);
let active = $state('');
let viewCorrect = $state(false);

effect( () => {
    localStorage.setItem("activeOption", active)
})
/*
for(let i = 0; i < questions.length; i++){
    console.log(questions[i].Question)
}
*/

const goToNextQuestion = () => {
    localStorage.setItem("activeOption", active)
    console.log("Next question")
    questionNum++;
    active = '';
    console.log("This is the active el ", active);
    console.log(viewCorrect)
}

const viewCorrectAns = () => {

}

</script>

<main class="mx-auto min-h-screen flex flex-col items-center justify-center ">
    <div class="min-w-xs w-full max-w-2xl mx-2 px-2">
        <QuizContainer question = {questions[questionNum]} {active} {viewCorrect}/>

        <div class="w-full flex justify-end mt-10" >
            <button type="button" class="btn preset-filled-secondary-500" onclick={goToNextQuestion}>
                Skip
            </button>
        </div>
        <div class="w-full flex justify-start mt-10" class:hidden={viewCorrect}>
            <button type="button" class="btn preset-filled-secondary-500" onclick={viewCorrectAns}>
                View Correct Answer
            </button>
        </div>

        <div>
            {questions[questionNum].CorrectOption}
        </div>
    </div>
        
</main>

<style>
    .hidden{
        display: none;
    }
</style>