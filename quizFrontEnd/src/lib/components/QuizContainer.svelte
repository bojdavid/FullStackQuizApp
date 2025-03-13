<script>

    let {question, active, viewCorrect} = $props();
    
    
    let options = $derived([
      {option:"A", text:question.OptionA, active:false},
      {option:"B", text:question.OptionB, active:false},
      {option:"C", text:question.OptionC, active:false},
      {option:"D", text:question.OptionD, active:false},

      ]);

  const setActiveOption = (option) =>{
        viewCorrect = true
       console.log(active)
        option.active = true;
        active = option.option;

  }

  </script>
  
      <div class="dark:bg-surface-900 p-5 w-full">
          <!-- Question Container-->
          <section class="text-xl md:text-2xl bg-surface-800 py-7 px-2">
              {question.Question}
              
          </section>
          <!-- OPTIONS CONTAINER  -->
          <section class="text-md md:text-lg px-2 flex flex-col items-start">
              {#each options as option}
                  <button class="min-w-9/10 mt-3 text-left
                                  dark:hover:bg-primary-800 
                                  transition ease-in-out duration-300
                                  rounded-lg
                                  border-2 border-surface-500
                                  "
                          class:active={option.option === active}
                          onclick={() => setActiveOption(option)}>
                       <span class="mr-3 dark:bg-primary-700 w-15 inline-block py-3 text-center font-bold">
                          {option.option}
                      </span>
                      {option.text}
                  </button>
              {/each}
          </section>
  
          
      </div>
  
  
  
  <style>
  .active{
      background-color: red;
  }
  </style>