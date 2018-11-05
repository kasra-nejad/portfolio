const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");

// Compile Sass & Inject Into Browser
gulp.task("sass", function() {
  return gulp
    .src(["sass/*.scss"])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// Watch Sass & Serve
gulp.task("serve", ["sass"], function() {
  browserSync.init({
    server: "./src"
  });

  gulp.watch(["./sass/*.scss"], ["sass"]);
  gulp.watch("src/*.html").on("change", browserSync.reload);
  gulp.watch("src/*.js").on("change", browserSync.reload);
});

//Image task
gulp.task("image", function() {
  gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("src/images"));
});

// Default Task
gulp.task("default", ["serve"]);
