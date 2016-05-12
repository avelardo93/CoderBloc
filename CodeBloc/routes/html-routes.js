/*
 * Created by CodeBloc on 5/11/2016.
 */

// TODO TESTING NAMING OF EXPRESS APP kevh- 5/11 @ 6:00 PM //

const express = require("express"),
	  router  = express.Router();

// GET index.html on initial site load
router.get("/", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/index.html)"));
});

router.get("/signup", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/singup.html"));
});

router.get("/profile", function(req, res, then) {
	res.sendFile(path.join(process.cwd(), "public", "/profile.html"))
});

// middleware to catch 404s. can create or template custom 404 page
// this is different than the 404 handler in server.js
router.use(function(req, res, then) {
	res.sendStatus(404);
	res.sendFIle(path.join(process.cwd(), "public", "/404.html"))
		.then(alert("WOOPSIE DAISY"));
});