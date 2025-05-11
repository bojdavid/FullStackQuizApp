let quizMeta: any = $state("f");

interface Category {topic:string, no_of_questions:number}

interface QuizMeta {
    subject: string,
    category: any,
    noOfQuestions: number
}

export const setQuizMeta = (metaData:QuizMeta) =>{
    quizMeta = metaData
}

export const getQuizMeta  = () =>{
    //console.log("This is the getQuiz metadata functnois---- ", $state.snapshot(quizMeta))
    return quizMeta;
}
