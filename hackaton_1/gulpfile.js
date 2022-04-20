const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))


function buildStyles() {
    return src('src/sass/style.scss')  //.pipe combines functions from left to right
        .pipe(sass())
        .pipe(dest('src/css'))
}

function watchTask() {
    watch(['src/sass/style.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)