import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import '../styles/Page.css';

import { ADMIN, HOME, ABOUT, SEARCH } from '../Constants';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import Menu from '../components/Menu';
import AdminPage from '../components/AdminPage';
import AdminMenu from '../components/AdminMenu';

let Page = ({ param }) => {
	let page;
	let menu = 'simple';
	console.log(param);
	switch (param) {
		case HOME:
			page = HomePage; break;
		case ABOUT:
			page = AboutPage; break;
		case SEARCH:
			page = HomePage; break;
		case ADMIN:
			page = AdminPage;
			menu = 'admin';
			break;
		default:
			page = HomePage;
	}

	let menuComponent = (<Menu chosen={param} />);
	switch (menu) {
		case 'admin':
			menuComponent = (<AdminMenu />);
	}

	return (
		<div>
		{menuComponent}
		<div className="page">
		<Route path={`/${param}/:param?`} component={page} >
		</Route>
		</div>
		</div>
	);
};

// The only and the one component Page in the application
// That's why it is connected to itself
Page = connect()(Page);

export default Page;
