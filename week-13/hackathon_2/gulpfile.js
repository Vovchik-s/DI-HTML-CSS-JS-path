const { src, dest, wath, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('public/scss/index.scss')
        .pipe(sass())
        .pipe(dest('public/css'));
}

function watchTask() {
    return wath(['public/scss/index.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);