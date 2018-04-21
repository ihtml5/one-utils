import { isFunction } from '../types';

class WebAdapter {
    constructor(props = {}) {
        const { engine } = props;
        this.engine = engine;
    }
    querySelector(selector) {
        this.nodeList = this.engine.document.querySelector(`${selector}`);
        return this.nodeList;
    }
    querySelectorAll(selector) {
        this.nodeList = this.engine.document.querySelectorAll(`${selector}`);
        return this.nodeList;
    }
    getBoundingClientRect(callback) {
        if (isFunction(callback)) {
            callback(this.nodeList.getBoundingClientRect());
        }
        return this.nodeList.getBoundingClientRect();
    }
}

export default WebAdapter;