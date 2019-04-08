'use strict';

/* --------------------------------------------------------------- */
/*  Plugins                                                        */
/* --------------------------------------------------------------- */
var gulp            = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins         = gulpLoadPlugins(),
    del             = require('del'),
    cmq             = require('gulp-group-css-media-queries'),
    minifyCSS       = require('gulp-clean-css'),
    // reporter        = require('postcss-reporter'),
    // postcss         = require('gulp-postcss'),
    // postcssScss     = require('postcss-scss'),
    // stylelint       = require('stylelint'),
    runSequence     = require('run-sequence');

/* --------------------------------------------------------------- */
/*  Paths                                                          */
/* --------------------------------------------------------------- */
var basePaths = {
    src: 'source/',
    dest: 'assets/'
};

var paths = {
    css: {
        src: basePaths.src + 'scss/',
        dest: basePaths.dest + 'css/'
    },
    js: {
        src: basePaths.src + 'js/',
        dest: basePaths.dest + 'js/'
    },
    img: {
        src: basePaths.src + 'img/',
        dest: basePaths.dest + 'img/'
    }
};

/* --------------------------------------------------------------- */
/*  Tasks                                                          */
/* --------------------------------------------------------------- */
gulp.task('clean', function(){
    return del(basePaths.dest);
});

gulp.task('img', function() {
    gulp.src(paths.img.src + '**')
        .pipe(plugins.imagemin())
        .pipe(gulp.dest(paths.img.dest));
});

gulp.task('csslint', function() {
    console.log('============================================================================== CSS');
    gulp.src(paths.css.src + '*.scss')
    .pipe(plugins.plumber())
    .pipe(plugins.stylelint({
        reporters: [{
            formatter: 'string',
            console: true
        }]
    }));
});

gulp.task('css', ['csslint'], function() {
    return gulp
        .src(paths.css.src + '*.scss')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.plumber())
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        // .pipe(cmq())
        .pipe(plugins.rename('style.css'))
        .pipe(plugins.sourcemaps.write('../maps'))
        .pipe(gulp.dest(paths.css.dest));
});

gulp.task('jshint', function() {
    console.log('============================================================================== JS');
    gulp
        .src([
                // paths.js.src + '**',
                // '!' + paths.js.src + 'vendor/**'
                paths.js.src + 'main.js'
            ])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('js', ['jshint'], function() {
    return gulp
        .src([
                paths.js.src + 'vendor/jQuery.js',
                paths.js.src + 'main.js'
            ])
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('script.js'))
        .pipe(plugins.sourcemaps.write('../maps'))
        .pipe(gulp.dest(paths.js.dest));
});

gulp.task('watch', function() {
    gulp.watch(paths.js.src + 'main.js', ['js']);
    gulp.watch(paths.css.src + '**', ['css']);
    gulp.watch(paths.img.src + '**', ['img']);
});


gulp.task('dev', function() {
    runSequence('clean', ['img', 'css', 'js']);
});

gulp.task('default', [
    'dev',
    'watch'
]);
