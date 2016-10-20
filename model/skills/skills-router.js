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


module.exports = router;
