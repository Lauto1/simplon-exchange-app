import types from "../constants/actionTypes";
import * as mockQuestions from "../mock/questionsReponses.json";

/**Action: function pour ajouter des questions, rechercher des questions */
export const addQuestions = questions => {
  return { type: types.ADD_QUESTIONS, questions: questions };
};
export const searchQuestions = terms => {
  return { type: types.SEARCH_QUESTION, terms: terms };
};
export const getQuestion = index => {
  return { type: types.GET_QUESTION, index: index };
};
export const navigateQuestion = (index,state) => {
  return async dispatch => {
    let count = 1;
    
    try {
      if (state =="forward") {
         index = index +count
         console.log("forward");
         
      } else {
        index  =index -count
        console.log("backward");

      }
      const QUESTIONS =mockQuestions.questions;
      let currentQuestion;
      QUESTIONS.forEach((question,i)=>{
        if (i ==index) {
           currentQuestion = question
           console.log("new mock question",currentQuestion);
           
        }
      })
      dispatch(getQuestion(index))
      return new Promise((resolve, reject) => {
        currentQuestion ? resolve(currentQuestion) : reject("Error");
      });
    } catch (error) {
      
    }
  }
};

/**Action: function pour rechercher des questions & les dispatchés */
export const fetchQuestions = () => {
  return async dispatch => {
    try {
      //console.log(mockQuestions);
      
      const QUESTIONS =mockQuestions.questions;
      dispatch(addQuestions(QUESTIONS));
      return new Promise((resolve, reject) => {
        QUESTIONS ? resolve(QUESTIONS) : reject("Error");
      });
    } catch (e) {
      console.log(e);

      /** dispatch(err("failed to retrieve data"));*/
    }
  };
};
