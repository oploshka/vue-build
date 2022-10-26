
// alias
require('module-alias/register')

// server.js
const http = require('http');
const routing = require('./routing');
require('dotenv').config();


let server = new http.Server(function(req, res) {
  let jsonString = '';
  res.setHeader('Content-Type', 'application/json');
  req.on('data', (data) => {
    jsonString += data;
  });

  req.on('end', () => {
    routing.define(req, res, jsonString);
  });
});

server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST);
