import type { PageLoad } from './$types';
import { quizGlobal } from '$lib/shared/shared.svelte';
import type { Quiz } from '$lib/types/quiz';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch(`/api/quizzes/${quizGlobal.id}`);

  if (!res.ok) {
    console.log(`Quiz with id of ${quizGlobal.id} does not exist`)
    throw redirect(302, '/dashboard');
  }

  const quiz = await res.json();

  return { quiz };
}