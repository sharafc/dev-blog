"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const extractMediaQuery = require("gulp-extract-media-query");

sass.compiler = require("node-sass");

/* Compile the main.scss and push it into the tmp folder to trigger the post processing */
gulp.task("sass", function () {
    return gulp
        .src("./src/scss/main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./src/_deliverables/tmpcss"));
});

/* Process the generated CSS and extract/summarize the media queries into their own files
and push it to deliverables where it is pushed through by 11ty */
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
