/*
 * Created by CoderBloc on 5/11/2016.
 */

// TODO TESTING NAMING OF EXPRESS APP kevh- 5/11 @ 6:00 PM //
// TODO 404 middleware error handler at the bottom demonstrates a promise using then() //
// router.use() is how you mount middleware

const express = require("express"),
	  path    = require("path");
const router  = express.Router();

// GET index.html on initial site load
router.get("/", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/index.html")); // routing for the main page, displayed will differ if user is logged in or not
});                                                                  // IF user IS logged in, send to logged in user home page

router.get("/test", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/test.html")); // register button will only be seen if not logged in next to the login button
});                                                                 // IF user ISN'T logged in, display register button next to login button with reduced info displayed

router.get("/profile", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/profile.html")); // profile page available for logged in users, can replace the log in button?
});                                                                    // IF user IS logged in, display profile button

router.get("/forum_index", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/forumindex.html")); // message board to get/post help
});                                                                     // possible working names: helpboard, helpzone

router.get("/help_forum", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/helpforum.html")); // message board to get/post help
});                                                                     // possible working names: helpboard, helpzone

router.get("/peer_forum", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/peerforum.html")); // message board to get/post help
});                                                                     // possible working names: helpboard, helpzone

router.get("/proj_forum", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/projforum.html")); // message board to get/post help
});                                                                     // possible working names: helpboard, helpzone

router.get("/tool_forum", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/toolforum.html")); // message board to get/post help
});                                                                     // possible working names: helpboard, helpzone

router.get("/gen_forum", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/genforum.html")); // message board to get/post help
});                                                                     // possible working names: helpboard, helpzone

router.get("/mod_forum", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/modforum.html")); // message board to get/post help
});

router.get("/project_board", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/project.html")); // different design than a message board specifically for projects? maybe images/descriptions that link to threads?
});

router.get("/about", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/about.html"));
});

router.get("/contact", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/contact.html")); // email form to contact support@coderbloc.com
});



module.exports = router;