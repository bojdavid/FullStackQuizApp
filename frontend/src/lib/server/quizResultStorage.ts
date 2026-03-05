import type { QuizResult } from "$lib/api/quizResult";

// Simulated in-memory storage for the backend
let resultsStorage: Record<string, QuizResult> = {};

export const saveResult = (result: QuizResult): string => {
    const id = result.quizId || "latest";
    resultsStorage[id] = result;
    console.log("Result saved to backend simulation:", result);
    return id;
};

export const getResult = (id: string): QuizResult | null => {
    return resultsStorage[id] || null;
};
