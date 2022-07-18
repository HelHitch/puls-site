const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");

// Создаем сервер
gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "src", //указываем дерикторию с index.html
    },
  });
});

//отслеживание изменений стилей
gulp.task("styles", function () {
  return (
    gulp
      .src("src/sass/*.+(sass|scss)") //возвращаем стили из папки ресурсов сасс, с одним из препроцессоров на выбор
      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError)) //функция компрессирования
      //добавляем суффикс со значением мин, чтобы изменения уходили в стайл.мин.цсс
      .pipe(
        rename({
          suffix: ".min",
        })
      )
      .pipe(
        autoprefixer({
          cascade: false,
        })
      )
      .pipe(cleanCSS({ compatibility: "ie8" }))
      //запускаем стрим
      .pipe(browserSync.stream())
  );
});

gulp.task("watch", function () {
  gulp.watch(
    "src/sass/**.+(sass|scss)",
    gulp.parallel("styles"),
    browserSync.stream()
  );
  gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("watch", "styles", "server"));
