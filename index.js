var express = require( 'express' ),
    app = express();

app.get('/', function( req, res ) {
    res.send( 'Welcome to Cook-Hook!' );
});

app.listen( 3000 );
