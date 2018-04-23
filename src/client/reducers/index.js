import {combineReducers} from 'redux';
import posts from './postReducer';
import postFilter from './filterReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

export default combineReducers({
	posts,
	postFilter,
	loginReducer,
	registerReducer
});
