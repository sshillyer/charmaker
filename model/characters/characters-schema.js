/*******************************************************************************
Author:         Shawn Hillyer
Description:    CS 496, Oregon State University
*******************************************************************************/
"use strict";

const   mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        ObjectId = mongoose.Schema.Types.ObjectId;

const Skill = require('../skills/skills-schema');

const charactersSchema = mongoose.Schema({
//    _id: Number,  // This is implied and inserted automatically by MongoDB
    firstName: String,
    lastName: String,
    gender: String,
    race: String,
    skills: [ObjectId],
});

const Character = mongoose.model('Characters', charactersSchema);
module.exports = Character;


// Populate seed data if none exists
Character.find(function(err, characters) {
    if(characters.length) return;
   
    Character.create({
        firstName: "Mafirst",
        lastName: "Namislast",
        gender: "Male",
        race: "Orc",
//        skills: ["Punching", "Kicking", "Screaming"]
    }, function(err, character) {
        if(err) console.log(err);
        else console.log(character);
    });
    
        Character.create({
        firstName: "Yoname",
        lastName: "Ismyname",
        gender: "Female",
        race: "Human",
//        skills: ["Laughing", "Crying", "Talking"]
    }, function(err, character) {
        if(err) console.log(err);
        else console.log(character);
    });
    
    
});
