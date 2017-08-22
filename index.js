const express = require( 'express' ),
      app = express(),
      mongoose = require( 'mongoose' ),
      Schema = mongoose.Schema;

// set mongoose to use bluebird lib for promises rather than default
mongoose.Promise = require( 'bluebird' );

// provide the public Dir
app.use( express.static( 'public' ) );

var promise = mongoose.connect( 'mongodb://localhost/recipes', {
    useMongoClient: true
});

promise.then(function( db ) {
    // initial model

    var recipeSchema = new Schema({
        name: String,
        cook_time: Number,
        instructions: String
    });
    /*
    var userSchema = new Schema({
        name: String,
        username: { type: String, required: true, unique: true},
        password: { type: String, required: true },
        admin: Boolean,
        location: String,
        meta: {
          age: Number,
          website: String
        },
        created_at: Date,
        updated_at: Date
    });*/

    var Recipe = mongoose.model( 'Recipe', recipeSchema );

    var newRecipe = Recipe({
        name: "Grilled Cheese",
        cooktime: 4000,
        instructions: "saute the buns and then "
    });

    newRecipe.save(function( err ) {
        if(err) throw err;

        console.log( 'Recipe Added' );
    });

    newUser.save(function(err) {
        if(err) throw err;

        console.log( 'User Created' );
    });
});



app.get('/', function( req, res ) {
    res.send( 'Welcome to Cook-Hook!' );
});

app.get( '/all-recipes', function( req, res ) {

    res.send( 'Getting all recipes!' );
});

app.listen( 3000 );
