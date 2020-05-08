var express = require('express');
var bodyParser = require('body-parser');
var nodemon = require('nodemon');
var path = require('path');
 
var app = express();

// Set Handlebars engine
var expressHandlebars = require("express-handlebars");
app.engine("handlebars", expressHandlebars({defaultLayout:"main"}))
app.set("view engine", "handlebars")


var PORT =  process.env.PORT || 8080;

// Parse application body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static('public'));

// Import routes and give the server access to them.
var burgerController = require('./controllers/burgerController')
burgerController(app);


app.listen(PORT, function(){
    console.log("App is listening on http://localhost:" + PORT);
})
