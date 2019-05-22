import types from "../constants/actionTypes";

let initialState = {
  questions: [],
  currentSearch: "",
  currentQuestion:null
};
/**reducer:  l'état de question change en réponse aux actions envoyées austore. */
export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_QUESTIONS:
      return { ...state, questions: action.questions };
    case types.SEARCH_QUESTION:
      console.log("search term", action.terms);

      return { ...state, currentSearch: action.terms };
    case types.GET_QUESTION:
      console.log("currentQuestion", action.index);
      let currentQuestion;
      state.questions.forEach((question,i)=>{
        if (i ==action.index) {
           currentQuestion = question
           console.log(currentQuestion);
           
        }
      })
      return { ...state, currentQuestion: currentQuestion };
    default:
      return state;
  }
};
