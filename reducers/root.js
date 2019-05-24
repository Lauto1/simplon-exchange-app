import { combineReducers } from "redux";
import { questionReducer } from "./question";
import { storeStatistiques } from "./storeStatistiques";
import { userVotes } from "./userVotes";
import { userStorage } from "./userStorage";
import { profileUserReducer } from './profileUserReducer';
export default combineReducers({
  questionReducer,
  profileUserReducer,
  userVotes,
  storeStatistiques,
  userStorage
});

