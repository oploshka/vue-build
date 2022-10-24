// /routing/index.js
const url = require('url');
// const fs = require('fs');

const define = async function(req, res, postData) {
  try {
    // localhost:3000/test => /test
    const urlParsed = url.parse(req.url, true);
    let path = urlParsed.pathname;
    const pObj = postData ? JSON.parse(postData) : {};
    let result = null;

    let pathEnd = '';
    let pathArr = path.split('/');
    if (pathArr.length > 1) {
      pathEnd = pathArr.pop();
      path = pathArr.join('/');
      const method = require("../method" + path);
      result = method[pathEnd](pObj);
    } else {
      const method = require("../method" + path);
      result = method(pObj);
    }
    // return
    res.end(JSON.stringify({
      success: true,
      data: result,
    }) );

  } catch (e){
    // console.log(e);
    if(e.code) {
      res.end(JSON.stringify({
        errorCode: e.code ,
        errorData: e.data,
      }));
    } else {
      res.end(JSON.stringify({
        errorCode: e.name ,
        errorData: {
          message: e.message
        },
      }));
      console.error(e);
    }
  }
}
exports.define = define;
