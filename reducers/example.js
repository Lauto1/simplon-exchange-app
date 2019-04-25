import types from "../constants/actionTypes";

let initialState = {
  example: ""
};

export const example = (state = initialState, action) => {
  switch (action.type) {
    case types.THIS_IS_AN_EXAMPLE:
      return { ...state, example: action.content };

    default:
      return state;
  }
};
