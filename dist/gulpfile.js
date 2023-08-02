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
    return src(['*.html' , '*.js' , '!main.js' , './**/*.scss']).pipe(dest('dist'))
}
//  過去檔案會有index about gulpfile 不會有main.js

exports.m = copy;










