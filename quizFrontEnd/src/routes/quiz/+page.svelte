<script>
import "../../styles/app.css";
import QuizContainer from "$lib/components/QuizContainer.svelte";
import QuestionsNavigation from "$lib/components/QuestionsNavigation.svelte";
import { Progress } from '@skeletonlabs/skeleton-svelte';

let { data } = $props();
let questions = data.questions
let questionNum = $state(0);
let viewCorrect = $state(false);
let selectedAns = $state(true);
let animateEndQuizbtn = $state(false);
let hideItem = "hidden";

//Add a property for when the question has been answered
for(let i = 0; i < questions.length; i++){
    questions[i].answered = false;
    questions[i].view_correct_ans = false;
    questions[i].choice = '';
    questions[i].id = i
    // console.log(questions[i])
}


const goToNextQuestion = () => {
    //Do not let the questions num go beyond the questions index as it increments
    if(questionNum < questions.length - 1){
        questionNum++;
    }
    //Animate the end quiz button when the user gets to the last question so they can notice it.
    if(questionNum == (questions.length - 1 )){
        animateEndQuizbtn = true;
        setTimeout(() => {
            animateEndQuizbtn = false;
            console.log("the timeout function works")
        },3000);
    }
    viewCorrect = false;
    }

const goToPrevQuestion = () =>{
    //Do not let the questions num go beyond the questions index as it decrements
    if(questionNum >= 0){
        questionNum--;
    }
    viewCorrect = false
}


const viewCorrectAns = (question) => {
    question.view_correct_ans = true;
    viewCorrect=true;
    
}

const goToQuestion = (id) =>{
    questionNum = id;
    viewCorrect=false;
}

const endQuiz = () => {
    let count = 0;
    for(let i = 0; i < questions.length; i++){
        if(questions[i].choice == questions[i].CorrectOption){
            count++
        }else{continue};
    }
    alert(count);
    location.reload();
}

</script>

<main class="mt-10 mx-auto min-h-screen flex flex-col items-center justify-center ">
    <div class="min-w-xs w-full max-w-2xl mx-2 px-2">

        <div class="text-3xl font-bold  mb-5">
            Timer
        </div>

        <div class="flex justify-end mb-5">
            <button class=" btn preset-filled-tertiary-500 {animateEndQuizbtn?" animate animate-spin ":" "}"
                    onclick={endQuiz}
            >
                End Quiz
            </button>
        </div>
        
        <div class="mb-5">
            <div>
                <h2 class="text-xl">
                    {questionNum + 1}/{questions.length}
                </h2>
            </div>
            <Progress value={questionNum} max={questions.length -1}/>
        </div>   
        
        <QuizContainer 
                question = {questions[questionNum]} 
                {viewCorrect} 
                {goToNextQuestion} 
                {goToPrevQuestion}
                {questionNum}
                {selectedAns}
                {viewCorrectAns}
        />

        

        <QuestionsNavigation  {questions} {questionNum} {goToQuestion} {viewCorrect}/>
    </div>
        
</main>

<style>


</style>