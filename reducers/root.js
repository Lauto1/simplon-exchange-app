import { combineReducers } from "redux";
import {example} from "./example";
import {questionReducer} from './question'


export default combineReducers({questionReducer,example});
