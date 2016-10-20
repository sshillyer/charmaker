/*******************************************************************************
Author:         Shawn Hillyer
Description:    CS 496, Oregon State University
*******************************************************************************/

"use strict";

// Somewhat based on 'generator-api' yeoman generator design pattern
const Router = require('express').Router;
const router = new Router();    // Instantiate the router object

// Each URI category has its own route file for more modularization
const characters = require('./model/characters/characters-router');

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


module.exports = router;