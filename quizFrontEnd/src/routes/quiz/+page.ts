//import type { PageLoad } from './$types';
import { getQuizMeta } from "$lib/components/globalState.svelte";
import allQuestions  from './quiz_questions.json'

/*

export const load = ({ params }) => {
	let quizData = getQuizMeta();
	
	console.log(quizData.subject)
	
	const questionsData = () =>{
		let filteredQuestions = "asdfghj"//allQuestions.filter(question => (question.Subject == quizData.subject) )
		//console.log("This is the quiz data: ----", quizData);
		//console.log("Filtered Questions ------------------", $state.snapshot(filteredQuestions));
		//console.log("Category data: -------", $state.snapshot(quizData.category)) 
	
		return filteredQuestions;
	}

//	return {questionsData};
};

*/