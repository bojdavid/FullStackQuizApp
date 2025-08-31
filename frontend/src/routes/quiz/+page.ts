import type { PageLoad } from './$types';
import { quizGlobal } from '$lib/shared/shared.svelte';
import { quizSample } from '$lib/api/data';
import type { Quiz } from '$lib/types/quiz';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ params}) => {
    const quiz = quizSample.find(q => q.id === quizGlobal.id);

    if (!quiz) {
        console.log(`Quiz with id of ${quizGlobal.id} does not exist`)
        throw redirect(302, '/dashboard');
      }
    

  return { quiz };
}