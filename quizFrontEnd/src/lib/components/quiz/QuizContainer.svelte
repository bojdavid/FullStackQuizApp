<script lang="ts">
import { fly , fade} from 'svelte/transition';

    let {question, 
        viewCorrect, 
        goToNextQuestion, 
        selectedAns, 
        goToPrevQuestion, 
        questionNum, 
        viewCorrectAns} = $props();
    
    interface QuizOption {
            option: string;
            text: string;
            active: boolean;
        }

    let active: string = $state("");
   let options : QuizOption[] = $state([]);

    // Update options when question or active changes
    $effect(() => {
        options  = [
            {option:"A", text:question.OptionA, active: false},
            {option:"B", text:question.OptionB, active: false},
            {option:"C", text:question.OptionC, active: false},
            {option:"D", text:question.OptionD, active: false},
        ];


        active = "";
        
    });
    
    const setActiveOption = (option) =>{
        selectedAns = false
        option.active = true;
        active = option.option;
        question.answered=true;
        question.choice = option.option;

        
  }

  </script>
  
      <div class="dark:bg-surface-900 p-5 w-full ">
        <div class="flex w-full relative h-[450px] overflow-hidden">
            {#key questionNum}
                <div class="absolute w-full z-10" in:fly={{ x: 500, duration:500,    }} 
                               out:fly={{ x: -500, duration:500,  }} >
                    <!-- Question Container-->
                    <section class="text-xl md:text-2xl bg-surface-800 py-7 px-2">
                        {question.Question}
                        
                    </section>
                    <!-- OPTIONS CONTAINER  -->
                    <section class="text-md md:text-lg px-2 flex flex-col items-start">
                        {#each options as option}
                            {#if !(viewCorrect || question.view_correct_ans)}
                                <button class="min-w-9/10 mt-3 text-left
                                                dark:hover:bg-primary-800 
                                                transition ease-in-out duration-300
                                                rounded-lg
                                                border-2 border-surface-500
                                                "
                                        class:active={option.option === active || option.option == question.choice}
                                        onclick={() => setActiveOption(option)}>
                                    <span class="mr-3 dark:bg-primary-700 w-15 inline-block py-3 text-center font-bold">
                                        {option.option}
                                    </span>
                                    {option.text}
                                </button>
                            {:else}
                                <!-- Added this extra if so when the option changes the transition will take effect-->
                                {#if option}
                                        <button class="min-w-9/10 mt-3 text-left
                                                        {option.option == question.CorrectOption? "bg-success-400 dark:bg-success-700":"bg-error-400 dark:bg-error-700"}
                                                        transition ease-in-out duration-300
                                                        rounded-lg
                                                        border-2 border-surface-500
                                                        "
                                                transition:fade
                                                >
                                            <span class="mr-3 dark:bg-primary-500 w-15 inline-block py-3 text-center font-bold">
                                                {option.option}
                                            </span>
                                            {option.text}
                                        </button>
                                {/if}
                            {/if}
                        {/each}
                    </section>
                </div>
            {/key}
        </div>
          <div class="w-full flex justify-between mt-10" >
                {#if questionNum > 0}
                    <button type="button" class="btn preset-filled-secondary-500" onclick={goToPrevQuestion} transition:fade>
                        Prev
                    </button>
                {:else}
                    <div></div>
                {/if}
                <button type="button" class="btn preset-filled-secondary-500" onclick={goToNextQuestion}>
                    {#if active == ""}
                        Skip
                    {:else}
                        Next
                    {/if}
                </button>
            </div>


        <section class="mb-10">
            <div class="w-full flex justify-start mt-10" >
                <button type="button" class="btn preset-filled-secondary-500" onclick={() => viewCorrectAns(question)}>
                    {#if !(viewCorrect || question.view_correct_ans)}
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
  
          
      </div>
  
  
  
  <style>
  .active{
      background-color: red;
  }
  </style>