import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import state from '../reducers/initialState';

export default function configureStore(initialState=state) { // for testing FIXME remove
	return createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunk)) // composeWithDevTools - for chrome dev plugin 'Redux DevTools'
													// thunk - middleware for async queries
	);
}
