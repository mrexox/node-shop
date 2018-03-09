import { CHANGE_MENU } from '../actions/actionTypes';
//import { changeMenu } from '../actions/menuActions';
import { HOME } from '../components/Constants';

export default function menu(state=HOME, action) {
	switch (action.type) {
	case (CHANGE_MENU):
		return action.item;
	default:
		return state;//throw new Error('Not implemented');
	}
}
