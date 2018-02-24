import React from 'react';
import PropTypes from 'prop-types';

import { HOME, ABOUT, ALL_POSTS } from './Constants';

function translateItem(item) {
	switch (item) {
		case HOME: return 'Home';
		case ABOUT: return 'About';
		case ALL_POSTS: return 'All posts';
		default: return '';
	}
}
// Make it more complicated if needed
const MenuItem = ({ item, onClick }) => (
	<div calss="menu-item"
	onClick={onClick} >
	{translateItem(item)}
	</div>
)

MenuItem.propTypes = {
	item: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default MenuItem;
