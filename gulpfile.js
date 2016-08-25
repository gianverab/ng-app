//Include Dependencies
var gulp = require('gulp'),
	//For CSS
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	concatcss = require('gulp-concat-css'),
	minifycss = require('gulp-minify-css'),
	//For JS
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	//For IMG
	imagemin = require('gulp-imagemin'),
	//For all files (if needed)
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'),
	//Notify & Live reload
	notify = require('gulp-notify'),
	browsersync = require('browser-sync').create(),
	reload = browsersync.reload;

//Include Paths
var JS = './source/js/*.js',
	CSS = './source/sass/*.scss',
	SRC = './source/*.html',
	IMG = './source/img/*',
	DEST = './public'; 

//Compile Sass, autoprefix, concat & minify
gulp.task('styles', function(){
	gulp.src(CSS)
		.pipe(plumber())
		.pipe(sass({style: 'expanded'}))
		.pipe(autoprefixer('last 3 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(concatcss('all.css'))
		.pipe(rename('app.min.css'))
		.pipe(minifycss())
		.pipe(gulp.dest(DEST))
		.pipe(notify({message: 'CSS compiled OK!'}));
});

//Compile scripts, concat & uglify
gulp.task('scripts', function(){
	gulp.src(JS)
		.pipe(plumber())
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(rename('app.min.js'))
	    .pipe(gulp.dest(DEST))
		.pipe(notify({message: 'Scripts compiled OK!'}));
});

//Compress images
gulp.task('images', function(){
	gulp.src(IMG)
		.pipe(plumber())
		.pipe(imagemin({optimizationLevel: 7}))
	    .pipe(gulp.dest('./public/assets'))
		.pipe(notify({message: 'Images compressed OK!'}));
});

//HTML task
gulp.task('html', function(){
	gulp.src(SRC)
		.pipe(plumber())
	    .pipe(gulp.dest(DEST))
		.pipe(notify({message: 'HTML compiled OK!'}));
});

//Server set up and watch
gulp.task('serve', ['html', 'styles', 'scripts', 'images'], function (){
	browsersync.init({
		server: DEST
	});
	gulp.watch(SRC, ['html']);
	gulp.watch(SRC).on('change', reload);
	gulp.watch(CSS, ['styles']);
	gulp.watch(CSS).on('change', reload);
	gulp.watch(JS, ['scripts']);
	gulp.watch(JS).on('change', reload);
	gulp.watch(IMG, ['images']);
	gulp.watch(IMG).on('change', reload);
})
//Main watch task
gulp.task('watch', function (){	
	gulp.watch(SRC, ['html']);
	gulp.watch(CSS, ['styles']);
	gulp.watch(JS, ['scripts']);
	gulp.watch(IMG, ['images']);
});

//Default gulp command
gulp.task('default', ['styles', 'images', 'html', 'scripts', 'watch', 'serve']);