import createAdapter from '../adapter';
import { getEnv } from "../env";
import $log from '../log';
import { isObject, isString, isFunction, isUndefined, isNumber } from "../base";
import $emitter from '../emitter';
import $regex from '../regex';
import $promisfy from '../promisfy';

const {
    $on,
    $off,
    $once,
    $trigger
} = $emitter;

class Core {
    constructor({
        engine,
        log,
        promisfy,
        on,
        off,
        once,
        trigger,
        regex = {}
    }) {
        this.engine = engine;
        this.adapterIns = createAdapter({
            engine,
        });
        $log('this.adapterIns====', this.adapterIns);
        this.$log = log || $log;
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