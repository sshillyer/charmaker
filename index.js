/*******************************************************************************
Author:         Shawn Hillyer
Description:    CS 496, Oregon State University
*******************************************************************************/
"use strict"

/*******************************************************************************
 * Middleware Setup
 ******************************************************************************/

// Middleware
var express = require('express');
var app = express();
var http = require('http');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;


// Import body-parser / setup (middleware for parsing POST content)
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/********************************************************************************
 * Mongoose Setup
 ******************************************************************************/

// Import credentials (passwords etc.)
// Note: Always make sure to add database-level user (not just an Mlab.com user, for example)
var credentials = require('./credentials.js');


// Require in the mongoose modules, set connection string
var url = credentials.mongo.development.connectionString;


// Keeps the server alive when an error occurs
var opts = {
    server: {
        socketOptions: { keepAlive: 1 } // prevent database errors (good for a web-based API/website)
    }
};

// Connect to MongoLab database and start server up
// Cite: https://zellwk.com/blog/crud-express-mongodb/
// The db var is set here s owe have global access to it
var db;

// Connect to MongoDB and launch app; on failure, log error and exit
mongoose.connect(credentials.mongo.development.connectionString, function(err, database) {
    if (err) return console.log(err);
    
    db = database;  // Assign the connection to the db variable
    
    var port = process.env.PORT || 8090;
    
    app.listen(port, function() {
        console.log('listening on ' + port)
    });
});


//Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});


// Import our various schemas so we can use them in the routes
var Character = require('./models/characters.js');