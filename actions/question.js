import types from "../constants/actionTypes";
import * as mockQuestions from "../mock/questionsReponses.json";

/**Action: function pour ajouter des questions, rechercher des questions */
export const addQuestions = questions => {
  return { type: types.ADD_QUESTIONS, questions: questions };
};
export const searchQuestions = terms => {
  return { type: types.SEARCH_QUESTION, terms: terms };
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
