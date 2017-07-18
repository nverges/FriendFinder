'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


// Creates array of friends
var friends = [{
	"name": "Joe Schmo",
	"photo": "https://google.com",
	"scores": []
}];



// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));



// Routes to all the html files:
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "app/public/survey.html"));
});



// returns JSON objects for all reservations:
app.get("/api/:friends?", function(req, res) {

		// correctly logs the reservation array
        res.json(friends);

});

// // returns JSON objects for all waitlisted people:
// app.get("/api/:waitlist?", function(req, res) {

// 		// server correctly receiving and logging the waitlist
//         res.json(waitlist);

// });


// Listener:
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});