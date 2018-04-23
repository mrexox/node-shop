import fetch from 'cross-fetch';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/actionTypes';
import { URL } from '../Constants';
import { loginSuccess, loginError } from '../actions/loginActions';

export default function(state = {}, action) {    
    switch(action.type) {
        case LOGIN_REQUEST:
            // TODO

        case LOGIN_SUCCESS:
            // TODO

        case LOGIN_ERROR:
            // TODO
            
		default:
			return state;
	}
}

