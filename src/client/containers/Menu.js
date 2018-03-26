import React from 'react';
import '../styles/Menu.css';
import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import { HOME, ABOUT, ALL_POSTS } from '../Constants';
import { changeMenu } from '../actions/menuActions';

let Menu = ({ dispatch }) => (
	<div className="menu">
		<MenuItem item={HOME} onClick={() => dispatch(changeMenu(HOME))} />
		<MenuItem item={ABOUT} onClick={() => dispatch(changeMenu(ABOUT))} />
		<MenuItem item={ALL_POSTS} onClick={() => dispatch(changeMenu(ALL_POSTS))} />
	</div>
)

Menu = connect()(Menu);



export default Menu;