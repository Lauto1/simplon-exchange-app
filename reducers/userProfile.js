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

const userProfile = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_INFO':
            return { id: action.id, name : action.name, email : action.email, password: action.password,is_admin : action.is_admin, remember_token : action.remember_token, fabric_id : action.fabric_id };
        case 'UPDATE_USER':
            return { ...state, id: action.id, name : action.name, email : action.email, password: action.password,is_admin : action.is_admin, remember_token : action.remember_token, fabric_id : action.fabric_id };
        default:
            return state;
  }
}

export default userProfile;


