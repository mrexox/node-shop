import React from 'react';
import { connect } from 'react-redux';

import { HOME, ABOUT, ALL_POSTS } from './Constants';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import AllPostsPage from './AllPostsPage';

let Page = ({ menu }) => {
	switch (menu) {
		case HOME:
			return (<HomePage />);
		case ABOUT:
			return (<AboutPage />);
		case ALL_POSTS:
			return (<AllPostsPage />);
		default:
			return (<HomePage />);
	}
};

const mapStateToProps = state => {
	return {
		menu: state.menu
	};
};

// The only and the one component Page in the application
// That's why it is connected to itself
Page = connect(
	mapStateToProps,
	dispatch => ({})
)(Page);

export default Page;
