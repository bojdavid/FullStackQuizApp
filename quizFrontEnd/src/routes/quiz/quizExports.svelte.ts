

interface QuizVariables{
  questionNum: number,
  viewCorrect: boolean,
  selectedAns: boolean,
  animateEndQuizbtn: boolean,
  hideItem: string
}

export const quizVariables: QuizVariables = $state({
    questionNum: 0,
    viewCorrect: false,
    selectedAns: true,
    animateEndQuizbtn: false,
    hideItem: "hidden"
})

export const goToPrevQuestion = (): void => {
  //Do not let the questions num go beyond the questions index as it decrements
  if (quizVariables.questionNum >= 0) {
    quizVariables.questionNum--;
  }
  quizVariables.viewCorrect = false;
  console.log("This is the place!!!!!!!-----",quizVariables.questionNum)

 // console.log("why are you not working")
};