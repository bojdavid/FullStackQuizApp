<script lang="ts">
import "../../styles/app.css";
import SelectSubject from "$lib/components/quizSelection/SelectSubject.svelte";
import SelectCategory from "$lib/components/quizSelection/SelectCategory.svelte";
import SelectQuestionRange from "$lib/components/quizSelection/SelectQuestionRange.svelte";
import { goto } from "$app/navigation";
   
    //sample data
    interface category {
        topic : string;
        no_of_questions : number;
    }

    interface subject {
        subject : string;
        category : category[];
        id? : number;

    }
    
    let {data} = $props();

    let subjects : subject[] = data.subjects

for(let i:number = 0; i < subjects.length; i++){
    subjects[i].id = i;
}
   
    
    
    
    let selectedSubject : subject = $state();
    
    let selectCategory : boolean = $state(false);
    let selectedCategory : category[] = $state([]);
    let allCategory : boolean = $state(false);
    
    let selectQuestionRange :boolean = $state(false);
    let questions_limit : number = $state(0);
    let selectedQuestionRange :number = $state();
    
    //Styles for the Buttons
    let submitButtonClass :string = "btn preset-outlined-secondary-500 rounded-lg text-md p-4"
  
    const pickSubject = (subj: subject): void => {
        selectedSubject = subj;
    }
    const selectSubject = (): void => {
        // Check if selectedSubject is empty
        if(selectedSubject == undefined){
            console.log("Please select a subject")
        }else{
            selectCategory = true;
        }
    }

    const addCategoryToSelection = (cat: category) : void=>{
        //remove the category if its already selected
        if(selectedCategory.includes(cat)){
            console.log("category exists")
            selectedCategory = selectedCategory.filter(item => item !== cat);
        }else{
            selectedCategory.push(cat);
        }
        console.log($state.snapshot(selectedCategory))
    }

    const selectAllCategory = (): void =>{
        if(!allCategory){
            selectedCategory = [...selectedSubject.category];
            allCategory = true;
        }else{
            selectedCategory = [];
            allCategory = false;
        }
    }

    const doneSelectingCategory = ():void =>{
        if(selectedCategory.length == 0){
            alert("You need to select at least one category")
        }else{
            for(let i:number = 0; i < selectedCategory.length; i++){
                questions_limit = questions_limit + selectedCategory[i].no_of_questions
            }
            selectQuestionRange = true;
        }
    }

    const selectRange = (range:number):void =>{
        selectedQuestionRange = range;
    }

    const startQuiz = async () : Promise<void> => {
        let formData :FormData = new FormData();
        formData.append("subject", selectedSubject.subject);
        formData.append("Category", JSON.stringify(selectedCategory));
        formData.append("noOfQuestion", selectQuestionRange.toString());

        const response = await fetch('?/startQuiz_', {
                method: 'POST',
                body: formData
            });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
        goto('/quiz')
    
        

        //alert(`Subject: ${selectedSubject.subject} \n Category: ${selectedCategory.map(cat => cat.topic).join(", ")} \n Number Of Questions = ${selectedQuestionRange}`)
        //location.reload();
    }

</script>


<main class="min-h-screen">

    <header class="pt-20 
                    flex flex-col
                    min-w-xs w-full max-w-6xl 
                    mx-auto">
            <a href="./home" class="btn preset-filled-primary-500 w-[150px]"> Home</a>
            <div class="mx-auto">
                <h2 class="text-4xl">
                    Select {selectQuestionRange?"Question":selectCategory?"Topic":"Subject"}
                </h2>
            <p class="text-xs"> You can only select one subject</p>
            </div>
    </header>
    
    <div class="mx-auto  flex flex-col items-center justify-center my-20 ">
        <div class="min-w-xs w-full max-w-6xl mx-2 rounded-md shadow-md shadow-primary-700 p-4">
            

            {#if !selectCategory }
                    <SelectSubject 
                            subjects = {subjects} 
                            {pickSubject} 
                            {submitButtonClass} 
                            {selectSubject} 
                            {selectedSubject}
                    />
            {:else if (selectCategory && !selectQuestionRange)}                     
                   <SelectCategory 
                        {selectedSubject}
                        {selectAllCategory} 
                        {addCategoryToSelection}
                        {allCategory} 
                        {selectedCategory} 
                        {submitButtonClass} 
                        {doneSelectingCategory}
                   />
            {:else}
                    <SelectQuestionRange 
                        {submitButtonClass}
                        {selectedQuestionRange}
                        {selectRange}
                        {startQuiz}
                        {questions_limit}
                    />
            {/if}

        </div>
    </div>

</main>

<style>

</style>