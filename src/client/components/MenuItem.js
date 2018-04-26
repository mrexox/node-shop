import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MenuItem.css';
import { HOME, ABOUT, ALL_POSTS,
		 ORDERS, MESSAGES, CONTACT_US, LOGIN_URL, LOGOUT_URL } from '../Constants';

function translateItem(item) {
	switch (item) {
	case HOME: return 'Home';
	case ABOUT: return 'About';
	case ALL_POSTS: return 'All posts';
	case ORDERS: return 'Orders';
	case MESSAGES: return 'Messages';
	case LOGIN_URL: return 'Log In/Register';
	case CONTACT_US: return 'Contact Us';
	case LOGOUT_URL: return 'Logout'
	default: return '';
	}
}

// Make it more complicated if needed
const MenuItem = ({ item }) => (
	<div className="menu-item">
	  {translateItem(item)}
	</div>
);

MenuItem.propTypes = {
	item: PropTypes.string.isRequired,
};

export default MenuItem;
