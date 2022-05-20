import browsersync from 'browser-sync'

const buildFolder = './dist'
const srcFolder = './#src'

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/styles/`,
    js: `${buildFolder}/scripts/`,
    img: `${buildFolder}/media/img/`,
    font: `${buildFolder}/media/font/`,
    iconfont: `${buildFolder}/media/iconfont/`,
    icon: `${buildFolder}/media/icon/`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    scss: [`${srcFolder}/scss/global.scss`, `${srcFolder}/scss/pages/*.scss`],
    js: `${srcFolder}/scripts/**/*.js`,
    img: `${srcFolder}/media/img/**/*.*`,
    font: `${srcFolder}/media/font/**/*.*`,
    iconfont: `${srcFolder}/media/iconfont/**/*.*`,
    icon: `${srcFolder}/media/icon/**/*.*`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/scripts/**/*.js`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
}

export const plugins = {
  browsersync: browsersync,
}
