import React from 'react';
//import logo from '../logo.svg';
import '../styles/App.css';

import Page from '../containers/Page';
import Footer from './Footer';

const App = ({ match: {params} }) => (
	<div>
	<Page param={params.place} />
	<Footer />
	</div>
);

export default App;
