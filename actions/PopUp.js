import * as types from "../constants/actionTypes";



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

  export const addNbPosts = (NbPosts) => ({type: types.ADD_NB_POSTS, NbPosts});
  export const addNbResponses = (NbResponses) => ({type: types.ADD_NB_RESPONSES, NbResponses});
  export const addNbUsers = (NbUsers) => ({type: types.ADD_NB_USERS, NbUsers});

