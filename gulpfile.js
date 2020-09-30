"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var extractMediaQuery = require("gulp-extract-media-query");

sass.compiler = require("node-sass");

gulp.task("sass", function () {
    return gulp
        .src("./src/scss/main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./src/_deliverables/tmpcss"));
    }
);

gulp.task("css", function () {
    return gulp
        .src("./src/_deliverables/tmpcss/main.css")
        .pipe(
            extractMediaQuery({
                match: "(min-width: 600px)",
                postfix: "-desktop",
            })
        )
        .pipe(
            extractMediaQuery({
                match: "(max-width: 360px)",
                postfix: "-xtra-small",
            })
        )
        .pipe(gulp.dest("./src/_deliverables/css/"));
    }
);

gulp.task("watch", function () {
    gulp.watch("./src/scss/**/*.scss", gulp.parallel("sass"));
    gulp.watch("./src/_deliverables/tmpcss/main.css", gulp.parallel("css"));
});

gulp.task("build", gulp.series("sass", "css"));
