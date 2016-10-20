/*******************************************************************************
Author:         Shawn Hillyer
Description:    CS 496, Oregon State University
*******************************************************************************/
"use strict";

var path = require('path');
var Character = require(path.resolve(__dirname, './characters-schema') );
var controller = require('./characters-controller');

const Router = require('express').Router;
const router = new Router();


// Get route. Handles queries in formats /characters (get all) or
// with a querystring (/characters?race=Human&)
router.route('/').get((req, res, next) => {
        controller.find(req, res, next);
});


// Get route to handle  /characters/1234  format. Returns a single character
router.route('/:id').get((req, res, next) => {
    var requestedId = req.params.id;
    
//    next();    
//    res.json({ 
//        message: 'You asked for ' + requestedId + '.',
//    });    
});


// Post route to handle  /characters  format post requests.
// Returns the character built and its id as JSON
router.route('/').post((req, res, next) => {
    var data = req.body;
    console.log(data);
        
    next();    
    res.json(data);
//    res.json({ 
//        message: 'POST request to post:' + (data),
//    });
});


module.exports = router;
