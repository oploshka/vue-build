import RequestManager from 'js-request-manager';

// RequestSchema
import RequestSchema from "./RequestSchema";

// Config
import hostSchema      from "./Config/HostSchema";
import RequestPrepare  from "./Config/RequestPrepare";
import ResponsePrepare from "./Config/ResponsePrepare";
import Hook            from "./Config/Hook";

import axios from "axios";

global.RequestManager = RequestManager(RequestSchema,{
  hostSchema      : hostSchema,
  RequestPrepare  : RequestPrepare,
  ResponsePrepare : ResponsePrepare,
  Hook            : Hook,
  RequestClient   : {
    async send(obj) { return await axios(obj); },
  }
});
