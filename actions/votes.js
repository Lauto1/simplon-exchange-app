import * as types from "../constants/actionTypes";

export const fetchUserVotes = () => {
  return async dispatch => {
    let data = [];

    // fetch API by Laravel whit user information
    const userJson = await fetch("https://");
    const userVotes = await userJson.json();
    // need to know witch positon on array json are is the "user votes"
    data.userVotes = userVotes[0];
    // up to date the state
    dispatch(updateVotes(data.userVotes));
  };
};

export const updateVotes = votes => {
  return { type: types.USER_VOTES, votes };
};
