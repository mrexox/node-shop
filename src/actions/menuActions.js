import * as Actions from './actionTypes';
import { MenuItems } from '../components/Menu';

export function changeMenu(item) {
	return {type: Actions.CHANGE_MENU, item};
}

