import types from '../constants/actionTypes';

/*
**Store utilisé par le chart graph, et par le filter des statistiques. 
*/


let initialState = {
    NbPosts: 1000,
    NbUtilisateurs:2000,
    NbResponses:1500
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
            return {
                ...state,
                NbUsers: action.NbUsers
            };
        default:
            return state;
    }
};
