const {series, src, dest, watch} = require('gulp');
var sass = require('gulp-sass')(require('sass'));


const concat = require('gulp-concat');

function css(){
    return src('./src/css/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'));
}
function javascript(){
    return src("./src/js/**/*.js")
    .pipe(concat('bundle.js'))
    .pipe(dest('./build/js'))
}

function watchArchivos () {
    watch ('./src/css/**/*.scss', css);
    watch ('./src/js/**/*.js', javascript);
}

exports.default = series(css,javascript, watchArchivos);