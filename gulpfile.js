const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

// console log
function task(cb){
   console.log('gulp ok');
   cb();
}

exports.taskconsloe = task


