import { isWxAppEnv, AppInfo, page } from './env';
import { isObject, isString, isFunction, isUndefined, isNumber } from './types';
import { setItem, getItem, getAll, removeAll, isVaildItemParams } from './storage';
import { getSystemInfo } from './system';
import { getLoginCode, getUserInfo, getJWD } from './login';
import { fetch, promisfy } from './fetch';
import { getCurrentPageUrl, getCurrentPageUrlWithArgs } from './url';
import emitter from './emitter';
import regex from './regex';

const { on: $on, off: $off, clear:$clear, clearAll: $clearAll, trigger: $trigger, once: $once } = emitter;
export {
    isWxAppEnv,
    AppInfo,
    page,
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
    $on,
    $off,
    $clear,
    $clearAll,
    $trigger,
    $once,
    regex,
}