import * as Types from '../constants/actionTypes';

export const updateUserData = (id, username, email, password, new_password = null) => {
    const token = null;
    if (new_password != null) {
        let params = {
            method : 'POST',
            body : {
                id: id , 
                password: password, 
                new_password: new_password, 
                name: name,
                email: email
            }
        }
    } else {
        let params = {
            method : 'POST',
            body : {
                id: id , 
                password: password, 
                new_password: password, 
                name: name,
                email: email
            }
        }
    }

    return async dispatch => {
        const response = await fetch(
          "http://dev.simplon-exchange.help/api/users/edit?token="+token, params
        ).then((data) => {
            console.log('response', data);

            let action = {
                type : Types.UPDATE_USER, 
                name : username,
                email : email,
                password : password
            };
            return action;
        });
      };
};


export const getUserProfile = (id) => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI2LCJpc3MiOiJodHRwOi8vZGV2LnNpbXBsb24tZXhjaGFuZ2UuaGVscC9hcGkvbG9naW4iLCJpYXQiOjE1NTg2OTk0NDYsImV4cCI6MTU1ODcwMzA0NiwibmJmIjoxNTU4Njk5NDQ2LCJqdGkiOiJnQkdkaFlKbnBWV3BrelM0In0.mevhiA666HfVWDa4ydd3m_2J6T9ZFtT6F63Dm99SfoY";

    return async dispatch => {
        dispatch(getUserInfomations(id, token));
        dispatch(getUserQuestions(id, token));
        dispatch(getUserAnswers(id, token));
        dispatch(getUserValidateAnswers(id, token));
      }
};

const getUserInfomations = (id, token) => {
    return async () => {
        await fetch(
            "http://dev.simplon-exchange.help/api/users/" + id + "?token=" + token,
            {
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ).then((response)=>response.json()).then((response) => {
            

            let action = {
                type: Types.GET_USER_INFO,
                name: response.data.name,
                email: response.data.email,
                password: response.data.password,
                is_admin: response.data.is_admin,
                remember_token: response.data.remember_token,
                fabric_id: response.data.fabric_id
            };
            console.log('action getuserinfo', response.data);
            return action;
        });
    }
    
}

const getUserQuestions = (id, token) =>{
    return async () => {
        await fetch(
            "http://dev.simplon-exchange.help/api/questions/count/" + id + "?token=" + token, 
            {
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ).then((response) => response.json()).then((response) => {
            console.log('response', response);
            let action = {
                type: Types.GET_USER_QUESTIONS,
                questions: response.count
            };
            return action;
        });
    }
 
}

const getUserAnswers = (id, token) => {
    return async () => {
        await fetch(
            "http://dev.simplon-exchange.help/api/answers/count/" + id + "?token=" + token,
            {
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ).then((response) => response.json()).then((response) => {
            console.log('response', response);
            let action = {
                type: Types.GET_USER_ANSWERS,
                answers: response.count
            };
            return action;
        });
    }


   
    
}

const getUserValidateAnswers = (id, token) => {
    return async () => {
        await fetch(
            "http://dev.simplon-exchange.help/api/answers/count/selected/" + id + "?token=" + token,
            {
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ).then((response) => response.json()).then((response) => {
            console.log('response', response);
            let action = {
                type: Types.GET_USER_VALID_ANSWERS,
                valid_answers : response.count
            };
            return action;
        });
    }
    
}