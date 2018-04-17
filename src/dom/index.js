import { getEnv } from "../env";
import { wx } from "../global";
import { isFunction } from "../types";

class WxDomCore {
  constructor(selector) {
    this.environment = getEnv();
    this.selector = selector;
  }
  querySelector(selector) {
    this.selector = selector;
    if (this.environment === "browser") {
      this.node = document.querySelector(selector);
    }
    if (this.environment === "wxapp") {
      this.node = wx.createSelectorQuery().select(selector);
    }
    return this;
  }
  getBoundingClientRect(callback) {
    if (this.environment === "browser") {
      if (isFunction(callback)) {
        callback(this.node.getBoundingClientRect());
      }
      return this.node.getBoundingClientRect();
    }
    if (this.environment === "wxapp") {
      return new Promise((resolve, reject) => {
        this.node.boundingClientRect().exec(res => {
          const { top, left, right, bottom } = res[0];
          if (isFunction(callback)) {
            callback({
              top,
              left,
              right,
              bottom
            });
          }
          resolve({
            top,
            left,
            right,
            bottom
          });
        });
      });
    }
  }
}

export default new WxDomCore();
