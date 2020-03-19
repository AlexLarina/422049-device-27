const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");

function style() {
  return gulp
      .src("./scss/style.scss")
      .pipe(sass())
      .pipe(postcss([
        autoprefixer()
      ]))
      .pipe(csso())
      .pipe(rename("style.min.css"))
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
