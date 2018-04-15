import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
// No props yet
let Footer = ({ dispatch }) => (
	<footer>

	<div className="footer__map">
	<span className="footer__map__header">
	Site map
	</span>
	<Link to="/home" >
	Home
	</Link>

	<Link to="/all-posts" >
	All items
	</Link>

	<Link to="/about" >
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


export default Footer;
