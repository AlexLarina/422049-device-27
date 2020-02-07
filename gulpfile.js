const gulp = require("gulp");
var sass = require("gulp-sass");
const browsersync = require("browser-sync").create();

function style() {
  return gulp
      .src("./scss/style.scss")
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(gulp.dest("css/"))
      .pipe(browsersync.stream());
}

function watch() {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./*.html").on('change', browsersync.reload);
  gulp.watch("./js/**/*.js").on('change', browsersync.reload);
}

exports.style = style;
exports.watch = watch;
