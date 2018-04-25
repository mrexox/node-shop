import fetch from 'cross-fetch';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/actionTypes';
import { URL } from '../Constants';
import { loginSuccess, loginError } from '../actions/loginActions';

export default function(state = {}, action) {    
    switch(action.type) {
        case LOGIN_REQUEST:
            return {...state, inProcess: true };

        case LOGIN_SUCCESS:
            return {...state, inProcess: false, token: action.payload.token };

        case LOGIN_ERROR:
            // TODO: save error info
            return {...state, inProcess: false};
            
		default:
			return state;
	}
}

