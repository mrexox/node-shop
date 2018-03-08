'use strict';
const Promise = require('bluebird');
const dbManager = require('./db/db');

const db = dbManager.db;
const scripts = dbManager.scripts;

const getPosts = new Promise(function(resolve, reject) {
	db.query(scripts.allPosts, (err, res) => {
		if (err) { reject(err); }
		resolve(res);
	});
});

// Fill posts with images
const getImages = (post) => {	
	return new Promise(function(resolve, reject) {
		db.query(scripts.imagesOfPost, {post_id: post.id}, (err, rows) => {
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
		db.query(scripts.tagsOfPost, {post_id: post.id}, (err, rows) => {
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

module.exports.getAllPosts = getAllPosts;
