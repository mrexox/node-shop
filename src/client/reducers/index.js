import { combineReducers } from 'redux';
import postsReducer from './postReducer';
import filterReducer from './filterReducer';
import loginReducer from './loginReducer';
//import sessionReducer from './sessionReducer';
import registerReducer from './registerReducer';

export default combineReducers({
	posts: postsReducer,
	postFilter: filterReducer,
	login: loginReducer,
	//session: sessionReducer,
	register: registerReducer
});
