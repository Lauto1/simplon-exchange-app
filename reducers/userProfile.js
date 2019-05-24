import types from "../constants/actionTypes";

const initialState = {
        id : null,
        name: "",
        email: "",
        password: "",
        is_admin: 0,
        remember_token: null,
        fabric_id: null,
        questions : 0,
        answers : 0,
        valid_answers: 0
}

export const userProfile = (state = initialState, action) => {
    console.log('REDUCERRRRRR')
    switch (action.type) {
        case 'GET_USER_INFO':
        console.log('received action', action);
            return { ...state, id: action.id, name : action.name, email : action.email, password: action.password,is_admin : action.is_admin, remember_token : action.remember_token, fabric_id : action.fabric_id };
        case types.GET_USER_QUESTIONS:
            console.log('received action', action);
            return {...state, questions : action.questions};
        case types.GET_USER_ANSWERS: 
            console.log('received action', action);
            return {...stable, answers: action.answers};
        case types.GET_USER_VALID_ANSWERS:
            console.log('received action', action);
            return {...state, valid_answers : action.valid_answers}
        case types.UPDATE_USER:
            console.log('received action', action);
            return { ...state, id: action.id, name : action.name, email : action.email, password: action.password,is_admin : action.is_admin, remember_token : action.remember_token, fabric_id : action.fabric_id };
        default:
            return state;
  }
}




