import {combineReducers} from 'redux';
import posts from './postReducer';
import postFilter from './filterReducer';

export default combineReducers({
	posts,
	postFilter
});;

