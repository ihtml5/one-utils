import { getEnv } from "../env";
import { wx } from "../global";
import { isFunction, isObject } from "../types";

class WxDomCore {
  constructor(selector) {
    this.environment = getEnv();
    this.selector = selector;
  }
  querySelectorAll(selector) {
    this.selector = selector;
    if (this.environment === "browser") {
      this.nodeList = document.querySelectorAll(selector);
    }
    if (this.environment === "wxapp") {
        this.nodeList = wx.createSelectorQuery().selectAll(selector);
    }
    return this;
  }
  querySelector(selector) {
    this.selector = selector;
    if (this.environment === "browser") {
      this.nodeList = document.querySelector(selector);
    }
    if (this.environment === "wxapp") {
      this.nodeList = wx.createSelectorQuery().select(selector);
    }
    return this;
  }
  getBoundingClientRect(callback) {
    if (this.environment === "browser") {
      if (isFunction(callback)) {
        callback(this.nodeList.getBoundingClientRect());
      }
      return this.node.getBoundingClientRect();
    }
    if (this.environment === "wxapp") {
      return new Promise((resolve, reject) => {
        this.nodeList.boundingClientRect().exec(res => {
          const returnVal = isObject(res[0]) ? res[0] : res;
          if (isFunction(callback)) {
            callback(returnVal);
          }
          resolve(returnVal);
        });
      });
    }
  }
}

export default new WxDomCore();
