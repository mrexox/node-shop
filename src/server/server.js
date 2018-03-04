const express = require('express');
const Promise = require('bluebird');
const mariasql = require('mariasql');
const utils = require('./utils');

let app = express();
let db = new mariasql({
 	host: '127.0.0.1',
 	user: process.env.ELIS_USER,
 	password: process.env.ELIS_PASSWORD,
	db: process.env.ELIS_DB
	//port: 3306
});

// Database helpers
let getPosts = new Promise(function(resolve, reject) {
	db.query(utils.allPosts, (err, res) => {
		if (err) { reject(err); }
		resolve(res);
	});
});

let getImages = (post) => {	
	return new Promise(function(resolve, reject) {
		db.query(utils.imagesOfPost, {post_id: post.id}, (err, rows) => {
			if (err) { reject(err); }
			// TODO add alt
			post.imageList = rows.map(img => ({url: img.url}));
			return resolve( post );
		});
	});
};

let getTags = (post) => {
	return new Promise(function(resolve, reject) {
		db.query(utils.tagsOfPost, {post_id: post.id}, (err, rows) => {
			if (err) { reject(err); }
			post.tags = rows.map(tag => tag.name);
			return resolve( post );
		});
	});
};

// Uses
app.use(express.json()); // making sure of JSON support

// Configuration
const asIs = (i, val) => val;
app.set('json spaces', 2);
app.set('json replacer', asIs);

// Making the whole system working...
// Handling fetches and sending data
app.get('/', function(req, res, next) {
	// Fetch posts from database
	getPosts.then(posts => {
		let result = [];
		Promise.map(posts, (post) => {
			return getImages(post) // find images for each post
				.then(post => getTags(post)); // find tags for each post
		}).then(posts => {
			res.json({posts: posts});
		});
	}).catch( err => {console.log(err);}); // FIXME Log error the write way
});


app.listen(8080, () => {
	console.log('Listening on 8080');
});
