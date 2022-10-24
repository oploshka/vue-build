
// const path = require("path");

// eslint-disable-next-line
function relayRequestHeaders(proxyReq, req) {}
// eslint-disable-next-line
function relayResponseHeaders(proxyRes, req, res) {}
// eslint-disable-next-line
function bypassFunction(req, res, proxyOptions) {}

const testDomainProtocol  = process.env.DOMAIN_PROTOCOL;
const testDomainName      = process.env.DOMAIN_NAME;
const testDomainPort      = process.env.DOMAIN_PORT;
const testDomainFull      = testDomainProtocol + '://' + testDomainName + ':' + testDomainPort;

const devServer = {
  // TODO:
  //   host: testDomainName, https: true

  // proxyTable: {},
  // env: require('./dev.env'),
  port: testDomainPort,
  host: testDomainName,
  // host: '0.0.0.0',

  // assetsSubDirectory: 'static',
  // assetsPublicPath: '/',
  // cssSourceMap: false

  client: {
    webSocketURL: {
      hostname: testDomainName,
      pathname: '/ws',
      port: testDomainPort,
    },
  },

  // headers: {'Access-Control-Allow-Origin': '*'}, // is not work???
  // https: true,
  // https: {
  //   key : fs.readFileSync('./certificate/test00.key'),
  //   cert: fs.readFileSync('./certificate/test00.csr'),
  // },
};

// proxy
if(process.env.VUE_APP_URL_MODE === 'DEV_PROXY'){
  const proxy = {};
  const nameList = ['AUTH', 'API', 'EXTRACTION'];
  nameList.forEach((name) => {
    const valueProxy = process.env['VUE_APP_URL_DEV_PROXY_' + name];
    const valueUrl   = process.env['VUE_APP_URL_' + name];
    //
    proxy[valueProxy + '/*'] = {
      target: valueUrl,
      pathRewrite: {
        ['^' + valueProxy]: ''
      },
      changeOrigin: true,
      secure: false,
      logLevel: 'debug'
    };
  });

  /*
  // https://stackoverflow.com/questions/57032458/how-to-use-webpack-proxy-devserver-pathrewrite
  "/server-test-api/*": {
    // TODO: use config
    "target": "http://localhost:9130",
    "pathRewrite": {
      "^/server-test-api": ""
    },
    "changeOrigin": true,
    "secure": false,
    "logLevel": "debug"
  },
  */

  devServer.proxy = proxy;
}

module.exports = devServer;
