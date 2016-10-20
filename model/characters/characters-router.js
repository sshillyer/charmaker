/*******************************************************************************
Author:         Shawn Hillyer
Description:    CS 496, Oregon State University
*******************************************************************************/
"use strict";

const Router = require('express').Router;
const router = new Router();

// Get route. Handles queries in formats /characters, /characters?race=orc, /characters?gender=male
router.route('/').get((req, res, next) => {
    var race = req.query.race;
    var gender = req.query.gender;
    
    // If searching by race:
    if (typeof race != 'undefined') {
            next();
            res.json({ 
                message: 'This will return all characters with race = ' + race,
            });
            return;
    }
    
    // Else if searching by gender:
    else if (typeof gender != 'undefined') {
            next();
            res.json({ 
                message: 'This will return all characters with gender = ' + gender,
            });
            return;
    }
    
    // No querystring -> Return all characters
    else {
        next();
        res.json({ 
            message: 'This will return all characters after querying the db',
        });        
    }
});

// Get route to handle  /characters/1234  format. Returns a single character
router.route('/:id').get((req, res, next) => {
    var requestedId = req.params.id;
    
    next();    
    res.json({ 
        message: 'You asked for ' + requestedId + '.',
    });    
});


// Post route to handle  /characters  format post requests.
// Returns the character built and its id as JSON
router.route('/').post((req, res, next) => {
    var data = req.body;
    console.log(data);
        
    next();    
    res.json({ 
        message: 'POST request to post:' + JSON.stringify(data),
    });    
});




// Scrap / sample code from yeoman generator
//router.route('/')
//  .get((arg1) => controller.find(arg1))
//  .post((arg1) => controller.create(arg1));
//
//router.route('/:id')
//  .put((arg1) => controller.update(arg1))
//  .get((arg1) => controller.findById(arg1))
//  .delete((arg1) => controller.remove(arg1));

module.exports = router;
