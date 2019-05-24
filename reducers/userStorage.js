import types from "../constants/actionTypes";

let initialState = {
    userStorage: {}
  };
  
  export const userStorage = (state = initialState, action) => {
    switch (action.type) {
      case types.SET_STORAGE:
        return {
            userStorage: action.storage
        };
      default:
        return state;
    }
  };