import './client/styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './client/components/App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './client/store/createStore'; // adding a redux

import { fetchPosts } from './client/actions/postsActions';

const store = createStore();	// redux-store

fetchPosts()(store.dispatch);


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path="/:place?" component={App} />
		</Router>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
