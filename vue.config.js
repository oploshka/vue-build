const path = require('path');
const aliasObj = require('./vue.alias');
const devServer = require('./vue.config.devserver');

process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
  pages: {
    index: {
      entry: path.resolve(__dirname, 'src/core/main.js')
    }
  },
  
  transpileDependencies: true,
  // lintOnSave: process.env.NODE_ENV !== 'production',
  lintOnSave: false,

  devServer: devServer,

  // рендерим все в папку
  outputDir: path.resolve(__dirname, './build'),
  assetsDir: './resource/',

  filenameHashing: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@style/base/var/variable.scss"',
      },
      scss: {
        additionalData: '@import "@style/base/var/variable.scss";',
      },
    },
    // sourceMap: true
  },
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
  
    // console.log(config.plugin('copy'), '======');
    //
    // config.plugin('copy').tap((entries) => {
    //   entries[0].patterns.push({
    //     from: path.resolve(__dirname, 'resource/asset'),
    //     to: path.resolve(__dirname, 'web/'),
    //     toType: 'dir',
    //     noErrorOnMissing: true,
    //     globOptions: { ignore: ['.DS_Store'] },
    //   })
    //
    //   return entries
    // })
    
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './resource/style/base/var/variable.scss'),
        path.resolve(__dirname, './resource/style/base/var/mixins.scss')
      ]
    }
  },

};
