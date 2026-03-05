import type { Question } from "$lib/types/quiz";

export interface QuizResult {
    quizId: string;
    score: number;
    totalQuestions: number;
    timeSpentSeconds: number;
    questions: Question[];
    timestamp: string;
}

export const saveQuizResult = async (result: QuizResult): Promise<{ success: boolean; id: string }> => {
    const res = await fetch('/api/quizResult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result)
    });

    if (!res.ok) throw new Error("Failed to save result");

    return await res.json();
};

export const getQuizResult = async (quizId: string = "latest"): Promise<QuizResult | null> => {
    const res = await fetch(`/api/quizResult/${quizId}`);

    if (!res.ok) return null;

    return await res.json();
};
