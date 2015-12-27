'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./planning/UIDesign/"
    });

    gulp.watch("./planning/UIDesign/**/*.scss", ['sass']);
    gulp.watch("./planning/UIDesign/**/*.html").on('change', watchChangeHandler);
});

function watchChangeHandler(){
    browserSync.reload();
    gulp.src('./planning/UIDesign/style.css')
    .pipe(gulp.dest('./public/'));
};

gulp.task('sass', function () {
  gulp.src('./planning/UIDesign/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./planning/UIDesign/'))
    .pipe(browserSync.stream());
});
 
gulp.task('default', ['serve']);