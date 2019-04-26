import { combineReducers } from "redux";
import {questionReducer} from './question'
import { userVotes } from './userVotes';

export default combineReducers({questionReducer, userVotes});
