'use strict';
const dbManager = require('./db');
const utils = require('./utils');

const db = dbManager.db;
const scripts = dbManager.scripts;

/* This only checks if a user is in database
 * and his password hash equals given one.
 */
const tryToAuthenticate = (login, pass_hash) => {
	return new Promise((resolve, reject) => {
		db.query(scripts.getPassHash, {login: login}, (err, rows) => {
			if (err) { return reject(err); }
			if (rows.length == 0) { return resolve(false); }
			if (rows[0].pass_hash != pass_hash) { return resolve(false); }
			return resolve(true);
		});
	});
};

/* Public interface to authenticate users.
 */
function authenticate(login, pass, callback) {
	let pass_hash = utils.hash(pass);
	return tryToAuthenticate(login, pass_hash)
		.then(result => callback(result))
		.catch(err => console.log(err)); // FIXME Log errors the right way
}


const tokenQueue = []; // the list of tokens available

/* Generating a unique token and adding it to the tokenQueue
 * Public interface.
 */
function generateToken() {
	let token = utils.hash(Date.now().toString());
	tokenQueue.push(token);
	setTimeout(() => {
		// Removing the token
		tokenQueue.splice(tokenQueue.indexOf(token), 1);
	}, 60*60*60);
	return token;
};

/* Check if the token is in there.
 * Public interface.
 */
function checkToken(token) {
	if (tokenQueue.indexOf(token) != -1) {
		return true;
	}
	return false;
}

module.exports.authenticate = authenticate;
module.exports.checkToken = checkToken;
module.exports.generateToken = generateToken;
