import React from 'react';
import { Route } from 'react-router-dom';
import { ALL_POSTS, MESSAGES, ORDERS } from '../Constants';
import AllPostsPage from './admin/AllPostsPage';
import MessagesPage from './admin/MessagesPage';
import OrdersPage from './admin/OrdersPage';

/* FIXME Our admin page needs authentication check
 * before showing anything. So this may go to
 * containers soon.
 */

const AdminPage = ({ match }) => (
	<div>
	  <Route path={match.url} exact component={AllPostsPage}/>
	  <Route path={match.url + '/' + ALL_POSTS} component={AllPostsPage} />
	  <Route path={match.url + '/' + MESSAGES} component={MessagesPage} />
	  <Route path={match.url + '/' + ORDERS} component={OrdersPage} />
	</div>
);

export default AdminPage;
