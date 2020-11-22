const path = require("path");
// const fs = require('fs');

// eslint-disable-next-line no-unused-vars
function relayRequestHeaders(proxyReq, req) {}
// eslint-disable-next-line no-unused-vars
function relayResponseHeaders(proxyRes, req, res) {}
// eslint-disable-next-line no-unused-vars
function bypassFunction(req, res, proxyOptions) {}

let testDomainProtocol  = 'http';
let testDomainName      = 'domain.t.com';
let testDomainPort      = '8131';
let testDomainFull      = testDomainProtocol + '://' + testDomainName + ':' + testDomainPort;

module.exports = {

  devServer: {
    public : testDomainName + ':' + testDomainPort,
    proxy: {
      [testDomainName + ':' + testDomainPort]: {
        target: testDomainFull,
        secure: false,
        changeOrigin: true,
        bypass: bypassFunction,
        onProxyReq: relayRequestHeaders,
        onProxyRes: relayResponseHeaders,
        // router: routedRoutes
      },
    },
    headers: { "Access-Control-Allow-Origin": "*" }, // is not work???
    // https: true,
    // https: {
    //   key : fs.readFileSync('./certificate/test00.key'),
    //   cert: fs.readFileSync('./certificate/test00.csr'),
    // },
  },

  // рендерим все в папку
  outputDir: path.resolve(__dirname, "./web"),
  assetsDir: "./resource/",

  filenameHashing: true,

  chainWebpack: (config) => {
    // test
    // config.resolve.alias.set('@FormValidate' , path.join(__dirname, './src/component/FormValidate')   );
    // добавляем свои сокращения
    config.resolve.alias.set('@img'  , path.join(__dirname, './resource/img')   );
    config.resolve.alias.set('@font' , path.join(__dirname, './resource/font')  );
    config.resolve.alias.set('@style', path.join(__dirname, './resource/style') );
    config.resolve.alias.set('@lang' , path.join(__dirname, './resource/lang')  );
    config.resolve.alias.set('@public', path.join(__dirname, './public')  );
    // system
    config.resolve.alias.set('@page'      , path.join(__dirname, './src/page')        );
    config.resolve.alias.set('@component' , path.join(__dirname, './src/component')   );
    config.resolve.alias.set('@'          , path.join(__dirname, './src')             );

    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({ /* ... */ });
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        // Подключать только переменные, иначе стили будут дублироваться!!!
        path.resolve(__dirname, './resource/style/variable.scss'),
      ]
    }
  },
};
