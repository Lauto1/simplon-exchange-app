import { combineReducers } from "redux";
import {questionReducer} from './question'
import { userVotes } from './userVotes';
import {storeStatistiques} from './storeStatistiques';

export default combineReducers({questionReducer, userVotes,storeStatistiques});

