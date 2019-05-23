import { combineReducers } from "redux";
import { questionReducer } from "./question";
import { storeStatistiques } from "./storeStatistiques";
import { userVotes } from "./userVotes";
import userProfile from './userProfile';

export default combineReducers({
  questionReducer,
  userVotes,
  userProfile,
  storeStatistiques
});

