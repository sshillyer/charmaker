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


/********************************************************
* Base /skills handling (and querystrings)
/*******************************************************/

// GET route. /skills (get all) or querystring (/skills?skill=Arcana)
router.route('/').get((req, res, next) => {
    // See controller.js in root dir for logic
    controller.find(req, res, next);
});


// POST route: /skills (Create new skill)
// Returns the skill built and its id as JSON
router.route('/').post((req, res, next) => {
    controller.create(req, res, next);
});


// PUT route: /skills  (disallowed)
router.route('/').put((req, res, next) => {
    res.status(400).json({
        errorMessage: 'Cannot PUT to /skills without valid id of skill',
        correctiveAction: "Send PUT to /skills/{id} to update values"
    })
});

// DELETE route: /skills Error message / status 400
router.route('/').delete((req, res, next) => {
    res.status(400).json({
        errorMessage: 'Cannot DELETE to /skills without valid id of skill',
        correctiveAction: "Send DELETE to /skills/{id} to delete a skill"
    })
});



/********************************************************
* /skills/{id} handling
/*******************************************************/

// GET route: /skills/{id}
router.route('/:id').get((req, res, next) => {
    controller.findById(req, res, next);
});

// POST route: /skills/{id}
router.route('/:id').post((req, res, next) => {
    res.status(400).json({
        errorMessage: "Cannot POST to /skills/{id}, use PUT to update or DELETE to delete or GET to retreive",
    })
});


// PUT route: /skills/{id}
router.route('/:id').put((req, res, next) => {
    controller.update(req, res, next);
});

// DELETE route: /skills/{id}
// Needs to delete refernces in character documents to this skil....





module.exports = router;
