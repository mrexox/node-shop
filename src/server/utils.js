'use strict';
const crypto = require('crypto');

function hash(str) {
	return crypto.createHash('sha256').update(str, 'utf8').digest('hex');
};

const tokenQueue = []; // the list of tokens available
// Generating a unique token and adding it to the tokenQueue
function generateToken() {
	let token = hash(Date.now().toString());
	tokenQueue.push(token);
	setTimeout(() => {
		// Removing the token
		tokenQueue.splice(tokenQueue.indexOf(token), 1);
	}, 60*60*60);
	return token;
};

// Check if the token is in there
// For administration
function authenticate(token) {
	if (tokenQueue.indexOf(token) != -1) {
		return true;
	}
	return false;
}
module.exports.authenticate = authenticate;
module.exports.hash = hash;
module.exports.generateToken = generateToken;
module.exports.allPosts = 'SELECT post_id id, title, htmlText, likes FROM post';
module.exports.tagsOfPost = 'SELECT name FROM post_tag WHERE post_id = :post_id';
module.exports.imagesOfPost = 'SELECT url FROM post_image WHERE post_id = :post_id';
module.exports.getPassHash = 'SELECT pass_hash FROM admin WHERE login = :login';
