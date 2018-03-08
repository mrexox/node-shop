--DROP DATABASE IF EXISTS elis_db ;
--CREATE DATABASE elis_db;
USE elis_db;

DROP TABLE IF EXISTS admin;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS image;
DROP TABLE IF EXISTS post;

CREATE TABLE post (
	   post_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, -- UNSIGNED INT NOT NULL
	   	  		 		 	  -- AUTO INCREMENT UNIQUE
	   title VARCHAR(50) NOT NULL DEFAULT 'Untitled',
	   htmlText TEXT,
	   likes INT UNSIGNED NOT NULL DEFAULT 0
) ENGINE=INNODB;

CREATE TABLE image (
	   url TEXT NOT NULL,
	   post_id INT UNSIGNED NOT NULL,
	   FOREIGN KEY (post_id)
	   		   REFERENCES post(post_id)
) ENGINE=INNODB;

CREATE TABLE tag (
	   name VARCHAR(30) NOT NULL,
	   post_id INT UNSIGNED NOT NULL,
	   FOREIGN KEY (post_id)
	   		   REFERENCES post(post_id)
) ENGINE=INNODB;

CREATE TABLE admin (
	   amin_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	   login VARCHAR(50) NOT NULL,
	   pass_hash TEXT
) ENGINE=INNODB;

/* Queries
--All posts:
SELECT given.id, 
	   given.title, 
	   given.htmlText, 
	   given.likes, 
	   (SELECT GROUP_CONCAT(DISTINCT name ORDER BY name SEPARATOR ', ')
	    FROM tag 
	    WHERE post_id=given.id
		GROUP BY post_id) as tags
FROM post given2
WHERE id = ?;

--Images:
SELECT url
FROM image
WHERE post_id = ?;

--Tags:
SELECT name
FROM tag
WHERE post_id = ?;
*/
