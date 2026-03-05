import { json } from '@sveltejs/kit';
import { summaryCardData } from '$lib/server/summaryData';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    return json(summaryCardData);
};
