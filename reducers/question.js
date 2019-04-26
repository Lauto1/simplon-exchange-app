import types from "../constants/actionTypes";

let initialState = {
    questions: [],
    currentSearch: ""
};
/**reducer:  l'état de question change en réponse aux actions envoyées austore. */
export const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_QUESTIONS:
            return { ...state, questions: action.questions };
        case types.SEARCH_QUESTION:
            return { ...state, currentSearch: action.terms};

        default:
            return state;
    }
};
