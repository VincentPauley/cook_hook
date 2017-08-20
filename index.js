var express = require( 'express' ),
    app = express();

app.use( express.static( 'public' ) );

app.get('/', function( req, res ) {
    res.send( 'Welcome to Cook-Hook!' );
});

app.get( '/all-recipes', function( req, res ) {

    res.send( 'Getting all recipes!' );
});

app.listen( 3000 );
