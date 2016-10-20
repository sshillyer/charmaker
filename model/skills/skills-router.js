/*******************************************************************************
Author:         Shawn Hillyer
Description:    CS 496, Oregon State University
*******************************************************************************/
"use strict";

var path = require('path');
var Skill = require(path.resolve(__dirname, './skills-schema') );
var controller = require('./skills-controller');

const Router = require('express').Router;
const router = new Router();


// Get route. Handles queries in formats /skills (get all) or
// with a querystring (/skills?skill=Arcana)
router.route('/').get((req, res, next) => {
    controller.find(req, res, next);
});


// Get route to handle  /skills/1234  format. Returns a single skill
router.route('/:id').get((req, res, next) => {
    controller.findById(req, res, next);
});


// Put route to handle  /skills/1234  format. Returns the modified skill
router.route('/:id').put((req, res, next) => {
    controller.update(req, res, next);
});


// Post route to handle  /skills  format post requests.
// Returns the skill built and its id as JSON
router.route('/').post((req, res, next) => {
    var data = req.body;
    console.log('Post request received:');
    console.log(data);
    
    controller.create(req, res, next);
});



module.exports = router;
