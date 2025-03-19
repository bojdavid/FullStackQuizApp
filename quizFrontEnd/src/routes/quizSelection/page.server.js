import { subjects } from '../data.js';

export function load({ params }) {
    console.log(subjects[0])
	
    return {
        subjects : subjects
    };
}

