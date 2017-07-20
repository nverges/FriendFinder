// Require 'path'
var path = require('path');

// Routes to HTML files
module.exports = function(app) {
	
	// (GET) Route to default index page
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});

	// (GET) Route to survey page
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});


	// Default (USE) route //
	app.use( function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});

};
