import { questions } from '../data.js';

export function load({ params }) {
	return {
        questions: questions
    };
}