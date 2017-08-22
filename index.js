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
    });

    var User = mongoose.model( 'User', userSchema );

    var newUser = User({
        name: 'Vincent Pauley',
        username: 'majorNoodle',
        password: 'pass',
        admin: true
    });

    newUser.save(function(err) {
        if(err) throw err;

        console.log( 'User Created' );
    });

    /* attempt at one read
    Recipe.find({}, function( err, recipe ) {
        if( err ) throw err;

        console.log( recipe );
    });*/
});



app.get('/', function( req, res ) {
    res.send( 'Welcome to Cook-Hook!' );
});

app.get( '/all-recipes', function( req, res ) {

    res.send( 'Getting all recipes!' );
});

app.listen( 3000 );
