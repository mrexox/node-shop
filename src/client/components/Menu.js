import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from '../components/MenuItem';
import { HOME, ABOUT, ALL_POSTS, LOGIN_URL } from '../Constants';
import '../styles/Menu.css';


let Menu = ({ dispatch, chosen }) => (
	<div className="menu">

	<NavLink to={`/${HOME}`} >
	<MenuItem item={HOME} />
	</NavLink>

	<NavLink to={`/${ABOUT}`} >
	<MenuItem item={ABOUT} />
	</NavLink>


	<NavLink to={`/${ALL_POSTS}`} >
	<MenuItem item={ALL_POSTS} />
	</NavLink>

	<NavLink to={`/${LOGIN_URL}`} >
	<MenuItem item={LOGIN_URL} />
	</NavLink>

	</div>
)

export default Menu;
