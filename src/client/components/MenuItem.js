import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MenuItem.css';

import { HOME, ABOUT, ALL_POSTS,
		 ORDERS, MESSAGES, CONTACT_US } from '../Constants';

function translateItem(item) {
	switch (item) {
	case HOME: return 'Home';
	case ABOUT: return 'About';
	case ALL_POSTS: return 'All posts';
	case ORDERS: return 'Orders';
	case MESSAGES: return 'Messages';
	case CONTACT_US: return 'Contact Us';
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
