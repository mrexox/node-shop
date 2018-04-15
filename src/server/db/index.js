'use strict';

const config = require('../config');
const mariasql = require('mariasql');
// Creating DB connection
const db = new mariasql({
	host: config.get("database:host"),
	user: config.get("SHOP_USER"),
	password: config.get("SHOP_PASSWORD"),
	db: config.get("SHOP_DB")
	//port: 3306
});

const scripts = {
	allPosts : 'SELECT post_id id, title, htmlText, likes FROM post',
	tagsOfPost : 'SELECT name FROM post_tag WHERE post_id = :post_id',
	imagesOfPost : 'SELECT url FROM post_image WHERE post_id = :post_id',
	getPassHash : 'SELECT pass_hash FROM admin WHERE login = :login',
}

module.exports.db = db;
module.exports.scripts = scripts;
