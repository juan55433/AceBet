const {src,dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
function css() {
    return src("./sass/*.scss")
           .pipe(sass())
           .pipe(cleanCSS())
           .pipe(rename('main.min.css'))
           .pipe(dest("./css")); 
}
exports.css = css;
exports.default = ()=>{};