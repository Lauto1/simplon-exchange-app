import types from "../constants/actionTypes";

let initialState = {
    questions: [],
    currentSearch: ""
};

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
