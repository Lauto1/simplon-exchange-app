import * as types from '../constants/actionTypes';

let initialState = {
    questionList: []
};

export const question = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_QUESTION:
            return {
                ... state,
                questionList: [
                    ...state.questionList,
                    action.question
                ]
            };
        default:
            return state;
    }
};