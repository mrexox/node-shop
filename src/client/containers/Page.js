import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import '../styles/Page.css';

import { ADMIN, CONTACT_US, HOME, ABOUT, SEARCH } from '../Constants';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import Menu from '../components/Menu';
import AdminPage from '../components/AdminPage';
import AdminMenu from '../components/AdminMenu';

/*
 * TODO We need to add some logic for SEARCH in the future
 */
let Page = ({ param }) => {
	let menuComponent = (<Menu />);
	if (param === 'admin') {
		menuComponent = (<AdminMenu />);
	}

	return (
		<div>
		  {menuComponent}
		  <div className="page">
			<Route path={`/${ABOUT}`} component={AboutPage} />
			<Route path={`/${HOME}`} component={HomePage} />
			<Route path={`/${SEARCH}`} component={HomePage} />
			<Route path={`/${CONTACT_US}`} component={AboutPage} />
			<Route path={`/${ADMIN}`} component={AdminPage} />
		  </div>
		</div>
	);
};

// The only and the one component Page in the application
// That's why it is connected to itself
Page = connect()(Page);

export default Page;
