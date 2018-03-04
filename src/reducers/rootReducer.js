import {combineReducers} from 'redux';
import posts from './postReducer';
import menu from './menuReducer';
import postFilter from './filterReducer';

const rootReducer = combineReducers({
	posts,
	postFilter,
	menu
});

export default rootReducer;
