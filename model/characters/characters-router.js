/*******************************************************************************
Author:         Shawn Hillyer
Description:    CS 496, Oregon State University
*******************************************************************************/
"use strict";

const   mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        ObjectId = mongoose.Types.ObjectId;

var Character = require('./characters-schema');
var Skill = require('../skills/skills-schema');
var controller = require('./characters-controller');

const Router = require('express').Router;
const router = new Router();



// Get route. Handles queries to {baseurl}chargen/characters (get all) or
// with a querystring (.../characters?race=Human)
// Returns JSON with 'skills' array "populat"ed by _id and skill properties
router.route('/').get((req, res, next) => {
//    controller.find(req, res, next);
    Character.find(req.query)
    .populate('skills', 'skill')
    .then(doc => res.status(200).json(doc))
    .catch(err => next(err));
});

// Return stats 400 for any PUT requests
router.route('/').put((req, res, next) => {
    res.status(400).json({
        errorMessage: "Cannot PUT to /characters without valid id of character",
        correctiveAction: "Send PUT to /characters/{id} to update values"
    })
});


// Get route to handle  /characters/1234  format. 
// Returns JSON of single character with skills array populated
router.route('/:id').get((req, res, next) => {
//    controller.findById(req.params.id); // THis would return without skills populated
    Character.findById(req.params.id)
    .populate('skills', 'skill')
    .then(doc => res.status(200).json(doc))
    .catch(err => next(err));
});

router.route('/:id').post((req, res, next) => {
    res.status(400).json({
        errorMessage: "Cannot POST to /characters/{id}, use PUT to update or DELETE to delete or GET to retreieve",
    })
});

// Put route to handle  /characters/1234  format. Returns the modified character
router.route('/:id').put((req, res, next) => {
//    controller.update(req, res, next);
    var conditions = { _id: req.params.id };
    
    Character.update(conditions, req.body)
    .then(doc=> {
        if (!doc) {res.status(404).end(); }
        Character.findById(req.params.id)
        .populate('skills', 'skill')
        .then(doc => res.status(200).json(doc))
        .catch(err => next(err));
    });
});

// DELETE character where {id} == Character._id
router.route('/:id').delete((req, res, next) => {
    Character.find({_id: req.params.id})
    .remove().exec()
    res.status(200).json({
        message: 'Character with id ' + req.params.id + ' deleted'
    })
});



// Post route to handle  /characters  format POST requests.
// Returns JSON of character inserted
router.route('/').post((req, res, next) => {
    if (req.params.length == 0)
        controller.create(req, res, next);
    else {
        res.status(400).json({
            errorMessage: "POST request to /characters should not contain a query string. Send parameters in request body."
        });
    }
});

// DELETE route to handle a delete request to the base URL
router.route('/').delete((req, res, next) => {
    if (req.params.length == 0) {
        Character.remove({})
        .then(doc => {
            if (!doc) { return res.status(404).end(); }
            res.status(200).json({
                message : "All characters deleted"
            });
        })
        .catch(err => next(err));
    }
    else {
        res.status(400).json({
            errorMessage: "DLETE request to /characters should not contain a query string. Send parameters in request body."
        });
    }
});



module.exports = router;
