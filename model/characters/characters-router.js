/*******************************************************************************
Author:         Shawn Hillyer
Description:    CS 496, Oregon State University
*******************************************************************************/
"use strict";

const   mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        ObjectId = mongoose.Types.ObjectId;

var path = require('path');
var Character = require(path.resolve(__dirname, './characters-schema') );
var Skill = require('../skills/skills-schema');
var controller = require('./characters-controller');

const Router = require('express').Router;
const router = new Router();


// Get route. Handles queries in formats /characters (get all) or
// with a querystring (/characters?race=Human&)
router.route('/').get((req, res, next) => {
//    controller.find(req, res, next);
    if (req.body.skills != undefined) {
        console.log("Client wants to search on skills");
        
    }
    
    Character.find(req.query)
    .populate('skills', 'skill')
    .then(doc => res.status(200).json(doc))
    .catch(err => next(err));
});


// Get route to handle  /characters/1234  format. Returns a single character
router.route('/:id').get((req, res, next) => {
//    controller.findById(req.params.id);
    Character.findById(req.params.id)
    .populate('skills', 'skill')
    .then(doc => res.status(200).json(doc))
    .catch(err => next(err));;
});


// Put route to handle  /characters/1234  format. Returns the modified character
router.route('/:id').put((req, res, next) => {
    controller.update(req, res, next);
});


// Post route to handle  /characters  format post requests.
// Returns the character built and its id as JSON
router.route('/').post((req, res, next) => {
    controller.create(req, res, next);
});



module.exports = router;
