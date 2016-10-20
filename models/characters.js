"use strict";

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CharacterSchema = mongoose.Schema({
    test: String,
});

var Character = mongoose.model('Character', CharacterSchema);
module.exports = Character;

Character.find(function(err, characters) {
    // If characters has any documents, don't seed
    if(characters.length) return;
   
    Character.create({
        test: "Test value"
    }, function(err, character) {
        if(err) console.log(err);
        else console.log(character);
    });
    
});
