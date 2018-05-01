import React from 'react';
import { Route } from 'react-router-dom';
import { ADMIN, ALL_POSTS, MESSAGES, ORDERS } from '../Constants';
import AllPostsPage from './admin/AllPostsPage';
import MessagesPage from './admin/MessagesPage';
import OrdersPage from './admin/OrdersPage';

/* FIXME Our admin page needs authentication check
 * before showing anything. So this may go to
 * containers soon.
 */

const AdminPage = ({ match }) => (
	<div>
	  <Route path={`/${ADMIN}`} exact component={AllPostsPage}/>
	  <Route path={`/${ADMIN}/${ALL_POSTS}`} component={AllPostsPage} />
	  <Route path={`/${ADMIN}/${MESSAGES}`} component={MessagesPage} />
	  <Route path={`/${ADMIN}/${ORDERS}`} component={OrdersPage} />
	</div>
);

export default AdminPage;
