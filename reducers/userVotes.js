import types from '../constants/actionTypes';

let initialState = {
    userVotes: []
};

export const userVotes = (state = initialState, action) => {
  switch (action.type) {
      case types.USER_VOTES:
          return {
              userVotes: [...state.userVotes, action.votes],
          };
      default :
          return state;
  }
};
