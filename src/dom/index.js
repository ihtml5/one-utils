import { getEnv } from "../env";
import { wx } from "../global";
import { isFunction } from "../types";

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
          if (isFunction(callback)) {
            callback(res[0]);
          }
          resolve(res[0]);
        });
      });
    }
  }
}

export default new WxDomCore();
