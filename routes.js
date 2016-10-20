/*******************************************************************************
Author:         Shawn Hillyer
Description:    CS 496, Oregon State University
*******************************************************************************/

"use strict";

// Somewhat based on 'generator-api' yeoman generator design pattern
const Router = require('express').Router;
const router = new Router();    // Instantiate the router object

// Import our various schemas so we can use them in the routes
const characters = require('./models/characters-schema');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to chargen API!' });
});


// Base URL route:
//router.route('/').get((req,res) => {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//    next();
//    
//    res.json({ 
//        message: 'Welcome to charmaker API!',
//        version: "1.0",
//    });
//});



//router.get('/', function(){
//        res.json({ 
//        message: 'Welcome to charmaker API!',
//        version: "1.0",
//    });
//})

module.exports = router;