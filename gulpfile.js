/**
 * Created by doguhanuluca on 4/2/15.
 */
'use strict'

var browserify = require('gulp-browserify')
var gulp = require('gulp')
var html2js = require('gulp-html2js')
var concat = require('gulp-concat')
var standard = require('gulp-standard')
var sourcemaps = require('gulp-sourcemaps')
var ngTemplates = require('gulp-ng-templates')

gulp.task('build', ['templates', 'lint', 'static', 'deps'], function () {
  return gulp.src('app/components/app/app.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: !process.env.production || true
    }))
    .pipe(gulp.dest('./public/js'))
})

gulp.task('watch', ['build'], function () {
  gulp.watch('./app/**/*.js', ['default'])
  gulp.watch('./app/home/home.html', ['default'])
})

gulp.task('static', function () {
  return gulp.src('./static/**/*.*')
    .pipe(gulp.dest('./public'))
})

gulp.task('deps', function () {
  return gulp.src([
    'node_modules/ngcomponentrouter/angular_1_router.js'
  ])
  .pipe(sourcemaps.init())
  .pipe(concat('dependencies.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public/js/'))
})

gulp.task('html', function () {
  return gulp.src('app/**/*.html')
    .pipe(html2js({
      outputModuleName: 'templates',
      base: 'app',
      rename: function (name) { return name },
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

gulp.task('templates', function () {
  return gulp.src([
    'app/**/**.html'
  ])
  .pipe(ngTemplates({
    filename: 'templates.js',
    module: 'app.templates',
    path: function (path, base) {
      return path.replace(base, '')
    }
  }))
  .pipe(gulp.dest('./scratch/'))
})

gulp.task('default', ['build'])
