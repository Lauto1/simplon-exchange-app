import types from "../constants/actionTypes";
import {AsyncStorage} from 'react-native';

export const setStorage = () => {
    return async dispatch => {
        const storage = await AsyncStorage.getItem('user_informations', (err, result) => {
            return JSON.parse(result);
        });
        dispatch({ type: types.SET_STORAGE, storage }) 
    }
};
