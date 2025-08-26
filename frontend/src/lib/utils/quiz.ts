export const submitQuiz = () => {
    console.log("Submitted");
  };
 

export const goToNextQuestion = (num : number) => {
    num++;
  };

export const goToPrevQuestion = (num: number) => {
    num--
  };

export const viewQuestions = () => {
  console.log("view questions")
}

export const quit = () => {
  console.log("quit quiz")
}
