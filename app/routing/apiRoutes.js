// Require 'path'
var path = require('path');
var bodyParser = require('body-parser');

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
	app.post("/api/friends", function (req, res) {

		console.log('REQ: ' + req.body)
		// console.log(req)

		// validate to see that all fields are filled in 

		// if no, alert the user to answer all the questions first

		// if yes, push to survey answers

		console.log(friendsData);

		friendsData.push(req.body);

		// res.json(true);

		res.end('true');

	});

};

