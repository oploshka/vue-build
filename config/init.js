import ENUM from "./enum";
import ConstGenerate from "./constSchema.js";
global.ENUM = ENUM;

let preset = require("@/../config/preset.js").default;

let getPublicVal  = require('@/../config/preset/' + preset.public + '/public.js');
let getPrivateVal = require('@/../config/preset/' + preset.private + '/private.js');

let publicVal = getPublicVal();
let privateVal = getPrivateVal();

export default ConstGenerate(publicVal, privateVal);

