// http://www.harmontan.info/index.php/2015/08/29/detect-global-object-type-and-runtime/
import { isObject } from "../types";
export const ENVIRONMENTS = {
  web: 0,
  wxapp: 1,
  node: 2,
  webworker: 3,
  unknown: "unknown"
};
const globalContext =
  // 运行于 浏览器网页 / Web Worker / Node.js
  (function(global) {
    return global.constructor
      .toString()
      .match(/^function\s+(\w+)\s*\(\)\s*\{\s*\[native code\]\s*\}$/)[1];
    // 输出以下其中之一:
    // "Window"
    // "DedicatedWorkerGlobalScope", "SharedWorkerGlobalScope", "ServiceWorkerGlobalScope"
    // "Object"
  })(window || global);
export const isWxAppEnv = false;
export const getEnv = () => {
  if (isWxAppEnv) {
    return ENVIRONMENTS.wxapp;
  }
  if (globalContext === "Window") {
    return ENVIRONMENTS.web;
  }
  if (globalContext === "Object") {
    return ENVIRONMENTS.node;
  }
  if (
    [
      "DedicatedWorkerGlobalScope",
      "SharedWorkerGlobalScope",
      "ServiceWorkerGlobalScope"
    ].indexOf(globalContext) !== -1
  ) {
    return ENVIRONMENTS.webworker;
  }
  return ENVIRONMENTS.unknown;
};
