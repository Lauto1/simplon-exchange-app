import * as types from "../constants/actionTypes";
import moment from "moment";

export const fetchDataApi = (checkedData) => {
    return async dispatch => {
        // dispatch(toggleLoader(true));
        // const response = await fetch('https://api/answers');
        // const quote = await response.json();

    let data = {NbPosts:150, NbResponses:600, NbUsers:224}
        
     dispatch(addNbPosts(data.NbPosts));
     dispatch(addNbResponses(data.NbResponses));
     dispatch(addNbUsers(data.NbUsers));      
        // dispatch(toggleLoader(false));
    }
  };
  export const setDatePickedStart = (DatePickedStart)=>(
    console.log('date de debut'),
    DatePickedStart =  moment(DatePickedStart).format('DD/MM/YYYY'),
    console.log(DatePickedStart),    
    {type: types.ADD_START_DATE_FILTER, DatePickedStart}
    );

  export const setDatePickedEnd = (DatePickedEnd)=>(
        console.log('date de fin:'),
        DatePickedEnd =  moment(DatePickedEnd).format('DD/MM/YYYY'),
        console.log(DatePickedEnd),
        {type: types.ADD_END_DATE_FILTER, DatePickedEnd});  

  export const addNbPosts = (NbPosts) => ({type: types.ADD_NB_POSTS, NbPosts});
  export const addNbResponses = (NbResponses) => ({type: types.ADD_NB_RESPONSES, NbResponses});
  export const addNbUsers = (NbUsers) => ({type: types.ADD_NB_USERS, NbUsers});
  
