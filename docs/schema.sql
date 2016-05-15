# noinspection SqlNoDataSourceInspectionForFile
CREATE DATABASE IF NOT EXISTS `codebloc`;

USE codebloc;

CREATE TABLE users (
	`user_id`     INT(8) NOT NULL AUTO_INCREMENT,
	`user_name`   VARCHAR(30) NOT NULL,
	`user_pass`   VARCHAR(255) NOT NULL,
	`user_email`  VARCHAR(255) NOT NULL,
	`user_date`   DATETIME NOT NULL
	`user_level`  INT(8) NOT NULL,
	UNIQUE INDEX `user_email_unique` (`user_name`, `user_email`),
	PRIMARY KEY (`user_id`)
);

CREATE TABLE `categories` (
	`cat_id`          INT(8) NOT NULL AUTO_INCREMENT,
	`cat_name`        VARCHAR(255) NOT NULL,
	`cat_description` VARCHAR(255) NOT NULL,
	UNIQUE INDEX `cat_name_unique` (`cat_name`),
	PRIMARY KEY (`cat_id`)
);

CREATE TABLE `threads` (
	`thread_id`        INT(8) NOT NULL AUTO_INCREMENT,
	`thread_name`   VARCHAR(255) NOT NULL,
	`thread_date`      DATETIME NOT NULL,
	`thread_cat`       INT(8) NOT NULL,
	`thread_by`        INT(8) NOT NULL,
	PRIMARY KEY (`thread_id`)
);

CREATE TABLE `posts` (
	`post_id`         INT(8) NOT NULL AUTO_INCREMENT,
	`post_content`    TEXT NOT NULL,
	`post_date`       DATETIME NOT NULL,
	`post_topic`      INT(8) NOT NULL,
	`post_by`     INT(8) NOT NULL,
	PRIMARY KEY (`post_id`)
);

# links topics to the corresponding category. on delete, all topics will be deleted in that category. if the cat_id changes
# every topic is updated as well.
ALTER TABLE `threads` ADD FOREIGN KEY(`thread_cat`) REFERENCES `categories`(`cat_id`) ON DELETE CASCADE ON UPDATE CASCADE;

# links topics to the corresponding user. users cant be deleted if there are existing topics with the user_id. this is so
# if a user account is deleted, their post's won't be deleted as well
ALTER TABLE `threads` ADD FOREIGN KEY(`thread_by`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

# link posts to topics, same scenario as the first foreign key
ALTER TABLE `posts` ADD FOREIGN KEY(`post_topic`) REFERENCES `threads`(`thread_id`) ON DELETE CASCADE ON UPDATE CASCADE;

# link posts to topics, same scenario as the second foreign key
ALTER TABLE `posts` ADD FOREIGN KEY(`post_by`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

# extended profile info
ALTER TABLE `users` ADD `avatar` VARCHAR(256),
ADD `user_rank` VARCHAR(60),
ADD `user_realname` VARCHAR(60),
ADD `user_postcount` INT(8),
ADD `user_favlang` VARCHAR(60),
ADD `user_about` VARCHAR(256);