const {src,dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
sass.compiler = require('dart-sass');
function css() {
    return src("./sass/*.scss")
           .pipe(sass())
           .pipe(cleanCSS())
           .pipe(rename('main.min.css'))
           .pipe(dest("./css")); 
}
function js(){
    return src(["./js/*.js"])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest('./js'))
}
exports.css = css;
exports.js = js;