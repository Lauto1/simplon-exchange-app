import types from "../constants/actionTypes";
import * as mockQuestions from "../mock/questionsReponses.json";
import * as token from "../mock/tokenAlpha.json"
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
export const setCurrentQuestion = (question,index) => {
  return { type: types.SET_QUESTION,currentQuestion: question,index:index };
};
export const navigateQuestion = (index) => {
  return async dispatch => {
    try {
      fetch()
      const QUESTIONS =mockQuestions.questions;
      
      
      
      
      let currentQuestion = null
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
      console.log("current Token",token.token);
      //const response= await fetch (`http://dev.simplon-exchange.help/api/questions?token=${token.token}`);
      
      
      //let json= await response.json();

      //console.log("api",json.data);
      // let QuestionsFromApi = json.data.map(question => {
      //     question.user = {};
      //     question.user.name = "testoApi";
      //     question.user.points = 0;
      //     return question;
      // })
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
