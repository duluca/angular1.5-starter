/**
 * Created by doguhanuluca on 4/2/15.
 */
'use strict'

var browserify = require('gulp-browserify')
var gulp = require('gulp')
var html2js = require('gulp-html2js')
var concat = require('gulp-concat')
var standard = require('gulp-standard')

gulp.task('build', ['html', 'lint'], function () {
  return gulp.src('app/app.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: !process.env.production || true
    }))
    .pipe(gulp.dest('./public/js'))
})

gulp.task('watch', ['build'], function () {
  gulp.watch('./app/**/*.js', ['default'])
  gulp.watch('./app/**/*.html', ['default'])
})

gulp.task('html', function () {
  return gulp.src('app/**/*.html')
    .pipe(html2js({
      outputModuleName: 'templates',
      base: 'app',
      rename: function (name) { return './' + name },
      useStrict: true
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('./scratch'))
})

gulp.task('lint', function () {
  return gulp.src(['./app/**/*.js', './gulpfile.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true
    }))
})

gulp.task('default', ['build'])
