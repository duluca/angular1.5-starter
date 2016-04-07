/**
 * Created by doguhanuluca on 4/2/15.
 */
'use strict'
var gulp = require('gulp')
var $ = require('gulp-load-plugins')({lazy: true})

gulp.task('build', ['templates', 'lint', 'static'], function () {
  return gulp.src('app/components/app/app.js')
    .pipe($.browserify({
      insertGlobals: true,
      debug: !process.env.production || true
    }))
    .pipe(gulp.dest('./public/js'))
})

gulp.task('watch', ['build'], function () {
  $.watch('./app/**/*.js', ['default'])
  $.watch('./app/home/home.html', ['default'])
})

gulp.task('static', function () {
  return gulp.src('./static/**/*.*')
    .pipe(gulp.dest('./public'))
})

gulp.task('html', function () {
  return gulp.src('app/**/*.html')
    .pipe($.html2js({
      outputModuleName: 'templates',
      base: 'app',
      rename: function (name) { return name },
      useStrict: true
    }))
    .pipe($.concat('templates.js'))
    .pipe(gulp.dest('./scratch'))
})

gulp.task('lint', function () {
  return gulp.src(['./app/**/*.js', './gulpfile.js'])
    .pipe($.standard())
    .pipe($.standard.reporter('default', {
      breakOnError: true
    }))
})

gulp.task('templates', function () {
  return gulp.src([
    'app/**/**.html'
  ])
  .pipe($.ngTemplates({
    filename: 'templates.js',
    module: 'app.templates',
    path: function (path, base) {
      return path.replace(base, '')
    }
  }))
  .pipe(gulp.dest('./scratch/'))
})

gulp.task('default', ['build'])
