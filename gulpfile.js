var gulp = require('gulp');
var del = require('del');
var {join} = require("path");

const resourceFolder = join(__dirname,'test/resources/**.json');
const distFolder = join(__dirname,'dist')

gulp.task('copy:resource',() =>{
    return gulp.src(resourceFolder).pipe(gulp.dest(join(distFolder,'test/resources/')))
})

gulp.task('clean:dist',  () => {
  return del([
    'dist/'
  ]);
});
