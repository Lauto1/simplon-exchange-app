import { combineReducers } from "redux";
import { questionReducer } from "./question";
import { storeStatistiques } from "./storeStatistiques";
import { userVotes } from "./userVotes";

export default combineReducers({
  questionReducer,
  userVotes,
  storeStatistiques
});
