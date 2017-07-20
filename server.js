'use strict'

// require packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// invoke express
const app = express();
const PORT = process.env.PORT || 3000;

// require route files //
// api routes first so data will display
require('./app/routing/apiRoutes.js')(app);
// html routes
require('./app/routing/htmlRoutes.js')(app);


// Sets up the Express app to handle data parsing //

// Parse application
app.use(bodyParser.urlencoded( {extended: true} ));

// Parse application / json
// app.use(bodyParser.json());
app.use(bodyParser.json( {type: "application/vnd.api+json"} ));
app.use(bodyParser.text());



// App Listener:
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
