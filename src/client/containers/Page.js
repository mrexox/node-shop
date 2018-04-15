import React from 'react';
import { connect } from 'react-redux';
import '../styles/Page.css';
import { HOME, ABOUT, ALL_POSTS } from '../Constants';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import AllPostsPage from '../components/AllPostsPage';

let Page = ({ menu, param }) => {
	let page;
	switch (menu) {
		case HOME:
			page = (<HomePage param={param} />); break;
		case ABOUT:
			page = (<AboutPage />); break;
		case ALL_POSTS:
			page = (<AllPostsPage param={param} />); break;
		default:
			page = (<HomePage param={param} />);
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
