import gulp from 'gulp'

import { path, plugins } from './gulp/config.js'

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
}

import {
  clearBuildFolder,
  htmlHandler,
  jsHandler,
  runLocalServer,
  scssHandler,
  imgHandler,
  fontHandler,
  iconfontHandler,
  iconHandler,
} from './gulp/task.js'

const runWatcher = () => {
  gulp.watch(path.watch.html, htmlHandler)
  gulp.watch(path.watch.scss, scssHandler)
  gulp.watch(path.watch.js, jsHandler)
  gulp.watch(path.src.img, imgHandler)
  gulp.watch(path.src.font, fontHandler)
  gulp.watch(path.src.iconfont, iconfontHandler)
  gulp.watch(path.src.icon, iconHandler)
}

const mainTasks = gulp.parallel(
  htmlHandler,
  scssHandler,
  jsHandler,
  imgHandler,
  fontHandler,
  iconfontHandler,
  iconHandler
)

const dev = gulp.series(
  clearBuildFolder,
  mainTasks,
  gulp.parallel(runWatcher, runLocalServer)
)

gulp.task('default', dev)
