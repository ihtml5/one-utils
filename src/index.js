import { isWxAppEnv, AppInfo, page } from "./env";
import {
  App,
  Page,
  wx
} from './global';
import { isObject, isString, isFunction, isUndefined, isNumber } from "./types";
import {
  setItem,
  getItem,
  getAll,
  removeAll,
  removeItem,
  isVaildItemParams
} from "./storage";
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
  removeItem,
  promisfy,
  getCurrentPageUrl,
  getCurrentPageUrlWithArgs,
  $on,
  $off,
  $trigger,
  $once,
  regex,
  $log,
  App,
  wx,
  Page,
};
