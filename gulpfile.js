const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

// console log
function task(cb) {
    console.log('gulp ok');
    cb();
}

exports.a = task


function taskA(cb) {
    console.log('taskA');
    cb();
}

function taskB(cb) {
    console.log('taskB');
    cb();
}

//同時
exports.sync = parallel(taskA , taskB);

//順序
exports.async = series(taskA , taskB);


// 搬家
function copy(){
    return src(['*.html' , '*.js' , '!main.js' , '**/*.scss']).pipe(dest('dist'))
}
//  過去檔案會有index about gulpfile 不會有main.js

exports.m = copy;


//css 壓縮

const cleanCSS = require('gulp-clean-css');

function minify(){
   return src('css/*.css')
     .pipe(cleanCSS())
     .pipe(dest('dist/css'))
}

exports.cssmini = minify;

const uglify = require('gulp-uglify');


function minijs(){
 return  src('main.js')
    .pipe(uglify())
    .pipe(dest('dist/js'))
}
exports.js = minijs;



// sass 編譯
const sass = require('gulp-sass')(require('sass'));

function styleSass() {
    return src('./sass/*.scss')
        .pipe(sass.sync().on('error', sass.logError))//編譯scss
        .pipe(cleanCSS())// minify css
        .pipe(dest('./dist/css'));
}

exports.style = styleSass;















