import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from '../components/MenuItem';
import { HOME, ABOUT, CONTACT_US } from '../Constants';
import '../styles/Menu.css';


let Menu = ({ dispatch, chosen }) => (
	<div className="menu">

	<NavLink to={`/${HOME}`} >
	<MenuItem item={HOME} />
	</NavLink>

	<NavLink to={`/${ABOUT}`} >
	<MenuItem item={ABOUT} />
	</NavLink>


	<NavLink to={`/${CONTACT_US}`} >
	<MenuItem item={CONTACT_US} />
	</NavLink>

	</div>
)

export default Menu;
