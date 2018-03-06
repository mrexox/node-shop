'use strict';
const express = require('express');
const utils = require('./utils');
const bodyParser = require('body-parser');
const db = require('./db/utils');

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
	db.getAllPosts((posts) => {
		res.json({posts: posts});
	});
});

app.get('/file/*', (req, res, next) => {
	let filename = req.params[0];
	// TODO smth with this
});

// Trying to authenticate
app.post('/authenticate', (req, res, next) => {
	let user = req.body.user;
	let pass = req.body.pass;
	res.send(user + ' ' + pass);
});

// Starting server
app.listen(8080, () => {
	console.log('Listening on 8080');
});
