/**
 * Created by doguhanuluca on 4/2/15.
 */
'use strict';

var browserify = require('gulp-browserify');
var gulp = require('gulp');

gulp.task('app-scripts', function () {
    return gulp.src('app/app.js')
        .pipe(browserify({
            insertGlobals : true,
            debug : !process.env.production || true
        }))
        .pipe(gulp.dest('./public/js'))
});

gulp.task('watch', function () {
    gulp.watch('./app/**/*.js', ['default']);
});


gulp.task('default', ['app-scripts']);
