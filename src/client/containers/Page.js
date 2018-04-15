import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import '../styles/Page.css';

import { HOME, ABOUT, ALL_POSTS } from '../Constants';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import AllPostsPage from '../components/AllPostsPage';

let Page = ({ menu, param }) => {
	let page;
	switch (menu) {
		case HOME:
			console.log('1');
			page = HomePage; break;
		case ABOUT:
			page = AboutPage; break;
		case ALL_POSTS:
			page = AllPostsPage; break;
		default:
			page = HomePage;
	}
	return (
		<div className="page">
		<Route path={`/${menu}`} component={page} >
		</Route>
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
