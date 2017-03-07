/**
 * Created by doguhanuluca on 4/2/15.
 */
'use strict'
var gulp = require('gulp')
var merge = require('merge2')
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
  .pipe(gulp.dest('./scratch/'))
})

gulp.task('default', ['build'])
