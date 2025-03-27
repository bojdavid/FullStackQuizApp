<script lang="ts">
    let openState : boolean = $state(false);

    let {questions, questionNum, goToQuestion, viewCorrect} = $props();
    
    let answeredQuestions : number[] = $state([]);
    //let ansq  = $derived(questions.map(q => ({ isAnswered: q.answered, id: q.id })));
        

    // Ensure `answeredQuestions` updates whenever `questions` change
    $effect(() => {
        answeredQuestions = questions.map(q => ({ isAnswered: q.answered, id: q.id }));
        //console.log($state.snapshot(("Updated answeredQuestions:", an sweredQuestions)));
    });
   

    let isViewNavs = $state(false); 
const viewQuestionNavs = ()=>{
    answeredQuestions = questions.map(q => ({ isAnswered: q.answered, id: q.id }));
    //isViewNavs = !isViewNavs;
    console.log(questions[questionNum].answered);
}

</script>

<div class="flex justify-start flex-wrap">
    <!--    WHEN USER ANSWERS A QUESTION, THE BACKGROUND CHANGES-->
    <!--    WHEN USER CLICKS ON A QUESTION THEY NAVIGATE TO THE QUESTION THEY CLICK ON-->
    {#if !isViewNavs} <!---  Change back to true -->
        {#each questions as question}
            <button class="rounded-full w-13 h-13 text-lg font-bold { question.answered  ? "bg-primary-500" : "bg-secondary-500"} text-center m-2 
                        flex items-center justify-center"
                        onclick={() => goToQuestion(question.id)}
                        class:active={questionNum == question.id}>
                {question.id + 1}
            </button>
        {/each}
    {/if}
</div>



<style>
 .active{
      background-color: red;
  }
</style>