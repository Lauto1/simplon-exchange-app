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
            let name = null;
            let email = null;
            let password = null;
            let is_admin = null;
            let remember_token = null;
            let fabric_id = null;
            let questions = null;
            let answers = null;
            let valid_answers = null;

    return async dispatch => {
        await fetch(
          "http://dev.simplon-exchange.help/api/users/"+id+"?token="+token, params
        ).then((response) => {
            console.log('response', response);
            
             name = name;
             email = email;
             password = password;
             is_admin = is_admin;
             remember_token = remember_token;
             fabric_id = fabric_id;
        });

        await fetch(
            "http://dev.simplon-exchange.help/api/users/"+id+"?token="+token, params
          ).then((response) => {
              console.log('response', response);
              
              questions = response.data.questions;
              answers = response.data.answers;
              valid_answers = response.data.valid_answers;
          });

        let action = {
            type : Types.GET_USER_INFO, 
            name: name,
            email: email,
            password: password,
            is_admin: is_admin,
            remember_token: remember_token,
            fabric_id: fabric_id,
            questions : questions,
            answers : answers,
            valid_answers: valid_answers
        };
        return action;
      };
};