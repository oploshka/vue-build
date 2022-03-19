
// const path = require("path");

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

let devServer = {
  // TODO:
  //   host: testDomainName, https: true
  
  // proxyTable: {},
  // env: require('./dev.env'),
  port: testDomainPort,
  // assetsSubDirectory: 'static',
  // assetsPublicPath: '/',
  // cssSourceMap: false
  public: `${testDomainName}:${testDomainPort}`,
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
  let nameList = ['AUTH', 'API', 'MOCK'];
  nameList.forEach((name) => {
    let valueProxy = process.env['VUE_APP_URL_DEV_PROXY_' + name];
    let valueUrl   = process.env['VUE_APP_URL_' + name];
    //
    proxy[valueProxy + '/*'] = {
      target: valueUrl,
      pathRewrite: {
        ['^' + valueProxy]: ""
      },
      changeOrigin: true,
      secure: false,
      logLevel: "debug"
    }
  })
  
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
