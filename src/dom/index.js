import createAdapter from '../adapter';
import { isFunction, isObject } from "../types";

class DomWrapper {
  init({
    engine,
  }) {
    this.AdapterIns = createAdapter({
      engine,
    });
    return this;
  }
  querySelector(selector) {
    console.log(this.AdapterIns);
    return this.AdapterIns.querySelector(selector);
  }
  querySelectorAll(selector) {
    this.selector = selector;
    return this.AdapterIns.querySelectorAll(selector);
  }
  getBoundingClientRect(callback) {
    return this.AdapterIns.getBoundingClientRect(callback);
  }
}

export default new DomWrapper();
