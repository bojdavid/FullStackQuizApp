<script lang=ts>

let {subjects, pickSubject, submitButtonClass, selectSubject, selectedSubject} = $props()


</script>

<div class="grid grid-cols-2 gap-5 text-md my-5">
    {#each subjects as subject}
        <button type="button" class="btn preset-outlined-primary-500 rounded-lg text-xl p-4 {selectedSubject == undefined?"":selectedSubject.id == subject.id? "bg-secondary-500":""}"
            onclick={() => pickSubject(subject)}>
            {subject.subject}
        </button>
    {/each}            
</div>



<div class="flex justify-end " >
    <button type="button" class="{submitButtonClass}"
                onclick={selectSubject}>
        Select Subject
    </button>
</div>