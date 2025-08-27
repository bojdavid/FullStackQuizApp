export interface Options{
    text: string;
    active: boolean;
}


  export type QuestionType = "mcq" | "true-false" | "flashcard";

  export interface Question {
    id: string;              // unique identifier
    question: string;        // question text
    options?: string[];      // options (used in multiple-choice & true-false)
    answer: string;          // correct answer (string)
    type: QuestionType;      // must be one of the allowed types

    //Neccessary for state management
    choice?: string //this is the answer the user chooses
    
  }