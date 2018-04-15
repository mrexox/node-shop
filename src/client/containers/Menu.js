import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Menu.css';
import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import { HOME, ABOUT, ALL_POSTS } from '../Constants';
import { changeMenu } from '../actions/menuActions';

let Menu = ({ dispatch, chosen }) => (
	<div className="menu">
	<NavLink
    to="/home"
       activeStyle={ {
	     textDecoration: 'none',
		 color: 'black'
       }}
	>
	<MenuItem item={HOME} onClick={() => dispatch(changeMenu(HOME))} />
	</NavLink>

	<NavLink
    to="/about"
    activeStyle={ {
	    textDecoration: 'none',
		color: 'black'
    }}
	>
	<MenuItem item={ABOUT} onClick={() => dispatch(changeMenu(ABOUT))} />
	</NavLink>

	<NavLink
    to="/all-posts"
    activeStyle={ {
	    textDecoration: 'none',
		color: 'black'
    }}
	>
	<MenuItem item={ALL_POSTS} onClick={() => dispatch(changeMenu(ALL_POSTS))} />
	</NavLink>

	</div>
)

Menu = connect()(Menu);



export default Menu;
