//import { persistStore } from 'redux-persist';
import { GET_SESSION_SUCCESS, GET_SESSION_ERROR } from './actionTypes';
import { URL } from '../Constants';

export function initSession() {
    return (dispatch) => {
        // TODO: init session
    }
}


function sessionSuccess() {
    return {
        type: GET_SESSION_SUCCESS
    }
}

export function sessionError() {
    return {
        type: GET_SESSION_ERROR
    }
}