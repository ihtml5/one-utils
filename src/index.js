import { isWxAppEnv, AppInfo, page } from "./env";
import { isObject, isString, isFunction, isUndefined, isNumber } from "./types";
import {
  setItem,
  getItem,
  getAll,
  removeAll,
  isVaildItemParams
} from "./storage";
import { getSystemInfo } from "./system";
import { getLoginCode, getUserInfo, getJWD } from "./login";
import { fetch } from "./fetch";
import promisfy from "./promisfy";
import { getCurrentPageUrl, getCurrentPageUrlWithArgs } from "./url";
import { on as $on, off as $off, once as $once, trigger as $trigger, once as $once} from "./emitter";
import regex from "./regex";
import $log from './log';

const {
  on: $on,
  off: $off,
  clear: $clear,
  clearAll: $clearAll,
  trigger: $trigger,
  once: $once
} = emitter;
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
  clear,
  clearAll,
  $trigger,
  $once,
  regex,
  $log,
};
