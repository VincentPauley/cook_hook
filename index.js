const express = require( 'express' ),
      app = express(),
      mongoose = require( 'mongoose' ),
      Schema = mongoose.Schema;

// set mongoose to use bluebird lib for promises rather than default
mongoose.Promise = require( 'bluebird' );

// provide the public Dir
app.use( express.static( 'public' ) );

var promise = mongoose.connect( 'mongodb://localhost/myapp', {
    useMongoClient: true
});

promise.then(function( db ) {
    // initial model
    var recipeSchema = new Schema({
        recipe_name : String,
        tags : [String],
        difficulty : Number,
        ingredients : [{ name: String, qnty: String }],
        cook_time : Number,
        instructions : String
    });

    var Recipe = mongoose.model( 'Recipe', recipeSchema );

    // attempt at one read
    Recipe.find({}, function( err, recipe ) {
        if( err ) throw err;

        console.log( recipe );
    });
});



app.get('/', function( req, res ) {
    res.send( 'Welcome to Cook-Hook!' );
});

app.get( '/all-recipes', function( req, res ) {

    res.send( 'Getting all recipes!' );
});

app.listen( 3000 );
