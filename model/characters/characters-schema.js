/*******************************************************************************
Author:         Shawn Hillyer
Description:    CS 496, Oregon State University
*******************************************************************************/
"use strict";

const   mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const charactersSchema = mongoose.Schema({
    test: String,
});

const Character = mongoose.model('Characters', charactersSchema);
module.exports = Character;





// Populate seed data if none exists
Character.find(function(err, characters) {
    if(characters.length) return;
   
    Character.create({
        test: "Test value"
    }, function(err, character) {
        if(err) console.log(err);
        else console.log(character);
    });
    
});
