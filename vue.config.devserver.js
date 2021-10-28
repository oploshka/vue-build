const path = require("path");

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

const devServer = {
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
};

module.exports = devServer;
