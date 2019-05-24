import types from '../constants/actionTypes';

let intialState = {
    nb_karma:'', 
    avatar:'', 
    fabrique:'',
    username:'',
    email:'',
    mot_de_passe:'',
    statistiques: {
        questions:[],
        answers:[]
    }
}
export const profilUserReducer = (state = initialState,action) => {
    switch(action.type){
        case types.GET_PROFILE_USERS:
    }
}