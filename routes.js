/*******************************************************************************
Author:         Shawn Hillyer
Description:    CS 496, Oregon State University
*******************************************************************************/

"use strict";

// Routes paradigm used is based on Yeoman.io ('generator-api' package)
// Basically, we set a main route and then each sub-route isset to use a file
// nested in the 'model' folder. Each aspect of the URI model has its own
// folder and route file, as well as a corresponding *-schema.js file to
// designate the mongoose-style schema being used/enforced.

const Router = require('express').Router;
const router = new Router();    // Instantiate the router object

// Each URI category has its own route file for more modularization
const characters = require('./model/characters/characters-router');
const skills = require('./model/skills/skills-router');

// Allow CORS
router.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });


// Base URL route: API Landing page
router.route('/charmaker').get((req,res, next) => {
    next();
    
    res.json({ 
        message: 'Welcome to charmaker API!',
        version: "1.0",
    });
});

// Top-level URI's
router.use('/charmaker/characters', characters);
router.use('/charmaker/skills', skills);

// Export all of router object back to caller in index.js
module.exports = router;