'use strict';

const express = require('express');
const utils = require('./utils');
const bodyParser = require('body-parser');
const posts = require('./posts');
const auth = require('./authentication');
const app = express();

// Middleware
app.use(express.json()); // making sure of JSON support
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// Configuration
const asIs = (i, val) => val;
app.set('json spaces', 2);
app.set('json replacer', asIs);

// Just fetching all posts
app.get('/', (req, res, next) => {
	posts.getAllPosts((posts) => {
		res.json({posts: posts});
	});
});

// To serve static files (images)
app.get('/file/*', (req, res, next) => {
	let filename = req.params[0];
	res.send(filename);
	// TODO smth with this
});

// Trying to authenticate
app.post('/authenticate', (req, res, next) => {
	let login = req.body.login;
	let pass = req.body.pass;
	auth.authenticate(login, pass, result => {
		if (result) { return res.json({token: auth.generateToken()}); }
		else { return res.json({token: false}); }
	});
});

// Starting server
app.listen(8080, () => {
	console.log('Listening on 8080');
});
