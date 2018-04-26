import fetch from 'cross-fetch';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from './actionTypes';
import { URL } from '../Constants';

export function loginRequest(data) {
    return (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST,
            payload: data
        })

        fetch(`http://${URL}:8080/authenticate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: data.email,
                pass: data.password
            })
        })
        .then(res => {
            if (res.status >= 400) {
                dispatch(loginError("Bad response from server, try again later."));
            }
            else {
                res.json().then(json => {
                    if (!json.token) {
                        dispatch(loginError("Invalid email or password."));
                    }
                    else dispatch(loginSuccess(json.token));
                })
            }
        })
        .catch(error => dispatch(loginError("Wops...")))
    }
}

function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export function loginError(data) {
    return {
        type: LOGIN_ERROR,
        payload: data
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}