import AdapterIns from '../adapter';
import { isFunction, isObject } from "../types";

class DomWrapper {
  constructor(selector) {
    this.selector = selector;
  }
  querySelector(selector) {
    console.log('log', AdapterIns.querySelector(selector));
    return AdapterIns.querySelector(selector);
  }
  querySelectorAll(selector) {
    this.selector = selector;
    return AdapterIns.querySelectorAll(selector);
  }
  getBoundingClientRect(callback) {
    return AdapterIns.getBoundingClientRect(callback);
  }
}

export default new DomWrapper();
