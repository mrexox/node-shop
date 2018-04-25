import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from '../actions/actionTypes';

export default function(state = {}, action) {    
    switch(action.type) {
        case REGISTER_REQUEST:
            return {...state, inProcess: true };

        case REGISTER_SUCCESS:
            return {...state, inProcess: false };

        case REGISTER_ERROR:
            // TODO: save error info
            return {...state, inProcess: false };

		default:
			return state;
	}
}

