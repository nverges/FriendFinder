// Require 'path'
var path = require('path');

// import data
var friendsData = require('../data/friends.js');

// exports api routes
module.exports = function(app) {
	
	// (GET) route
	// Whenever you go to this url...
	app.get("/api/:friends?", function(req, res) {

			// ...log the entire friends array
	        res.json(friendsData);

	});

	// (POST) route
	app.post("/api/friends", function(req, res) {

		// validate to see that all fields are filled in 

		// if no, alert the user to answer all the questions first

		// if yes, push to survey answers

		friendsData.push(req.body);
		res.json(true);

	});

};
