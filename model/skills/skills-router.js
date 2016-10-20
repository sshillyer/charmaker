/*******************************************************************************
Author:         Shawn Hillyer
Description:    CS 496, Oregon State University
*******************************************************************************/
"use strict";

const Router = require('express').Router;
const router = new Router();

// Routes to handle /skills get request
router.route('/').get((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    
    next();    
    res.json({ 
        message: 'This will return all skills after querying the db',
    });
});


router.route('/:id').get((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    var requestedId = req.params.id;
    
    next();    
    res.json({ 
        message: 'You asked for ' + requestedId + '.',
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
