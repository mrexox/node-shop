import './client/styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './client/components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './client/store/configureStore'; // adding a redux

import { fetchPosts } from './client/actions/postsActions';

const store = configureStore();	// redux-store

fetchPosts()(store.dispatch);


ReactDOM.render(
	<Provider store={store}>
	<Router>
	<Route path="/:place?/:subplace?" component={App} />
	</Router>
	</Provider>,
							   document.getElementById('root')
);

registerServiceWorker();
