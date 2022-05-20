import del from 'del'
import fileinclude from 'gulp-file-include'
import versionNumber from 'gulp-version-number'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import cleanCss from 'gulp-clean-css'
import autoprefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import webpack from 'webpack-stream'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'

export const clearBuildFolder = () => {
  return del(app.path.clean)
}

export const htmlHandler = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(fileinclude())
    .pipe(
      versionNumber({
        value: '%DT%',
        append: {
          key: '_v',
          cover: 0,
          to: ['css', 'js'],
        },
        output: {
          file: 'gulp/version.json',
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}

const sass = gulpSass(dartSass)

export const scssHandler = () => {
  return app.gulp
    .src(app.path.src.scss)
    .pipe(
      sass({
        outputStyle: 'expanded',
      })
    )
    .pipe(groupCssMediaQueries())
    .pipe(
      autoprefixer({
        grid: true,
        overrideBrowserslist: ['last 3 versions'],
        cascade: true,
      })
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: '.min.css',
      })
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}

export const runLocalServer = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: `${app.path.buildFolder}`,
    },
    notify: false,
    port: 3000,
  })
}

export const jsHandler = () => {
  return (
    app.gulp
      .src(app.path.src.js)
      // .pipe(
      //   webpack({
      //     mode: 'development',
      //     optimization: {
      //       minimize: true,
      //     },
      //     output: {
      //       filename: 'app.min.js',
      //     },
      //   })
      // )
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(
        babel({
          presets: ['@babel/env'],
        })
      )
      .pipe(uglify())
      .pipe(
        rename({
          extname: '.min.js',
        })
      )
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browsersync.stream())
  )
}

export const imgHandler = () => {
  return app.gulp
    .src(app.path.src.img)
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.plugins.browsersync.stream())
}

export const fontHandler = () => {
  return app.gulp
    .src(app.path.src.font)
    .pipe(app.gulp.dest(app.path.build.font))
    .pipe(app.plugins.browsersync.stream())
}

export const iconfontHandler = () => {
  return app.gulp
    .src(app.path.src.iconfont)
    .pipe(app.gulp.dest(app.path.build.iconfont))
    .pipe(app.plugins.browsersync.stream())
}

export const iconHandler = () => {
  return app.gulp
    .src(app.path.src.icon)
    .pipe(app.gulp.dest(app.path.build.icon))
    .pipe(app.plugins.browsersync.stream())
}
