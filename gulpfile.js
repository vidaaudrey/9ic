'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var git = require('gulp-git');

//var ghPages = require('gulp-gh-pages');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: "./_planning/UIDesign/"
  });

  gulp.watch("./_planning/UIDesign/**/*.scss", ['sass']);
  gulp.watch("./_planning/UIDesign/**/*.*").on('change', watchChangeHandler);
});

function watchChangeHandler() {
  browserSync.reload();
  gulp.src('./_planning/UIDesign/style.css')
    .pipe(gulp.dest('./public/'));
};

gulp.task('sass', function () {
  gulp.src('./_planning/UIDesign/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./_planning/UIDesign/'))
    .pipe(browserSync.stream());
});


//********Deploy related******
gulp.task('copy-to-deploy', function () {
  gulp.src(['public/*.js', 'public/**/*', '!public/index.html'])
    .pipe(gulp.dest('./deploy/'));
});

// src is the file(s) to add (or ./*) 
gulp.task('add', function () {
  return gulp.src('./**/*')
    .pipe(git.add());
});


// Run git commit 
// src are the files to commit (or ./*) 
gulp.task('commit', function () {
  return gulp.src('./**/*')
    .pipe(git.commit('automated deploy commit'));
});

gulp.task('push', function () {
  git.push('origin', 'master', {
    args: " -f"
  }, function (err) {
    if (err) throw err;
  });
});

gulp.task('auto-deploy', ['add', 'commit', 'push'])


//gulp.task('deploy', function () {
//gulp.src(['public/*.js', 'public/**/*', '!public/index.html'])
// .pipe(gulp.dest('./deploy/'));
//.pipe(ghPages());
// because the limit of gh-pages site, we set up a different push dest:
// https://github.com/9ic/9ic.github.io.git
// cd to 'deploy' directory and push the files to github, and you can visit 
// http://9ic.github.io/ to see the live demo
//});

gulp.task('default', ['serve']);
