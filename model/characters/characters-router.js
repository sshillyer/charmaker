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
var controller = require('./characters-controller');
//var skillController = require('../skills/skills-controller');
var Skill = require('../skills/skills-schema');

const Router = require('express').Router;
const router = new Router();


// Get route. Handles queries in formats /characters (get all) or
// with a querystring (/characters?race=Human&)
router.route('/').get((req, res, next) => {
//    controller.find(req, res, next);
    Character.find(req.query)
    .populate('skills')
//    .exec(function (err, person) {
//        if(err) console.log(err);
//        res.status(200).send();
//    })
    .then(doc => res.status(200).json(doc))
    .catch(err => next(err));
    
});


// Get route to handle  /characters/1234  format. Returns a single character
router.route('/:id').get((req, res, next) => {
    controller.findById(req, res, next);
});


// Put route to handle  /characters/1234  format. Returns the modified character
router.route('/:id').put((req, res, next) => {
    controller.update(req, res, next);
});


// Post route to handle  /characters  format post requests.
// Returns the character built and its id as JSON
router.route('/').post((req, res, next) => {
    controller.create(req, res, next);
    
//    var char = req.body;
//    var skills = char.skills;
//    console.log("*****Request*****")
//    console.log(char);
//    console.log("*****  END  *****")
    
    // ATTEMPTE 2
    
//    var newChar = new Character({
//        firstName: char.firstName,
//        lastName: char.lastName,
//        gender: char.gender,
//        race: char.race,
//    });
//    
//    var skillIds = new Array(skills.length);
//    
//    console.log('skills.length = ' + skills.length);
//    
////    for (var i = 0; i < skills.length; i++) {
////        Skill.findOne({'skill': skills[i] }, '_id', function (err, skill) {
////            if (err) console.log(err);
////            newChar.skills.push(skill._id);
//            
////            console.log('Skill ' + i + ': ' + skill);
////            skillIds[i] = skill._id;
////            console.log('skillIds[' + i + ']: ' + skillIds[i]);
////            newChar.skills.push(skillIds[i]);
//        });
//    }

    
    
    // ATTEMPT 1
//    
//    newChar.save();
//    res.send(newChar);
    
//    console.log('Post request received:');
//    console.log(req.body);
//    var data = req.body;
//    var skills = data.skills;
//    
//    var skillIds = [];
//    
//    Skill.findONe({ skill: skills[i]})
//    
//    
//    for (var i = 0; i < skills.length; i++) {
//        console.log(skills[i]);
//        Skill.findOne({'skill': skills[i] }, '_id skill', function (err, skill) {
//            if (err) console.log(err);
////            console.log(skill.id);
//            skillIds.push(skill.id);
////            console.skillIds[i];
//        });
//    }
//    console.log(skillIds.length);
//    for (var i = 0; i < skillIds.length; i++) {
//        console.log(skillIds[i]);
//    }
//    
//    req.body.skills = skillIds;
//    console.log(req.body.skills);
//    
//    controller.create(req, res, next);
});



module.exports = router;
