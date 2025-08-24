
export interface QuizQuestion {
    ID: number;
    Question: string;
    CorrectOption: string;
    OptionA: string;
    OptionB: string;
    OptionC: string;
    OptionD: string;
    AnswerExplanation?: string; // Changed key to match valid TypeScript syntax
    Category: string;
    answered?: boolean;
    view_correct_ans?: boolean;
    choice?: string;
    id?: number;
  }