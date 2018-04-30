import { GET_SESSION_SUCCESS, GET_SESSION_ERROR } from '../actions/actionTypes';

export default function(state = {}, action) {    
    switch(action.type) {
        case GET_SESSION_SUCCESS:
            return {...state, checked: true, auth: false };

        case GET_SESSION_ERROR:
            return {...state, checked: true, auth: true };

		default:
			return state;
	}
}

