<script lang=ts>
    let { submitButtonClass, selectedQuestionRange, selectRange, startQuiz, questions_limit} = $props();

    
    console.log(questions_limit);
    // questions_range will keep incrementing by 10 as long as it is less than questionslimit
    //let questions_range : number[] = Array.from({ length: Math.floor(questions_limit / 10) }, (_, i) => (i + 1) * 10);
    let questions_range : number[] = Array.from({ length: 10 }, (_, i) => Math.round((i + 1) * (questions_limit / 10)));

    
</script>

<div class="grid grid-cols-2 gap-5 text-md my-5">
    {#each questions_range as range}
        <button type="button" class="btn preset-outlined-primary-500 rounded-lg text-xl p-4 {selectedQuestionRange == range?"bg-secondary-500":""}"
            onclick={() => selectRange(range)}    
        >
            {range}
        </button>
    {/each}            
</div>

<div class="flex justify-end " >
    <button type="button" class="{submitButtonClass}"
            onclick={startQuiz}            
    >
        Start Quiz
    </button>
</div>