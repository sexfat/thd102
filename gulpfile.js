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







