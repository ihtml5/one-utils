import { isObject, isFunction } from "../base";

class WxAppAdapter {
  constructor(props = {}) {
    const { engine } = props;
    this.engine = engine;
  }
  querySelector(selector) {
    this.nodeList = this.engine.createSelectorQuery().select(`${selector}`);
    return this.nodeList;
  }
  querySelectorAll(selector) {
    this.nodeList = this.engine.createSelectorQuery().selectAll(`${selector}`);
    return this.nodeList;
  }
  getBoundingClientRect(callback) {
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
  fetch({ method, url, body, header }) {
    return new Promise((resolve, reject) =>
      this.engine.request({
        url,
        data: body,
        method,
        header,
        success: resolve,
        fail: reject,
        complete: emptyFunction
      })
    );
  }
}

export default WxAppAdapter;
