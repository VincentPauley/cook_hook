const express = require( 'express' ),
      app = express(),
      mongoose = require( 'mongoose' ),
      Schema = mongoose.Schema;

// provide the public Dir
app.use( express.static( 'public' ) );

const mongoDB = 'mongodb://127.0.0.1/recipes';

mongoose.connect( mongoDB );

// default connection
const db = mongoose.connection;

// initial model
const recipeSchema = new Schema({
    recipe_name : String,
    tags : [{ type: String }],
    difficulty : Number,
    ingredients : [{ type: String }],
    cook_time : Number,
    instructions : String
});

const Recipe = mongoose.model( 'Recipe', recipeSchema );

// attempt at one read
Recipe.find({}, function( err, recipe ) {
    if( err ) throw err;

    console.log( recipe );
});


app.get('/', function( req, res ) {
    res.send( 'Welcome to Cook-Hook!' );
});

app.get( '/all-recipes', function( req, res ) {

    res.send( 'Getting all recipes!' );
});

app.listen( 3000 );
