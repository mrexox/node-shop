import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from '../components/MenuItem';
import { HOME, ABOUT, LOGIN_URL, CONTACT_US } from '../Constants';

import '../styles/Menu.css';


let Menu = () => (
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

	<NavLink to={`/${LOGIN_URL}`} >
	<MenuItem item={LOGIN_URL} />
	</NavLink>

	</div>
);

export default Menu;
