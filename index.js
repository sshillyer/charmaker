/*******************************************************************************
Author:         Shawn Hillyer
Description:    CS 496, Oregon State University
*******************************************************************************/
"use strict"

/*******************************************************************************
 * Middleware Setup
 ******************************************************************************/

// Core middleware
var express = require('express');
var app = express();
var http = require('http');
var mongoose = require('mongoose');

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
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = credentials.mongo.development.connectionString;


// Keeps the server alive when an error occurs
var opts = {
    server: {
        socketOptions: { keepAlive: 1 } // prevent database errors (good for a web-based API/website)
    }
};

// Connect to MongoLab database and start server up
// Cite: https://zellwk.com/blog/crud-express-mongodb/
var db;

mongoose.connect(credentials.mongo.development.connectionString, function(err, database) {
    if (err) return console.log(err);
    
    db = database;
    
    app.listen(3000, function() {
        console.log('listening on 3000')
    });
});



//Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});
