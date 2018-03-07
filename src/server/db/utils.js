'use strict';
const mariasql = require('mariasql');
const Promise = require('bluebird');
const utils = require('../utils');

// Creating DB connection
const db = new mariasql({
	host: '127.0.0.1',
	user: process.env.SHOP_USER,
	password: process.env.SHOP_PASSWORD,
	db: process.env.SHOP_DB
	//port: 3306
});

// Select from `post` table
const getPosts = new Promise(function(resolve, reject) {
	db.query(utils.allPosts, (err, res) => {
		if (err) { reject(err); }
		resolve(res);
	});
});

// Fill posts with images
const getImages = (post) => {	
	return new Promise(function(resolve, reject) {
		db.query(utils.imagesOfPost, {post_id: post.id}, (err, rows) => {
			if (err) { reject(err); }
			// TODO add alt
			post.imageList = rows.map(img => ({url: img.url}));
			return resolve( post );
		});
	});
};

// Fill posts with tags
const getTags = (post) => {
	return new Promise(function(resolve, reject) {
		db.query(utils.tagsOfPost, {post_id: post.id}, (err, rows) => {
			if (err) { reject(err); }
			post.tags = rows.map(tag => tag.name);
			return resolve( post );
		});
	});
};

// Compose all fillers to construct post list
function getAllPosts(callback) {
	if (typeof(callback) !== 'function') {
		console.log('getAllPosts: expects a callback function as an arg');
		return;
	}
	getPosts.then(posts => {
		let result = [];
		Promise.map(posts, (post) => {
			return getImages(post) // find images for each post
				.then(post => getTags(post)); // find tags for each post
		}).then(posts => {
			callback(posts);
		});
	}).catch( err => {console.log(err);}); // FIXME Log error the right way
}

const tryToAuthenticate = (login, pass_hash) => {
	return new Promise((resolve, reject) => {
		db.query(utils.getPassHash, {login: login}, (err, rows) => {
			if (err) { return reject(err); }
			if (rows.length == 0) { return resolve(false); }
			if (rows[0].pass_hash != pass_hash) { return resolve(false); }
			return resolve(true);
		});
	});
};

function authenticate(login, pass, callback) {
	let pass_hash = utils.hash(pass);
	return tryToAuthenticate(login, pass_hash)
		.then(result => callback(result))
		.catch(err => console.log(err)); // FIXME Log errors the right way
}

module.exports.dbCLient = db;
module.exports.getAllPosts = getAllPosts;
module.exports.authenticate = authenticate;
