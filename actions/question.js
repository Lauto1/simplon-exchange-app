import * as types from '../constants/actionTypes';
import question from '../results.json'

export const fetchQuestion = () => {

// return async dispatch => {
  
//   const response = await fetch('../results.json');
//   const question = await response.json();
//   console.log('fetch',fetch);

  addQuestion(question)

  console.log("in action: question", question);
  return question 


};

export const addQuestion = (question) => ({type: types.ADD_QUESTION, question});