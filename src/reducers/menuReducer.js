import { CHANGE_MENU } from '../actions/actionTypes';
//import { changeMenu } from '../actions/menuActions';
import { MenuItems } from '../components/Menu';

const { HOME, ABOUT, ALL_POSTS } = MenuItems;

export default function menu(state=HOME, action) {
	switch (action.type) {
	case (CHANGE_MENU):
		return action.item;
	default:
		return state;//throw new Error('Not implemented');
	}
}
