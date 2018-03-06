'use strict';
const crypto = require('crypto');

module.exports.hash = function(str) {
	return crypto.createHash('sha256').update(str, 'utf8').digest('hex');
};

module.exports.allPosts = 'SELECT * FROM post';
module.exports.tagsOfPost = 'SELECT name FROM tag WHERE post_id = :post_id';
module.exports.imagesOfPost = 'SELECT url FROM image WHERE post_id = :post_id';
