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
const sourcemaps = require('gulp-sourcemaps');

function styleSass() {
    return src('./sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))//編譯scss
        // .pipe(cleanCSS())// minify css
        .pipe(sourcemaps.write())
        .pipe(dest('./dist/css'));
}

exports.style = styleSass;


//html template
const fileinclude = require('gulp-file-include');

function includeHTML() {
    return src('*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./dist'))
}


exports.html = includeHTML;

function watchfile(){
   watch(['*.html' , 'layout/*.html'], includeHTML);
   watch(['sass/*.scss' , 'sass/**/*.scss'], styleSass);
//    watch('js/*.js' , minijs);
}
exports.w = watchfile;



const browserSync = require('browser-sync');
const reload = browserSync.reload;


function browser(done) {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        },
        port: 3000
    });
    watch(['*.html' , 'layout/*.html'], includeHTML).on('change' , reload)
    watch(['sass/*.scss' , 'sass/**/*.scss'], styleSass).on('change' , reload)
    done();
}

exports.default = browser;























