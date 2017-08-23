"use strict";

const mongoose = require( "mongoose" );

const RecipeSchema = new mongoose.Schema({
    name: String,
    cook_time: Number,
    instructions: String,
    tags: [String],
    difficulty: Number,
    required_ingredients: [{ name: String, amount: String, _id: false }],
    fancy_ingredients:  [{ name: String, amount: String, _id: false }]
});

const Recipe = mongoose.model( "Recipe", RecipeSchema );

module.exports = { Recipe: Recipe };
