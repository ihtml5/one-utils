import { isObject } from '../types';
export const ENVIRONMENTS = {
    web: '0',
    wxapp: '1',
    node: '2',
    unknown: 'unknown',
}
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