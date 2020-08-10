const path = require("path");

// eslint-disable-next-line no-unused-vars
function relayRequestHeaders(proxyReq, req) {}
// eslint-disable-next-line no-unused-vars
function relayResponseHeaders(proxyRes, req, res) {}
// eslint-disable-next-line no-unused-vars
function bypassFunction(req, res, proxyOptions) {}

let testDomainName = 'test.ru'; // TODO: fix
let testDomainPort = '8131';    // TODO: fix
let testDomainFull = "http://" + testDomainName + ":" + testDomainPort;

module.exports = {

  devServer: {
    public : testDomainName,
    proxy: {
      [testDomainFull]: {
        target: testDomainFull,
        secure: false,
        changeOrigin: true,
        bypass: bypassFunction,
        onProxyReq: relayRequestHeaders,
        onProxyRes: relayResponseHeaders,
        // router: routedRoutes
      },
    },
    headers: { "Access-Control-Allow-Origin": "*" } // is not work???
  },

  // рендерим все в папку
  outputDir: path.resolve(__dirname, "./web"),
  assetsDir: "./resource/",

  filenameHashing: true,

  chainWebpack: (config) => {
    // добавляем свои сокращения
    config.resolve.alias.set('@'     , path.join(__dirname, './src')            );
    config.resolve.alias.set('@img'  , path.join(__dirname, './resource/img')   );
    config.resolve.alias.set('@font' , path.join(__dirname, './resource/font')  );
    config.resolve.alias.set('@style', path.join(__dirname, './resource/style') );
    config.resolve.alias.set('@lang' , path.join(__dirname, './resource/lang')  );
    config.resolve.alias.set('@public', path.join(__dirname, './public')  );
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
