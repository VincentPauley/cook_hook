const express = require( 'express' ),
      app = express(),
      mongoose = require( 'mongoose' );
      //,Schema = mongoose.Schema;
var Recipe = require( './models/Recipe.model' );

// set mongoose to use bluebird lib for promises rather than default
mongoose.Promise = require( 'bluebird' );

// provide the public Dir
app.use( express.static( 'public' ) );

var promise = mongoose.connect( 'mongodb://localhost/cookhook', {
    useMongoClient: true
});

promise.then(function( db ) {
    // initial model

    /*
    var recipeSchema = new Schema({
        name: String,
        cook_time: Number,
        instructions: String,
        tags: [String],
        difficulty: Number,
        required_ingredients: [{ name: String, amount: String, _id: false }],
        fancy_ingredients:  [{ name: String, amount: String, _id: false }]
    });

    var Recipe = mongoose.model( 'Recipe', recipeSchema );
    */


    var newRecipe = Recipe({
        name: "Chicken and Bacon Sandwhich",
        cook_time: 3000000,
        difficulty: 4,
        tags: [ "avacado", "white meat", "chicken", "sandwhich", "lunch" ],
        instructions: "Saute' chicken and cook bacon, toast the buns and add all sandwhich elements together.",
        required_ingredients: [
            {
                name: "White meat chicken",
                amount: "2 breasts or 4 tenderloins"
            },
            {
                name: "Pork Bacon",
                amount: "4 strips"
            },
            {
                name: "Lettuce",
                amount: "1 Cup"
            },
            {
                name: "Tomatoe",
                amount: "1"
            },
            {
                name: "Buns",
                amount: "same as sandwhiches"
            }
        ],
        fancy_ingredients : [
            {
                name: "Avacado",
                amount: "1"
            }
        ]
    });

    newRecipe.save(function( err ) {
        if(err) throw err;

        console.log( 'Recipe Added' );
    });
});



app.get('/', function( req, res ) {
    res.send( 'Welcome to Cook-Hook!' );
});

app.get( '/all-recipes', function( req, res ) {

    res.send( 'Getting all recipes!' );
});

app.listen( 3000 );
