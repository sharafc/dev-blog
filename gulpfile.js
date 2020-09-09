'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/_deliverables/css'));
});

gulp.task("watch", function() {
    gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass'));
});

gulp.task('build', gulp.parallel(
    'sass'
));
