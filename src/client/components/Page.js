import React from 'react';
import { connect } from 'react-redux';
import '../styles/Page.css';
import { HOME, ABOUT, ALL_POSTS } from './Constants';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import AllPostsPage from './AllPostsPage';

let Page = ({ menu }) => {
	let page;
	switch (menu) {
		case HOME:
			page = (<HomePage />); break;
		case ABOUT:
			page = (<AboutPage />); break;
		case ALL_POSTS:
			page = (<AllPostsPage />); break;
		default:
			page = (<HomePage />);
	}
	return (
		<div className="page">
		{page}
		</div>
	);
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
