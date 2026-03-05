import { json } from '@sveltejs/kit';
import { getRankings } from '$lib/server/ranking';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    const rankings = getRankings();

    return json(rankings);
};
