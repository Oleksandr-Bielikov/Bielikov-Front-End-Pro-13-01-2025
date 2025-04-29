const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');

gulp.task("js", () => {
    return gulp.src('src/*.js')
        .pipe(concat('all.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist'));
});

gulp.task("css", () => {
    return gulp.src('src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});

gulp.task("default", gulp.series("js", "css"));