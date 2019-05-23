import types from "../constants/actionTypes";

/*
 **Store utilisé par le chart graph, et par le filter des statistiques.
 */

let initialState = {
    NbPosts: 1000,
    NbUtilisateurs:2000,
    NbResponses:1500,
    StartDateFilter:'',
    EndDateFilter: ''

};

export const storeStatistiques = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_NB_POSTS:
            return {
                ...state,
                NbPosts: action.NbPosts
            };       
    
        case types.ADD_NB_RESPONSES:
            return {
                ...state,
                NbResponses: action.NbResponses
            };
        
        
        case types.ADD_NB_USERS:
            console.log(action.NbUsers)
            return {
                ...state,
                NbUsers: action.NbUsers
            };
        case types.ADD_END_DATE_FILTER:
            console.log('tarik test')
            console.log(action.DatePickedEnd)
            return {                
                ...state,
                EndDateFilter: 23
            };
        case types.ADD_START_DATE_FILTER:
        console.log(action.DatePickedStart)
            
            return {                
                ...state,
                StartDateFilter: 24
            };
        default:
            return state;
    }
};
