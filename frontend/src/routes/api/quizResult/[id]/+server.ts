import { json } from '@sveltejs/kit';
import { getResult } from '$lib/server/quizResultStorage';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const id = params.id || "latest";
    const result = getResult(id);

    if (!result) {
        return json(null); // The original code returns null instead of 404
    }

    return json(result);
};
