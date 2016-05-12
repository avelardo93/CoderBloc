/*
 * Created by CodeBloc on 5/11/2016.
 */

// TODO TESTING NAMING OF EXPRESS APP kevh- 5/11 @ 6:00 PM //
// TODO 404 middleware error handler at the bottom demonstrates a promise using then() //
// router.use() is how you mount middleware

const express = require("express"),
	  path    = require("path");
const router  = express.Router();

// GET index.html on initial site load
router.get("/", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/index.html"));
});

router.get("/register", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/register.html"));
});

router.get("/profile", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/profile.html"))
});

// middleware to catch 404s. can create or template custom 404 page
// this is different than the 404 handler in server.js
router.use(function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/404.html"));
	then(console.log("This is a promise!"));
});

module.exports = router;