const aliasObj = require('./vue.alias');

// const path = require("path");
// const fs = require('fs');

// eslint-disable-next-line no-unused-vars
function relayRequestHeaders(proxyReq, req) {}
// eslint-disable-next-line no-unused-vars
function relayResponseHeaders(proxyRes, req, res) {}
// eslint-disable-next-line no-unused-vars
function bypassFunction(req, res, proxyOptions) {}

let testDomainProtocol  = process.env.DOMAIN_PROTOCOL;
let testDomainName      = process.env.DOMAIN_NAME;
let testDomainPort      = process.env.DOMAIN_PORT;
let testDomainFull      = testDomainProtocol + '://' + testDomainName + ':' + testDomainPort;

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: process.env.NODE_ENV !== 'production',

  devServer: {
    // TODO:
    //   host: testDomainName, https: true

    // proxyTable: {},
    // env: require('./dev.env'),
    port: testDomainPort,
    // assetsSubDirectory: 'static',
    // assetsPublicPath: '/',
    // cssSourceMap: false
    public: `${testDomainName}:${testDomainPort}`,
    proxy: {
      [`${testDomainName}:${testDomainPort}`]: {
        target: testDomainFull,
        secure: false,
        changeOrigin: true,
        bypass: bypassFunction,
        onProxyReq: relayRequestHeaders,
        onProxyRes: relayResponseHeaders,
        // router: routedRoutes
      },
    },
    headers: { 'Access-Control-Allow-Origin': '*' }, // is not work???
    // https: true,
    // https: {
    //   key : fs.readFileSync('./certificate/test00.key'),
    //   cert: fs.readFileSync('./certificate/test00.csr'),
    // },
  },

  // TODO: рендерим все в папку
  // outputDir: path.resolve(__dirname, "./web"),
  assetsDir: './resource/',

  filenameHashing: true,

  chainWebpack: (config) => {
    for (const aliasName in aliasObj) {
      config.resolve.alias.set(aliasName, aliasObj[aliasName]);
    }

    config.module
      .rule('vue')
      .use('vue-svg-inline-loader')
      .loader('vue-svg-inline-loader')
      .options({ /* ... */ });
  },

  // TODO
  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'scss',
  //     patterns: [
  //       // Подключать только переменные scss, иначе стили будут дублироваться!!!
  //       path.resolve(__dirname, './resource/style/variable.scss'),
  //       path.resolve(__dirname, './resource/style/mixins.scss'),
  //     ]
  //   }
  // },

};
