import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from '../components/MenuItem';
import { ALL_POSTS, ORDERS, MESSAGES } from '../Constants';
import '../styles/Menu.css';


let Menu = ({ dispatch, chosen }) => (
	<div className="menu">

	<NavLink to={`/admin/${ALL_POSTS}`} >
	<MenuItem item={ALL_POSTS} />
	</NavLink>


	<NavLink to={`/admin/${ORDERS}`} >
	<MenuItem item={ORDERS} />
	</NavLink>

	<NavLink to={`/admin/${MESSAGES}`} >
	<MenuItem item={MESSAGES} />
	</NavLink>

	</div>
)

export default Menu;
