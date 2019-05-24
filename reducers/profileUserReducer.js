import types from '../constants/actionTypes';

let initialState = {
    avatar:null, 
    email:null,
    fabrique:null,
    mot_de_passe:null,
    nb_karma:null,
    statistiques: {
        questions:[],
        answers:[]
    },
    username:null
    
}
export const profileUserReducer = (state= initialState) => {
    return state;
}