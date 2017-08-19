var express = require( 'express' ),
    app = express();

app.use( express.static( 'public' ) );

app.get('/', function( req, res ) {
    res.send( 'Welcome to Cook-Hook!' );
});

app.listen( 3000 );
