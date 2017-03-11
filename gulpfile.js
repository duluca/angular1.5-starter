'use strict'
var gulp = require('gulp')
var merge = require('merge2')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var argv = require('yargs').argv
var $ = require('gulp-load-plugins')({lazy: true})

gulp.task('build', ['templates', 'lint', 'static'], function () {
    var env = argv.env || argv.e || 'development'

    console.log(' --env ' + env)

    var isProduction = env.toLowerCase().startsWith('p')

    console.log('Build mode: ' + (isProduction === true ? 'Production' : 'Debug'))

    var b = browserify({
        entries: './app/components/app/app.js',
        debug: isProduction === false
      })

    var stream = b.bundle()
      .pipe(source('./app.js'))
      .pipe(buffer())

    if(isProduction) {
        stream.pipe($.uglify())
    }

    return stream.pipe(gulp.dest('./public/js/'))
})

gulp.task('watch', ['build'], function () {
  $.watch('./app/**/*.js', ['build'])
  $.watch('./app/**/*.html', ['build'])
})

gulp.task('static', function () {
  var staticContent = gulp.src('./static/**/*.*')
    .pipe(gulp.dest('./public'))

  var css = gulp.src(['node_modules/angular-material/angular-material.min.css'
        , 'node_modules/mdi/css/materialdesignicons.min.css'
        , 'node_modules/angular-material-data-table/dist/md-data-table.min.css'])
      .pipe(gulp.dest('./public/styles'))

  var mdiContent = gulp.src(['node_modules/mdi/fonts/*'])
      .pipe(gulp.dest('./public/fonts'))

  return merge(staticContent, css, mdiContent);
})

gulp.task('lint', function () {
  return gulp.src(['./app/**/*.js', './gulpfile.js'])
        .pipe($.jshint())
        .pipe($.jshint.reporter('default'))
        .pipe($.jshint.reporter('fail'));
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
  .pipe($.insert.append('\r\n'))
  .pipe($.insert.append('module.exports = "app.templates"'))
  .pipe(gulp.dest('./scratch/'))
})

gulp.task('default', ['build'])
