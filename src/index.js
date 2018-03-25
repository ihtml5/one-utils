import { isWxAppEnv } from './env';
import { isObject, isString, isFunction, isUndefined, isNumber } from './types';
import { setItem, getItem, getAll, removeAll, isVaildItemParams } from './storage';
import { getSystemInfo } from './system';
import { getLoginCode, getUserInfo, getJWD } from './login';
import { fetch, promisfy } from './fetch';
import { getCurrentPageUrl, getCurrentPageUrlWithArgs } from './url';
export {
    isWxAppEnv,
    isObject,
    isString,
    isFunction,
    isUndefined,
    isNumber,
    setItem,
    getItem,
    isVaildItemParams,
    fetch,
    getLoginCode,
    getUserInfo,
    getJWD,
    getSystemInfo,
    getAll,
    removeAll,
    promisfy,
    getCurrentPageUrl,
    getCurrentPageUrlWithArgs,
}