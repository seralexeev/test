var gulp = require('gulp'),
    concat = require('gulp-concat'),
    autoprefix = require('gulp-autoprefixer'),
    stylus = require('gulp-stylus'),
    del = require('del'),
    runSequence = require('run-sequence'),
    replace = require('gulp-replace-task'),
    md5 = require('MD5'),
    templateCache = require('gulp-angular-templatecache'),
    iife = require('gulp-iife'),
    merge = require('merge2'),
    browserSync = require('browser-sync').create(),
    fs = require('fs'),
    browsers = 'last 2 version',
    empty = require("gulp-empty"),
    config = require('./buildConfig.json'),
    proxyMiddleware = require('http-proxy-middleware');


var debug = true;

gulp.task('js-vendor', function () {
    return gulp.src(config.js.vendor)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('js-app', function () {
    return merge(
        gulp.src(config.js.app),
        gulp.src('src/app/**/*.html')
            .pipe(templateCache({module: "app"}))
            .pipe(iife())
    )
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('css-vendor', function () {
    return gulp.src(config.css.vendor)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('css-app', function () {
    return gulp.src(config.css.app)
        .pipe(stylus())
        .pipe(autoprefix(browsers))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('fonts', function () {
    return gulp.src(config.fonts)
        .pipe(gulp.dest('build/fonts'));
});

gulp.task('favicon', function () {
    return gulp.src('src/favicon.ico')
        .pipe(gulp.dest('build'));
});

gulp.task('images', function () {
    return gulp.src('src/**/*.png')
        .pipe(gulp.dest('build/img'));
});

gulp.task('index', function () {
    var rev = md5(new Date());

    gulp.src('src/index.html')
        .pipe(replace({
            patterns: [
                {match: 'rev', replacement: rev}
            ]
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('build-clean', function (cb) {
    return del(['build'], {force: true}, cb);
});

gulp.task('build', function (cb) {
    return runSequence(
        'build-clean',
        [
            'js-vendor',
            'js-app',
            'css-vendor',
            'css-app',
            'fonts',
            'images',
            'favicon',
            'index'
        ],
        cb
    );
});

gulp.task('default', ['build'], function () {
    runSequence(
        'sync',
        function () {
            gulp.watch('./src/**/*.html', ['js-app']);
            gulp.watch('./src/**/*.js', ['js-app']);
            gulp.watch('./src/**/*.styl', ['css-app']);
        }
    );
});

var proxy = proxyMiddleware('/api', { target: 'http://localhost:3000' });


gulp.task('sync', function () {
    browserSync.init({
        server: {
            baseDir: './build/',
            port: 3000,
            middleware: [proxy]
        },
        files: ["./build/**/*.*"]
    });
});