//import fetch from 'cross-fetch';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from './actionTypes';

export function registerRequest(data) {
    return (dispatch) => {
        dispatch({
            type: REGISTER_REQUEST,
            payload: data
        });

        // TODO: replace to server request
        setTimeout(() => {
            dispatch(registerSuccess());
        }, 1000);
    };
}


function registerSuccess(data) {
    return {
        type: REGISTER_SUCCESS
    };
}

function registerError(data) {
    return {
        type: REGISTER_ERROR,
		  payload: data
    };
}
