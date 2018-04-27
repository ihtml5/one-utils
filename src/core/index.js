import dom from '../dom';
import createAdapter from '../adapter';
import { getEnv } from "./env";
import { isObject, isString, isFunction, isUndefined, isNumber } from "./types";
import { $on, $off, $once, $trigger } from '../emitter';

class Core {
    constructor({
        engine,
        log,
        emitter,
        promisfy,
        on,
        off,
        once,
        trigger,
    }) {
        this.engine = engine;
        this.adapterIns = createAdapter({
            engine,
        });
        this.$log = log || $log;
        this.emitter = emitter || $emitter;
        this.promisfy = promisfy || $promisfy;
        this.regex = Object.assign({}, $regex, regex);
        this.types = {
            isObject,
            isString,
            isFunction,
            isUndefined,
            isNumber,
        };
        this.getEnv = getEnv;
        this.$on = on || $on;
        this.$off = off || $off;
        this.$once = once || $once;
        this.$trigger = trigger || $trigger;
    }
    fetch({
        method = 'GET',
        body = {},
        header = {},
        url = ''
    }) {
        return this.adapterIns.fetch({
            url,
            method,
            body,
            header,
        })
    }
    querySelector(selector) {
        return this.adapterIns.querySelector(selector);
    }
    querySelectorAll(selector) {
        return this.adapterIns.querySelectorAll(selector);
    }
    getBoundingClientRect(callback) {
        return this.adapterIns.getBoundingClientRect(callback);
    }
}

export default Core;