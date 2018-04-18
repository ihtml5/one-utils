import { getEnv, isWxAppEnv } from "./env";
import oneUtilsGlobal from './global';
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
import { getSystemInfo } from "./system";
import { getLoginCode, getUserInfo, getJWD } from "./login";
import { fetch } from "./fetch";
import promisfy from "./promisfy";
import { getCurrentPageUrl, getCurrentPageUrlWithArgs } from "./url";
import emitter from "./emitter";
import regex from "./regex";
import $log from './log';
const {
  App,
  Page,
  wx,
  Component,
} = oneUtilsGlobal;
const {
  on: $on,
  off: $off,
  trigger: $trigger,
  once: $once
} = emitter;
export {
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
  App,
  wx,
  Page,
  Component,
  // dom
  dom,
  adapter
};
