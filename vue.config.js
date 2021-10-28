const path = require("path");
const aliasObj = require('./vue.alias');
const devServer = require('./vue.config.devserver');

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',

  devServer: devServer,

  // рендерим все в папку
  outputDir: path.resolve(__dirname, "./web"),
  assetsDir: './resource/',

  filenameHashing: true,
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       additionalData: `@import '@style/_variable.scss'`,
  //     },
  //     scss: {
  //       additionalData: `@import '@style/_variable.scss';`,
  //     },
  //   },
  //   // sourceMap: true
  // },
  chainWebpack: (config) => {
    // добавляем свои сокращения
    for (const aliasName in aliasObj) {
      config.resolve.alias.set(aliasName, aliasObj[aliasName]);
    }

    config.module
      .rule('vue')
      .use('vue-svg-inline-loader')
      .loader('vue-svg-inline-loader')
      .options({ /* ... */ });
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        // Подключать только переменные, иначе стили будут дублироваться!!!
        path.resolve(__dirname, './resource/style/base/variable.scss'),
        path.resolve(__dirname, './resource/style/base/_mixin.scss'),
      ]
    }
  },

};
