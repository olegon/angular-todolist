var gulp = require('gulp');

var htmlmin = require('gulp-htmlmin');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');

gulp.task('html', function() {
    return gulp.src('./src/**/*.html')
        .pipe(htmlmin({
            removeComments: true,
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            conservativeCollapse: true
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('css', function() {
    return gulp.src('./src/css/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(postcss([require('autoprefixer'), require('cssnano')]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('javascript', function() {
    gulp.src('./src/js/app.js')
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(gulp.dest('./build/js'))
});

gulp.task('build', ['html', 'css', 'javascript']);

gulp.task('watch', function() {
    return gulp.watch('src/**/*', ['build']);
});

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});

gulp.task('default', ['build']);
