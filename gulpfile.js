const gulp = require('gulp');
const plumber = require('gulp-plumber');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const util = require('gulp-util');

gulp.task('sass', function () {
    gulp.src('sass/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer, cssnano]))
        .pipe(sourcemaps.write('.'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(''))
    // .pipe(livereload())
});

gulp.task('js', function () {
    gulp.src([
        'dev/**/*.js'
    ])
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('fail'))
        .pipe(sourcemaps.init())
        .pipe(concat('theme.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(plumber.stop())
        .pipe(gulp.dest('js'))
    // .pipe(livereload())
});

gulp.task('life-watch', function () {
    livereload.listen();
    gulp.watch('sass/**/*.scss', ['sass']).on('change', livereload.changed);
    gulp.watch('dev/**/*.js', ['js']).on('change', livereload.changed);
    gulp.watch('**/*.php').on('change', livereload.changed);
});

gulp.task('default', ['sass', 'js']);
gulp.task('watch', ['sass', 'js', 'life-watch']);
