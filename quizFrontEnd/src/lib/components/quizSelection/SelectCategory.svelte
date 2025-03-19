
<script>

    let {selectAllCategory, allCategory, selectedCategory, submitButtonClass, doneSelectingCategory, selectedSubject, addCategoryToSelection} = $props();

</script>

<div class="flex justify-start " >
    <button type="button" class="btn preset-outlined-secondary-500 rounded-lg text-md p-4"
            onclick={selectAllCategory}>
                {allCategory?"Selected All":"Select All"}
    </button>
</div>

<div class="grid grid-cols-2 gap-5 text-md my-5">
    {#each selectedSubject.category as category}
        <button type="button" class="btn preset-outlined-primary-500 rounded-lg text-xl p-4 {selectedCategory.includes(category)?"bg-secondary-500":""}"
            onclick={() => addCategoryToSelection(category)}    
        >
            {category.topic}
        </button>
    {/each}            
</div>

<div class="flex justify-end " >
    <button type="button" class="{submitButtonClass}"
            onclick={doneSelectingCategory}            
    >
        Select Topic
    </button>
</div>