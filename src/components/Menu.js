import React from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import { changeMenu } from '../actions/menuActions';

let Menu = ({ dispatch }) => {
	<div class="menu">
		<MenuItem item={MenuItems.HOME} onClick={() => dispatch(changeMenu(MenuItems.HOME))} />
		<MenuItem item={MenuItems.ABOUT} onClick={() => dispatch(changeMenu(MenuItems.ABOUT))} />
		<MenuItem item={MenuItems.ALL_POSTS} onClick={() => dispatch(changeMenu(MenuItems.ALL_POSTS))} />
	</div>;
}

Menu = connect()(Menu);

export const MenuItems = {
	HOME: 'HOME',
	ABOUT: 'ABOUT',
	ALL_POSTS: 'ALL_POSTS'
};

export default Menu;
