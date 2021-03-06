const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const minify = require('gulp-minify');

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

function minjs() {
  return gulp
    .src("./js/main.js")
    .pipe(minify())
    .pipe(gulp.dest("js/"))
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
  gulp.watch("./js/**/*.js").on('change', minjs);
}

exports.style = style;
exports.watch = watch;
exports.minjs = minjs;
