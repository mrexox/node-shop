import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from '../actions/actionTypes';

export default function(state = {}, action) {    
    switch(action.type) {
        case REGISTER_REQUEST:
            // TODO
        case REGISTER_SUCCESS:
            // TODO
        case REGISTER_ERROR:
            // TODO
		default:
			return state;
	}
}

