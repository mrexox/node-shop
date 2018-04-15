
import React from 'react';
//import logo from '../logo.svg';
import '../styles/App.css';

import Menu from './Menu';
import Page from '../containers/Page';
import Footer from './Footer';

const App = ({ match: {params} }) => (
	<div>
	<Menu chosen={params.place} />
	<Page param={params.place} />
	<Footer />
	</div>
);

export default App;
