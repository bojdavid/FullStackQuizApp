import { questions } from '../data.js';
import data from './quiz_questions.json';


export function load({ params }) {
	return {
        questions: questions,
        fullQuestions: data
    };
}
