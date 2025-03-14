<script>
    let {questions} = $props();

    let questionCount = 0;
    let answeredStyle = 'bg-secondary'
</script>

<div class="flex justify-start flex-wrap">
    {#each questions as question}
        <div class="rounded-full w-15 h-15 text-lg font-bold bg-primary-500 text-center m-2 
                    flex items-center justify-center" class:answeredStyle={question.answered}>
            {questionCount += 1}
        </div>
    {/each}
</div>

<style>

</style>