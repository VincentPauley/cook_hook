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
        ingredients: [{ name: String, amount: String }]
    });

    var Recipe = mongoose.model( 'Recipe', recipeSchema );

    var newRecipe = Recipe({
        name: "seared steak",
        cook_time: 7000,
        difficulty: 5,
        tags: [ "steak", "red meat", "garlic", "filet" ],
        instructions: "sear the steaks on both sides in butter and minced garlic, finish in the oven and garnish with parseley",
        ingredients: [
            {
                name: "steak",
                amount: "2 fillets"
            },
            {
                name: "butter",
                amount: "2 tbsp"
            },
            {
                name: "garlic",
                amount: "3 cloves"
            },
            {
                name: "parsley",
                amount: "small bunch"
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
