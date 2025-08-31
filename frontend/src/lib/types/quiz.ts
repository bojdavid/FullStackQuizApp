export interface Options{
    text: string;
    active: boolean;
}

/*
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

  export interface LastAttempt {
    id : string; //quiz id
    quizTitle: string
    accuracy : number; // in percent
    date : string;
    time : string // amount of time spent on the quiz
  }

  export interface Quiz {
    id: string
    title : string
    questions : Question[];

  }
    */




  // ---------------------------- Generated Interface -------------------------------
  // ==============================
// Core Quiz Types
// ==============================
export interface Quiz {
  id: string;
  title: string;
  description?: string;
  category?: string;

  // Timers
  timeLimit?: number;          // total time for the quiz (seconds)
  perQuestionTimeLimit?: number; // optional per-question timer (seconds)

  // Content
  questions: Question[];

  // State (for a running/last attempt)
  state?: QuizState;

  // Optional history of attempts
  attempts?: Attempt[];
}

// ==============================
// Discriminated Question Union
// ==============================
export type QuestionType = "mcq" | "true-false" | "flashcard";

interface QuestionBase {
  id: string;
  prompt: string;         // (renamed from "question" for clarity)
  type: QuestionType;
  points?: number;        // weighting per question (default = 1)
  explanation?: string;   // optional rationale shown after answering
  // State (user choice)
  choice?: string | boolean; // selected answer (type-specific)
}

// Multiple Choice
export interface MultipleChoiceQuestion extends QuestionBase {
  type: "mcq";
  options: string[];      // required for MCQ
  answer: string;         // must match one of options
}

// True / False (dedicated type)
export interface TrueFalseQuestion extends QuestionBase {
  type: "true-false";
  answer: boolean;        // true or false
  // choice?: boolean (from base)
}

// Flashcard (Q/A)
export interface FlashcardQuestion extends QuestionBase {
  type: "flashcard";
  answer: string;         // free-form answer text
  // options?: never
}

// Union of all question kinds
export type Question =
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | FlashcardQuestion;

// ==============================
// Runtime State & Attempts
// ==============================
export interface QuizState {
  currentQuestionIndex: number; // 0-based
  startedAt: Date;
  // Timer
  elapsedSeconds: number;       // total elapsed time
  remainingSeconds?: number;    // if using a countdown timer

  // Progress
  score?: number;               // computed so far
  answeredCount?: number;       // number of questions with a choice
  isCompleted?: boolean;

  // Optional per-question timing
  perQuestionElapsed?: Record<string, number>; // questionId -> seconds
}

export interface Attempt {
  attemptId: string;
  userId?: string;
  startedAt: Date;
  completedAt?: Date;
  totalScore?: number;
  // Snapshot of answers at submission time
  answers: AnswerRecord[];
}

export interface AnswerRecord {
  questionId: string;
  choice: string | boolean; // consistent with Question.choice
  correct: boolean;
  earnedPoints: number;     // respects weighting (points)
  timeSpentSeconds?: number;
}

// to be replaced by attempt
export interface LastAttempt {
  id : string; //quiz id
  quizTitle: string
  accuracy : number; // in percent
  date : string;
  time : string // amount of time spent on the quiz
}