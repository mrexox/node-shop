import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './client/components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './client/store/configureStore'; // adding a redux

const store = configureStore();	// redux-store

ReactDOM.render(
		<Provider store={store}>
		<App  />
		</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
