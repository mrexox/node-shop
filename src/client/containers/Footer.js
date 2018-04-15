import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeMenu } from '../actions/menuActions';
import { HOME, ABOUT, ALL_POSTS } from '../Constants';
import '../styles/Footer.css';
// No props yet
let Footer = ({ dispatch }) => (
	<footer>

	<div className="footer__map">
	<span className="footer__map__header">
	Site map
	</span>
	<Link to="/home" onClick={() => dispatch(changeMenu(HOME))} >
	Home
	</Link>

	<Link to="/all-posts" onClick={() => dispatch(changeMenu(ALL_POSTS))} >
	All items
	</Link>

	<Link to="/about" onClick={() => dispatch(changeMenu(ABOUT))} >
	About
	</Link>

	</div>


	<div className="footer__information">
	<span className="footer__map__header">
	Shop (C) 2018
	</span>
	</div>
	</footer>
);

Footer = connect()(Footer);

export default Footer;
