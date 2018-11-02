let gulp = require("gulp");
let rsync = require("gulp-rsync");

gulp.task("deploy", function() {
  return gulp.src("./dist/**").pipe(
    rsync({
      root: "dist/",
      hostname: "ali@buy-vilis.ru",
      port: 11666,
      destination: "/var/www/buy-vilis.ru/"
    })
  );
});
