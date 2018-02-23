import {combineReducers} from 'redux';
import posts from './postReducer';
import menu from './menuReducer';

const rootReducer = combineReducers({
	posts,
	menu 
});

export default rootReducer;
