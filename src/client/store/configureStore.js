import { createStore } from 'redux';

import rootReducer from '../reducers/rootReducer';
import state from '../reducers/initialState';

export default function configureStore(defstate=state) { // for testing FIXME remove
	return createStore(
		rootReducer,
		defstate
		/* I have no idea of what it is!
		 * window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		 * applyMiddleware(thunk)
		*/
	);
}
