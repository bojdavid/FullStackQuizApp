<script lang="ts">
  let { noOfQuestion, questions } = $props();
  console.log(questions);

  let scoreCount: number = $state(0);

  for (let i = 0; i < questions.length; i++) {
    if (questions[i].choice == questions[i].CorrectOption) {
      scoreCount++;
    } else {
      continue;
    }
  }

  function giveFeedback(score: number, total: number) {
    const percentage = (score / total) * 100;

    if (percentage >= 90) {
      return "🔥 Amazing! You're a quiz master!";
    } else if (percentage >= 75) {
      return "🎉 Great job! You're doing really well!";
    } else if (percentage >= 50) {
      return "👍 Not bad! Keep practicing and you'll improve even more.";
    } else if (percentage >= 25) {
      return "💡 You're getting there! Don't give up!";
    } else {
      return "🌱 Every expert was once a beginner — keep trying, you've got this!";
    }
  }
</script>

{#snippet question(prompt: string, ans: string)}
  <div class="mb-2 lg:text-lg">
    <span class="font-bold">Question: </span>
    {prompt}
    <p>
      <span class="font-bold text-green-500">Answer: </span>
      <span> {ans} </span>
    </p>
  </div>
{/snippet}

<div class="text-5xl text-center">
  You got
  <span class="text-tertiary-500">
    {scoreCount}
  </span>
  Right Out of
  <span class="text-secondary-500">
    {noOfQuestion}
  </span>

  <div class="text-xl">
    {giveFeedback(scoreCount, noOfQuestion)}
  </div>
</div>
<div class="mt-10">
  <a
    href="/"
    class="text-tertiary-500 underline hover:text-tertiary-800 transition duration-300 ease-in-out"
    >Go back home</a
  >

  {#each questions as quest}
    {@render question(quest.Question, quest[`Option${quest.CorrectOption}`])}
  {/each}
</div>
