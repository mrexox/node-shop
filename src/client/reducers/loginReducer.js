import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/actionTypes';

export default function(state = {}, action) {    
    switch(action.type) {
        case LOGIN_REQUEST:
            return {...state, status: 'request' };

        case LOGIN_SUCCESS:
            console.log("login success", action);
            return {...state, status: 'success', token: action.payload };

        case LOGIN_ERROR:
            console.log("login error", action);
            return {...state, status: 'error', message: action.payload};
            
		default:
			return state;
	}
}

