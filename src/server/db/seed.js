const mariasql = require('mariasql');
const utils = require('../utils');
let db = new mariasql({
 	host: '127.0.0.1',
 	user: process.env.ELIS_USER,
 	password: process.env.ELIS_PASSWORD,
	db: process.env.ELIS_DB
	//port: 3306
});

let inserts = [
	['INSERT INTO admin (login, pass_hash) VALUES (?, ?)', 'admin', utils.hash('password')],
	['INSERT INTO admin (login, pass_hash) VALUES (?, ?)', 'ian', utils.hash('admin')],
	['INSERT INTO post (id, title, htmlText) VALUES (?, ?, ?)', '1', 'Post #1', '<p>New post</p>'],
	['INSERT INTO image (url, post_id) VALUES (?, ?)', 'http://vanimg.s3.amazonaws.com/nature-p-2.jpg', '1'],
	['INSERT INTO image (url, post_id) VALUES (?, ?)', 'http://1.bp.blogspot.com/-2jKK8DeueQk/Tlh-dxq_YEI/AAAAAAAAAY4/RYXOlGzGALA/s1600/Nature-Wallpapers-6.jpg', '1'],
	['INSERT INTO tag (name, post_id) VALUES (?, ?)', 'spring', '1'],
	['INSERT INTO tag (name, post_id) VALUES (?, ?)', 'leaf', '1'],
	['INSERT INTO tag (name, post_id) VALUES (?, ?)', 'nature', '1'],
];

inserts.forEach(function(item, index) {
	db.query(item[0], item.slice(1), function(err) {
		if (err) {
			db.end();
			console.dir(item);
			throw err;
		}
		console.log(index + 'rows inserted');
	});
});

db.end();

/*
-- check if works
select p.title, p.htmlText, p.likes, i.url, t.name 
FROM post p JOIN image i ON (p.id = i.post_id) 
JOIN tag t ON (p.id = t.post_id);

*/
