import { getEnv } from '../env';
import { wx } from '../global';
import { isFunction } from '../types';

class WxDomCore {
    constructor(selector) {
        this.envName = getEnv();
        this.selector = selector;
    }
    querySelector(selector) {
        this.selector = selector;
        if (this.envName === 'browser') {
            this._selectResult = document.querySelector(selector);
        }
        if (this.envName === 'wxapp') {
            const wxQuery = wx.createSelectorQuery();
            this._selectResult = wxQuery.select(this.selector);
        }
        return this;
    }
    getBoundingClientRect(callback) {
        let result = null;
        if (this.envName === 'browser') {
            if (isFunction(callback)) {
                callback(this._selectResult.getBoundingClientRect());
            }
            return this._selectResult.getBoundingClientRect();
        }
        if (this.envName === 'wxapp') {
            return new Promise((resolve, reject) => {
                this._selectResult.boundingClientRect().exec(res => {
                    if (isFunction(callback)) {
                        callback(res);
                    }
                    resolve(res);xw
                });
            });
        }
    }
}

export default new WxDomCore();
