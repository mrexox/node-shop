import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import '../styles/Page.css';

import { HOME, ABOUT, ALL_POSTS, SEARCH } from '../Constants';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import AllPostsPage from '../components/AllPostsPage';

let Page = ({ param }) => {
	let page;
	switch (param) {
		case HOME:
			page = HomePage; break;
		case ABOUT:
			page = AboutPage; break;
		case ALL_POSTS:
			page = AllPostsPage; break;
		case SEARCH:
			page = HomePage; break;
		default:
			page = HomePage;
	}
	return (
		<div className="page">
		<Route path={`/${param}/:param?`} component={page} >
		</Route>
		</div>
	);
};

// The only and the one component Page in the application
// That's why it is connected to itself
Page = connect()(Page);

export default Page;
