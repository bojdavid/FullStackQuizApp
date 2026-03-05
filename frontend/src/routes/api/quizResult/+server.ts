import { json } from '@sveltejs/kit';
import { saveResult } from '$lib/server/quizResultStorage';

import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const result = await request.json();

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        const id = saveResult(result);

        return json({ success: true, id });
    } catch (e) {
        return new Response('Invalid request body', { status: 400 });
    }
};
