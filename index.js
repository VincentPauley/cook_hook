const express = require( 'express' ),
      app = express(),
      mongoose = require( 'mongoose' ),
      Schema = mongoose.Schema;

// set mongoose to use bluebird lib for promises rather than default
mongoose.Promise = require( 'bluebird' );

// provide the public Dir
app.use( express.static( 'public' ) );

var promise = mongoose.connect( 'mongodb://localhost/cookhook', {
    useMongoClient: true
});

promise.then(function( db ) {
    // initial model

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

    var newRecipe = Recipe({
        name: "Macaroni and Cheese",
        cook_time: 7000,
        difficulty: 5,
        tags: [ "cheese", "easy", "mac", "macaroni", "wisconsin" ],
        instructions: "boil the noodles and drain, stir in butter, milk, and cheese.  Top with a little extra cheese after plating. If you went fancy add you saute'd breadcrumbs at this point.",
        ingredients: [
            {
                name: "elbow noodles",
                amount: "3 cups"
            },
            {
                name: "butter",
                amount: "2 tbsp"
            },
            {
                name: "garlic",
                amount: "1 clove"
            },
            {
                name: "milk",
                amount: "splash"
            }
        ],
        fancy_ingredients : [
            {
                name: "bread crumbs",
                amount: "1/4 cup"
            },
            {
                name: "parmasean cheese",
                amount: "1/4 cup"
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
