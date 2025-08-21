import { subjects } from '../../../routes/data.js';



export const getCategories =  () =>{
    //const response = await fetch('https://opentdb.com/api_category.php');

    //const data = await response.json();

    return {
        subjects : subjects
    };
}