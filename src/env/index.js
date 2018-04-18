// http://www.harmontan.info/index.php/2015/08/29/detect-global-object-type-and-runtime/
import { isObject } from '../types';
export const ENVIRONMENTS = {
    web: '0',
    wxapp: '1',
    node: '2',
    webworker: 3,
    unknown: 'unknown',
}
// 运行于 浏览器网页 / Web Worker / Node.js
// 输出以下其中之一: 
// "Window"
// "DedicatedWorkerGlobalScope", "SharedWorkerGlobalScope", "ServiceWorkerGlobalScope" 
// "Object"
export const globalContext = (global => global.constructor.toString().match(/^function\s+(\w+)\s*\(\)\s*\{\s*\[native code\]\s*\}$/)[1])(this);
export const isWxAppEnv = !(!wx || !Page || !App || !Component);
export const getEnv = () => {
    if (isWxAppEnv) {
        return ENVIRONMENTS.wxapp;
    }
    if (isObject(window) && window.location) {
        return  ENVIRONMENTS.web;
    }
    if (isObject(global) && global.setTimeout) {
        return  ENVIRONMENTS.node;
    }
    return ENVIRONMENTS.unknown;
}
