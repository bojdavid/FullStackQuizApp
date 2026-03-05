import { json } from '@sveltejs/kit';
import { getUserStats } from '$lib/server/user';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    const stats = getUserStats();

    return json(stats);
};
