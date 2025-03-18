<script lang="ts">
import "../../styles/app.css";
    //sample data
    interface subject {
        subject : string;
        category : string[];

    }
    

    let subjects : subject[] = [ 
                                    {subject:"Subj1", category:["cata1", "cata2", "cata3", "cata4", "cata5"]},
                                    {subject:"Subj2", category:["catb1", "catb2", "catb3", "catb4", "catb5"]},
                                    {subject:"Subj2", category:["catc1", "catc2", "catc3", "catc4", "catc5"]},
                                    {subject:"Subj2", category:["catd1", "catd2", "catd3", "catd4", "catd5"]},
                                    {subject:"Subj2", category:["catd1", "catd2", "catd3", "catd4", "catd5"]},
                                    {subject:"Subj2", category:["catd1", "catd2", "catd3", "catd4", "catd5"]},
                                    {subject:"Subj2", category:["catd1", "catd2", "catd3", "catd4", "catd5"]},
                                    {subject:"Subj2", category:["catd1", "catd2", "catd3", "catd4", "catd5"]},
                                    {subject:"Subj2", category:["catd1", "catd2", "catd3", "catd4", "catd5"]},
                                    {subject:"Subj2", category:["catd1", "catd2", "catd3", "catd4", "catd5"]},
                                    {subject:"Subj2", category:["catd1", "catd2", "catd3", "catd4", "catd5"]},
                                    {subject:"Subj2", category:["catd1", "catd2", "catd3", "catd4", "catd5"]},
                                    {subject:"Subj2", category:["catd1", "catd2", "catd3", "catd4", "catd5"]},


                                ];
    
    let selectedSubjects : string[] = [];
    let startQuiz :boolean = $state(false);
    let category : string[] = ["all"];
    let no_of_questions : number = $state(0);
    let questions_range : number[] =[...Array(10).keys()].map(x => (x * 5) + 10);     // 10, 15, 20, 25, 30, 40, 50, 60

  
</script>


<main class="min-h-screen">

    <header class="text-center pt-20">
        <h2 class="text-4xl">
            Select Subjects
        </h2>
        <p class="text-xs"> You can select more than one subject</p>
    </header>
    
    <div class="mx-auto  flex flex-col items-center justify-center my-20 ">
        <div class="min-w-xs w-full max-w-6xl mx-2 rounded-md shadow-md shadow-primary-700 p-4">
            
            <div class="flex justify-start " >
                <button type="button" class="btn preset-outlined-secondary-500 rounded-lg text-md p-4">
                    Select All
                </button>
            </div>

            <div class="grid grid-cols-2 gap-5 text-md my-5">
                {#each subjects as subject}
                    <button type="button" class="btn preset-outlined-primary-500 rounded-lg text-xl p-4"
                        >
                        {subject.subject}
                    </button>
                {/each}            
            </div>

            <div class="flex justify-end " >
                <button type="button" class="btn preset-outlined-secondary-500 rounded-lg text-md p-4">
                    Select Subject
                </button>
            </div>

        </div>
    </div>

</main>

<style>

</style>