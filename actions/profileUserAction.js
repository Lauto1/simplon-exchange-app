import types from "../constants/actionTypes";

export const getProfileUser = () => {
    const base = 'http://dev.simplon-exchange.help/api',
        req = base+'/users/{id}';
    console.log(req);
    return {type:types.GET_PROFILE_USERS,action:action}
}