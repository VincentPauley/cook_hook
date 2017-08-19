/* File: gulpfile.js */
"use strict";

// grab the gulp packages
const gulp = require( 'gulp' ),
      gutil = require( 'gulp-util' ),
      concat = require( 'gulp-concat' ),
      browserify = require( 'browserify' );

const config = {
    paths : {
        css : [
            './node_modules/bootstrap/dist/css/bootstrap.min.css'
        ],
        dist : './public/vendor'
    }
};


gulp.task( 'default', function() {
    return gutil.log( 'Gulp is running!' );
});

gulp.task( 'css' , function() {
  return gulp.src( config.paths.css )
         .pipe( concat( 'bundle.css' ) )
         .pipe( gulp.dest( config.paths.dist + '/css' ) )
});
