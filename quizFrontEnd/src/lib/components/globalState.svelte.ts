let quizMeta: any = $state();

interface Category {topic:string, no_of_questions:number}

interface QuizMeta {
    subject: string,
    category: any,
    noOfQuestions: number
}

export const setQuizMeta = (metaData:QuizMeta) =>{
    quizMeta = metaData

    console.log(metaData.category)
}

export const getQuizMeta  = () =>{
    return quizMeta;
}