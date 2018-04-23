import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MenuItem.css';

import { HOME, ABOUT, ALL_POSTS, LOGIN_URL } from '../Constants';

function translateItem(item) {
	switch (item) {
		case HOME: return 'Home';
		case ABOUT: return 'About';
		case ALL_POSTS: return 'All posts';
		case LOGIN_URL: return 'Log In/Register';
		default: return '';
	}
}
// Make it more complicated if needed
const MenuItem = ({ item }) => (
	<div className="menu-item">
	{translateItem(item)}
	</div>
)

MenuItem.propTypes = {
	item: PropTypes.string.isRequired,
};

export default MenuItem;
