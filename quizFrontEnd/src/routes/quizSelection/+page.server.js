import { subjects } from '../data.js';
import { redirect } from '@sveltejs/kit';

export function load({ params }) {

    return {
        subjects : subjects
    };
}

export const actions = {
	startQuiz_: async ({ cookies, request }) => {
		const data = await request.formData();
        console.log(data);
	},
}