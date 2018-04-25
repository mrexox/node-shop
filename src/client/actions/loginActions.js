import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR } from './actionTypes';

export function loginRequest(data) {
    return (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST,
            payload: data
        })

        // TODO: replace to server request
        setTimeout(() => {
            dispatch(loginSuccess({token: '12345'}))
        }, 1000)
    }
}

function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

function loginError(data) {
    return {
        type: LOGIN_ERROR,
        payload: data
    }
}