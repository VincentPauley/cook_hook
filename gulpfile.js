/* File: gulpfile.js */
"use strict";

// grab the gulp packages
const gulp = require( 'gulp' ),
      gutil = require( 'gulp-util' ),
      concat = require( 'gulp-concat' ),
      browserify = require( 'browserify' );

const config = {
    paths : {
        html : [
            './source/index.html'
        ],
        css : [
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './source/custom.css' // TODO: <-- this should be in a differnt location because its
        ],
        vendor_js : [
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/bootstrap/dist/js/bootstrap.min.js',
            './node_modules/handlebars/dist/handlebars.min.js'
        ],
        custom_js : [
            './source/app.js',
            './source/common.js'
        ],
        dist : './public'
    }
};

gulp.task( 'default', function() {
    return gutil.log( 'Gulp is running!' );
});
// build
gulp.task( 'build',
    [ 'html',
      'vendor-js',
      'custom-js',
      'css'
    ], () => {
        return gutil.log( '- build complete -' );
});

gulp.task( 'html', function() {
    return gulp.src( config.paths.html )
           .pipe( concat( 'index.html' ) )
           .pipe( gulp.dest( config.paths.dist ) );
});

gulp.task( 'vendor-js', function() {
    return gulp.src( config.paths.vendor_js )
           .pipe( concat( 'bundle.js' ) )
           .pipe( gulp.dest( config.paths.dist + '/vendor/scripts' ) );
});

gulp.task( 'custom-js', function() {
    return gulp.src( config.paths.custom_js )
           .pipe( concat( 'bundle.js' ) )
           .pipe( gulp.dest( config.paths.dist + '/scripts' ) );
});

gulp.task( 'css' , function() {
    return gulp.src( config.paths.css )
          .pipe( concat( 'bundle.css' ) )
          .pipe( gulp.dest( config.paths.dist + '/vendor/css' ) );
});
