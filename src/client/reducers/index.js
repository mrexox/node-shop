import { combineReducers } from 'redux';
import posts from './postReducer';
import postFilter from './filterReducer';
import login from './loginReducer';
import register from './registerReducer';

export default combineReducers({
	posts,
	postFilter,
	login,
	register
});
