import { json } from '@sveltejs/kit';
import { quizSample } from '$lib/server/db';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
    const quiz = quizSample.find((q) => q.id === params.id);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (!quiz) {
        return new Response('Quiz not found', { status: 404 });
    }

    return json(quiz);
};
