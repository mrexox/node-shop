import React from 'react';
import { Route } from 'react-router-dom';
import { ALL_POSTS, MESSAGES, ORDERS } from '../Constants';
import AllPostsPage from './admin/AllPostsPage';

const AdminPage = ({ match: {params}}) => {
	let component = AllPostsPage;
	switch (params.param) {
		case ALL_POSTS:
			component = AllPostsPage;
			break;
		case MESSAGES:
		case ORDERS:
			break
	}
	return (<Route path="/admin/all" component={component} />);
};

export default AdminPage;
