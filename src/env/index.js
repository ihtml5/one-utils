import { isObject } from '../types';

export const isWxAppEnv = !(!wx || !Page || !App || !Component);
export const getEnv = () => {
    if (isWxAppEnv) {
        return 'wxapp';
    }
    if (isObject(window) && window.location) {
        return 'browser';
    }
    if (isObject(global) && global.setTimeout) {
        return 'node';
    }
    return 'unknown';
}