import { isWxAppEnv } from '../env';
import { isObject, isString, isFunction, isUndefined } from '../types';

const isVaildItemParams = itemInfo => {
  if (isObject(itemInfo)) {
    const { key, data, success, fail, complete, sync, type } = itemInfo;
    if (!isString(key) && !isUndefined(key)) {
      return false;
    }
    if (!isString(data) || !isObject(data)) {
      return false;
    }
    if (!isFunction(success) && !sync && !isUndefined(fail)) {
      return false;
    }
    if (!isFunction(fail) && !sync && !isUndefined(fail)) {
      return false;
    }
  }
  return false;
};
const setItem = (itemInfo = {}) => {
  if (isVaildItemParams(itemInfo)) {
    const { key, data, success, fail, complete, sync } = itemInfo;
    try {
      if (sync) {
        return wx.setStorageSync(key, data);
      }
      return wx.setStorage(itemInfo);
    } catch (err) {
      console.warn(`请检查传入的参数是否正确${itemInfo}`);
    }
  }
  console.warn(`请检查传入的参数是否正确${itemInfo}`);
};
const getItem = (itemInfo = {}) => {
  if (isVaildItemParams(itemInfo)) {
    const { key, data, success, fail, complete, sync } = itemInfo;
    try {
      if (sync) {
        return wx.getStorageSync(key);
      }
      return wx.getStorage(itemInfo);
    } catch (err) {
      console.warn(`请检查传入的参数是否正确${itemInfo}`);
    }
  }
  console.warn(`请检查传入的参数是否正确${itemInfo}`);
};
const getAll = (info = {}) => {
  if (isVaildItemParams(info)) {
    try {
      const { success, fail, complete, sync } = info;
      if (sync) {
        return wx.getStorageInfoSync();
      }
      return wx.getStorage(info);
    } catch (err) {
      console.warn(`请检查传入的参数是否正确${info}`);
    }
  }
};
const removeItem = (itemInfo = {}) => {
  if (isVaildItemParams(itemInfo)) {
    const { key, success, fail, complete, sync } = info;
    try {
      if (sync) {
        wx.removeStorageSync(key);
      }
      wx.removeStorage(itemInfo);
    } catch (err) {
      console.warn(`请检查传入的参数是否正确${info}`);
    }
  }
  console.warn(`请检查传入的参数是否正确${info}`);
};
const removeAll = sync => {
  if (sync) {
    return wx.clearStorageSync();
  }
  return wx.clearStorage();
};
export { setItem, getItem, getAll, removeAll };
