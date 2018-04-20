import { getEnv, isWxAppEnv } from "./env";
import adapter from './adapter';
import { isObject, isString, isFunction, isUndefined, isNumber } from "./types";
import {
  setItem,
  getItem,
  getAll,
  removeAll,
  removeItem,
  isVaildItemParams
} from "./storage";
import dom from './dom';
import engine from './engine';
import { getSystemInfo } from "./system";
import { getLoginCode, getUserInfo, getJWD } from "./login";
import { fetch } from "./fetch";
import promisfy from "./promisfy";
import { getCurrentPageUrl, getCurrentPageUrlWithArgs } from "./url";
import emitter from "./emitter";
import regex from "./regex";
import $log from './log';

const {
  on: $on,
  off: $off,
  trigger: $trigger,
  once: $once
} = emitter;


const create = ({
  engine,
}) => {
  dom.init({engine});
  return {
    // 获取宿主环境
    isWxAppEnv,
    getEnv,
    // 基础类型判断
    isObject,
    isString,
    isFunction,
    isUndefined,
    isNumber,
    // 缓存读写
    setItem,
    getItem,
    removeAll,
    removeItem,
    getAll,
    isVaildItemParams,
    // 网络请求
    fetch,
    getLoginCode,
    getUserInfo,
    getJWD,
    getSystemInfo,
    // promisfy
    promisfy,
    // url
    getCurrentPageUrl,
    getCurrentPageUrlWithArgs,
    // 事件处理
    $on,
    $off,
    $trigger,
    $once,
    // 常用正则表达式
    regex,
    // 日志
    $log,
    // 全局对象
    // dom
    dom,
    adapter,
    engine,
  };
}

export {
  create,
}