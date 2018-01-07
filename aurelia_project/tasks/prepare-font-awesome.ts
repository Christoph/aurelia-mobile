import * as gulp from 'gulp';
import * as  merge from 'merge-stream';
import * as  changedInPlace from 'gulp-changed-in-place';
import * as  project from '../aurelia.json';

export default function prepareFontAwesome() {

  const taskCss = gulp.src("./node_modules/@fortawesome/fontawesome-pro-webfonts/css/fa-light.css")
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest('./css'));

  const taskFonts = gulp.src("./node_modules/@fortawesome/fontawesome-pro-webfonts/webfonts/fa-light*")
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest('./fonts'));

  return merge(taskCss, taskFonts);
}
