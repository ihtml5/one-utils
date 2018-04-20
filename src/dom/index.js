import createAdapter from '../adapter';
import { isFunction, isObject } from "../types";

class DomWrapper {
  constructor(selector) {
    this.AdapterIns = createAdapter(window || wx);
  }
  init({
    engine,
  }) {
    this.AdapterIns = createAdapter(engine);
  }
  querySelector(selector) {
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
