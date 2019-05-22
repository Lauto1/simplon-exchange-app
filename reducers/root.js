import { combineReducers } from "redux";
import { questionReducer } from "./question";
import { loader } from "./loader";
import { storeStatistiques } from "./storeStatistiques";
import { userVotes } from "./userVotes";

export default combineReducers({
  loader,
  questionReducer,
  userVotes,
  storeStatistiques
});
