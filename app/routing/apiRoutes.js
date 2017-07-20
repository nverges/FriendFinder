// Require 'path'
var path = require('path');

// Require data
var friendsData = require('../data/friends.js');

module.exports = function(app) {
	
	// (GET) function. 
	// Whenever you go to this url...
	app.get("/api/:friends?", function(req, res) {

			// ...log the entire friends array
	        res.json(friendsData);

	});

};
