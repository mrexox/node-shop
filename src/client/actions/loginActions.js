import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './actionTypes';

export const loginRequest = (data) => {
    return {
        type: LOGIN_REQUEST,
        payload: data
    }
}

export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export const loginError = (data) => {
    return {
        type: LOGIN_ERROR,
        payload: data
    }
}