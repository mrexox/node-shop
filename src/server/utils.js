'use strict';
const crypto = require('crypto');

function hash(str) {
	return crypto.createHash('sha256').update(str, 'utf8').digest('hex');
};

const tokenQueue = [];
module.exports.generateToken = function() {
	let token = hash(Date.now().toString());
	tokenQueue.push(token);
	setTimeout(() => {
		// Removing the token
		tokenQueue.splice(tokenQueue.indexOf(token), 1);
	}, 60*60*60);
	return token;
};

module.exports.hash = hash;
module.exports.allPosts = 'SELECT * FROM post';
module.exports.tagsOfPost = 'SELECT name FROM tag WHERE post_id = :post_id';
module.exports.imagesOfPost = 'SELECT url FROM image WHERE post_id = :post_id';
module.exports.getPassHash = 'SELECT pass_hash FROM admin WHERE login = :login';
